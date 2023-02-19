class Circle {
    constructor(x, y, r, colors){
        this.x = x;
        this.y = y;
        this.r = r;
        this.colors = colors;
        this.speed = 5;
        this.noiseScale = 20;
        this.noiseStrength = 10;
    }

    display(){
        push();
        translate(this.x, this.y);
        rotate(random(PI));

        noStroke();
        let c = random(this.colors)
        if (random(1) < 0.05){
            for (let i = 0; i < 1.5; i += 0.2){
                rotate(PI/i);
                fill(c)
                arc(0, 0, this.r*(2-i), this.r*(2-i), 0, TWO_PI);
                fill('#f7f7f7');
                arc(0, 0, this.r*(2-i), this.r*(2-i)-5, 0, TWO_PI);
            }
        } else {
            for (let i = 0; i < 1.5; i += 0.2){
                rotate(PI/i);
                fill('#f7f7f7');
                arc(0, 0, this.r*(2-i), this.r*(2-i), 0, TWO_PI);
                fill(c)
                arc(0, 0, this.r*(2-i), this.r*(2-i)-5, 0, TWO_PI);
            }
        }
        pop();
    }
    
    update(){
    }
}
