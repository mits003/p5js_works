// カラーパレット
let colors = ['#06AED5', '#086788', '#F0C808', '#E77211', '#DD1C1A'];
// let colors =['#ee59ae', '#d95fbe', '#c065cb', '#a26cd5', '#7f72da', '#617cdf', '#3e85df', '#008cdc', '#0098d6', '#00a1c8', '#00a7b6', '#22aca3'];

let particles = [];
let particleNum = 8;

let fr = 8;

function setup() {
    // キャンバスサイズの設定
    createCanvas(600, 600);
    // 背景色を指定
    background(255)
    angleMode(DEGREES);

    for (let i = 0; i < particleNum; i++) {
        particles.push(new Particle(0));
    }

    frameRate(fr); 

    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
}

function draw() {
    fill(255,255,255, 60); //最後の60は，透明度，つまりどれだけ残像が残るかを表す
    noStroke(); 
    rect(0, 0, width, height); 
    for (let i = 0; i < particles.length; i++) {
        let j = i + 1
        console.log(j)
        particles[i].move()
        particles[i].display_stroke();
        particles[i].display_fill();
    }
}

class Particle {
    constructor() {
        this.t_stroke = random(50);
        this.t_fill = random(50);
        this.tStep = 12;

        this.a_stroke = 70 + random(-10, 25);
        this.a_fill = 70 + random(-10, 25);
        this.r = random([4, 6, 8, 10,15, 20]);
        this.color = random(colors);
    }
    
    move(){
        this.t_stroke += this.tStep;
        this.t_fill += this.tStep;
    }

    display_stroke() {
        this.x_1 = width / 2 + cos(this.t_stroke) ** 3 * 3 * this.a_stroke;
        this.y_1 = height / 2 + sin(this.t_stroke) ** 3 * 3 * this.a_stroke;
        this.x_2 = width / 2 - cos(this.t_stroke) ** 3 * 3 * this.a_stroke;
        this.y_2 = height / 2 - sin(this.t_stroke) ** 3 * 3 * this.a_stroke;
        strokeWeight(2);
        stroke(this.color);
        noFill()
        circle(this.x_1, this.y_1, this.r);
        circle(this.x_2, this.y_2, this.r);
    }
    
    display_fill() {
        this.x_1 = width / 2 + cos(this.t_fill) ** 3 * 3 * this.a_fill;
        this.y_1 = height / 2 + sin(this.t_fill) ** 3 * 3 * this.a_fill;
        this.x_2 = width / 2 - cos(this.t_fill) ** 3 * 3 * this.a_fill;
        this.y_2 = height / 2 - sin(this.t_fill) ** 3 * 3 * this.a_fill;
        fill(this.color);
        noStroke();
        circle(this.x_1, this.y_1, this.r);
        circle(this.x_2, this.y_2, this.r);
    }
}
