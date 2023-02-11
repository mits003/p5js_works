class Agent {
    constructor(width, height, c){
        this.x = width/2;
        this.y = height/2;
        this.color = c;
        this.size = random(1, 3)
        this.speed = random([-1, 1]);
        this.noiseScale = random(4000, 5000);
        this.noiseStrength = random(60, 100);
        this.len = width*0.45;
    }

    display(){
        strokeWeight(this.size);
        stroke(this.color);
        noFill();
        beginShape();
        for(let i = 0; i < this.len; i ++){
            this.update();
        }
        endShape();
    }

    update(){
        let angle = noise(this.x/this.noiseScale, this.y/this.noiseScale) * this.noiseStrength;
        this.x += cos(angle) * this.speed;
        this.y += sin(angle) * this.speed;
        curveVertex(this.x, this.y)
    }
}