// カラーパレット
let cp1 = ['#db7843', '#f2cd7c', '#50aa88'];
let cp2 = ['#cacd5a', '#90972e', '#008a82'];
let cp3 = ['#b5b190', '#a83a39', '#004745'];
let cp4 = ['#4c6f9e', '#d5a945', '#bfb865'];
let colorPalette = [cp1, cp2, cp3, cp4];
let colors;

let cells_in = 2;
let cells_out = cells_in + 1;
let figuresNum = cells_in;
let figures = [];

let x, y;

let x1, y1;
let x2, y2;

let a1 = 0;
let a2 = 0;

let a1Inc;
let a2Inc;

function setup() {
    frameRate(2);
    // キャンバスサイズの設定
    let canvas = createCanvas(windowHeight, windowHeight);
    colors = random(colorPalette);

    for (let i = 0; i < figuresNum; i++) {
        figures.push(new Figure());
    }
    r1 = random(50, 100);
    r2 = random(50, 100);
    a1 = 0;
    a2 = 0;

    a1Inc = floor(random(4, 120));
    a2Inc = floor(random(4, 12));

    background('#f7f7f7');
    let offset = width / 1;

    let w = (width - offset * 2) / cells_out;
    let h = (height - offset * 2) / cells_out;


    for (let j = 0; j < cells_out; j++) {
        for (let i = 0; i < cells_out; i++) {
            let x = offset + i * w;
            let y = offset + j * h;
            let cx = x + w / 2;
            let cy = y + h / 2;
            push();
            translate(cx, cy);
            stroke(random(colors));
            figures[0].render();
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
            stroke(random(colors));
            figures[0].render();
            pop();
        }
    }

}

class Figure {
    constructor(){
        this.r1 = random(20, 30);
        this.r2 = random(30, 60);
        this.a1Inc = floor(random(1, 12));
        this.a2Inc = floor(random(1, 12));
        this.rep = random([15, 30, 60, 90, 180])
    }

    render(){
        for (let i = 0; i < this.rep; i ++){
            let x1 = this.r1 * cos(a1);
            let y1 = this.r1 * sin(a1);
        
            let x2 = x1 + this.r2 * cos(a2);
            let y2 = y1 + this.r2 * sin(a2);
        
            line(x, y, x2, y2);
            
            x = x2;
            y = y2;
            a1 += this.a1Inc;
            a2 += this.a2Inc;
        }
    }
}


function mouseClicked(){
    window.location.reload();
}