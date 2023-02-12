class YinYang {
    constructor(x, y, r, colors){
        this.x = x;
        this.y = y;
        this.r = r;
        this.colors = colors;
        this.speed = 5;
        this.noiseScale = 150;
        this.noiseStrength = 10;
    }

    display(){
        let angle = noise(this.x/this.noiseScale, this.y/this.noiseScale) * this.noiseStrength;
        push();
        translate(this.x, this.y);
        rotate(angle);
        noStroke();
        let pickupCNum = map(noise(this.x*0.1, this.y*0.1), 0, 1, 0, this.colors.length)
        let c = this.colors.splice(pickupCNum, 2);
        let c2 = random(this.colors);
        this.colors.push(c[0]);
        this.colors.push(c[1]);
        fill('#f7f7f7');
        arc(0, 0, this.r*2, this.r*2, 0, PI);
        fill(c[0]);
        arc(0, 0, this.r*2, this.r*2, PI, TWO_PI);
        fill('#f7f7f7');
        arc(-this.r/2, 0, this.r, this.r, PI, TWO_PI);
        fill(c[0]);
        arc(this.r/2, 0, this.r, this.r, TWO_PI, PI);
        pop();
    }
    
    update(){
    }
}
