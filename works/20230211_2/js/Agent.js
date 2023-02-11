class Agent {
    constructor(width, height, colors){
        this.x = random(0, width);
        this.y = random(0, height);
        this.colors = colors;
        this.speed = 5;
        this.noiseScale = 1500;
        this.noiseStrength = 10;
        this.len = 500;
    }

    display(){
        strokeWeight(0.1)
        for(let i = 0; i < this.len; i ++){
            this.update();
        }
    }

    update(){
        let angle = noise(this.x/this.noiseScale, this.y/this.noiseScale) * this.noiseStrength;
        this.x += cos(angle) * this.speed;
        this.y += sin(angle) * this.speed;
        let n = floor(map(noise(sin(angle)*10), 0, 1, 0, this.colors.length));
        stroke(this.colors[n]);
        this.brush(this.x, this.y);
    }

    brush(posX, posY){
        push();
        translate(posX, posY);
        line(-random(5), 0, random(5), 10);
        line(random(5), 0, -random(5), 10);
        pop();

    }
}
