// カラーパレット
let cp1 = ['#335c67','#fff3b0','#e09f3e','#9e2a2b','#540b0e'];
let cp2 = ['#002642','#840032','#e59500','#e5dada','#02040f'];
let cp3 = ['#fb6107','#f3de2c','#7cb518','#5c8001','#fbb02d'];
let cp4 = ['#780116','#f7b538','#db7c26','#d8572a','#c32f27'];
let cp5 = ['#3a2e39','#1e555c','#f4d8cd','#edb183','#f15152'];
let colorPalette = [cp1, cp2, cp3, cp4, cp5];
let colors;
let c = []

let num_stripes = 2;

let cells_in = 0;
let cells_out = cells_in + 1;
let figuresNum = cells_in ** 2 + cells_out ** 2;
let figures = [];

let r = 200;

function setup() {
    let canvas = createCanvas(600, 600);
    window
    noLoop();
    angleMode(DEGREES);
    colors = random(colorPalette);

    for (let i = 0; i < 1; i++) {
        index = colors.indexOf(random(colors));
        if (index > -1) {
            c.push(colors[index])
            colors.splice(index, 1);
        }
    }

    background(c[0]);


    let offset = width / 1;

    let w = (width - offset * 2) / cells_out;
    let h = (height - offset * 2) / cells_out;

    for (let i = 0; i < figuresNum; i++) {
        figures.push(new Figure());
    }

    let num = 0;
    for (let j = 0; j < cells_out; j++) {
        for (let i = 0; i < cells_out; i++) {
            let x = offset + i * w;
            let y = offset + j * h;
            let cx = x + w / 2;
            let cy = y + h / 2;
            push();
            translate(cx, cy);
            figures[num].render();
            num += 1;
            pop();
        }
    }
    for (let j = 0; j < cells_in; j++) {
        for (let i = 0; i < cells_in; i++) {
            let x = offset + i * w;
            let y = offset + j * h;
            let cx = x + w / 2;
            let cy = y + h / 2;
            push();
            translate(cx + w / 2, cy + h / 2);
            figures[num].render();
            num += 1;
            pop();
        }
    }
}

class Figure {
    constructor(){
        this.r = r;
        this.angle = random([90, 180]);
        this.interval = floor(random(2, 4));
    }

    render(){
        let c1 = random(colors);
        let c2 = random(colors);
        while (c1 === c2){
            c2 = random(colors);
        }
        fill(c1);
        noStroke();
        ellipse(0, 0, this.r*2);
        rotate(random(360));
        stroke(c2);
        for (let j = 0; j < num_stripes; j++){
            // let d = random(0.2, 0.4);
            let d = random(0.5, 2);
            let mag = random(5, 10);
            rotate(this.angle*j);
            for (let i = -this.r/4*5; i < this.r/4*5; i += this.interval){
                let x1 = -sqrt(this.r**2 - i**2);
                let x2 = sin(i/d) * mag - this.r/2;
                if (x1 < x2) {
                    line(x1, i, x2, i);
                } else {
                    ellipse(x2, i, 1);
                }
            }
        }
    }
}

function mouseClicked(){
    window.location.reload();
}

