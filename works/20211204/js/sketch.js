let num_bands = 30;
let bands = [];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(windowHeight, windowHeight);
    
    // 背景色を指定
    background('#202020');
    // background('#f2f2f2');
    angleMode(DEGREES);
    // noStroke();
    
    for (let i = 0; i < num_bands; i++){
        let band = new Band();
        bands.push(band)
    }
    noLoop();
}

function draw() {
    for (let i = 0; i < num_bands; i++){
        bands[i].render();
    }
}

class Band {
    constructor(){
        this.num_cells = num_bands;
        
        this.h = height/this.num_cells;
        this.w = width/this.num_cells;
        
        this.x = floor(random(100, width-100));
        this.y = floor(random(100, height-100));
    }
    
    render() {
        fill(255);
        rect(0, 0, width, this.h);
        let cx = random([this.w/2, 0]);
        let cy = this.h/2;
        let choice = floor(random(6));
        noFill();
        stroke(1)
        for (let i = 0; i <= this.num_cells; i ++){
            if (choice === 0) {
                ellipse(this.w*i+cx, cy, this.h/2);
            } else if (choice === 1){
                line(-this.w/2+this.w*i+cx, cy, this.w*i+cx, -this.h/2+cy);
                line(this.w*i+cx, this.h/2+cy, this.w/2+this.w*i+cx, cy);
            } else if (choice === 2){
                arc(-this.w/2+this.w*i+cx, -this.h/2+cy, this.w, this.h, 1, 90);
                arc(this.w/2+this.w*i+cx, this.h/2+cy, this.w, this.h, 180,270);
            } else if (choice === 3){
                triangle(-this.w/2+this.w*i+cx, -this.h/2+cy, this.w*i+cx, this.h/2+cy, this.w/2+this.w*i+cx, -this.h/2+cy);
            } else if (choice === 4){
                rect(-this.w/2+this.w*i+cx, -this.h/2+cy, this.w/2, this.h);
            } else if (choice === 5){
                rect(-this.w/2+this.w*i+cx, -this.h/2+cy, this.w/2, this.h/2);
                rect(this.w*i+cx, this.h/2, this.w/2, this.h/2);
            }
        }
        translate(0, height/num_bands);
    }
}

function mouseClicked(){
    window.location.reload();
}