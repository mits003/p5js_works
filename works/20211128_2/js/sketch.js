let figures = [];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    background('#fff');
    colorMode(HSB, 360, 100, 100, 100);
    
    for (let i = 0; i < 10; i++){
        let f = new Figure(i);
        figures.push(f);
    }
}

function draw() {
    background('#fff');
    
    for (let i = 0; i < figures.length; i++){
        figures[i].collide();
        figures[i].edges();
        figures[i].move();
        figures[i].show();
    }

}


class Figure {
    constructor(index) {
        this.index = index
        this.radius = 20;
        this.pos = createVector(random(this.radius, width - this.radius), random(this.radius, height - this.radius));
        this.vel = p5.Vector.random2D().mult(2);
        this.h = random(360);
    }

    show(){
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
        fill(color(this.h, 100, 100, 100))
    }

    collide() {
        for (let i = 0; i < figures.length; i ++ ){
            let d = dist(this.pos.x, this.pos.y, figures[i].pos.x, figures[i].pos.y);
            if (d < this.radius + figures[i].radius && this.index !== i){
                this.vel.x *= -1;
                this.vel.y *= -1;
                break
            }
        }
    }

    edges() {
        if (this.pos.x < this.radius || this.pos.x > width - this.radius) {
            this.vel.x *= -1;
        }
        if (this.pos.y < this.radius || this.pos.y > height - this.radius) {
            this.vel.y *= -1;
        }
    }
    move() {
        this.pos.add(this.vel);
        if (this.h < 360) {
            this.h += 1;
        } else {
            this.h = 0
        }

    }
}

function mouseClicked(){
    window.location.reload();
}