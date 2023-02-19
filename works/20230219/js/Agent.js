class Agent {
    constructor(originX, originY, width, height, c){
        this.x = originX + width/2;
        this.y = originY + height/2;
        this.color = c;
        this.size = 0.3
        this.speed = random([-1, 1]);
        this.noiseScale = random([random(1000, 2000), random(3000, 5000)]);
        this.noiseStrength = random([random(10, 50), random(100, 150)]);
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