// カラーパレット
let cp1 = ['#d8e072', '#005ea7', '#72c6c7', '#d4ebec'];
let cp2 = ['#c2b3d5', '#bf6b90', '#e9e15d', '#e8dcdd'];
let cp3 = ['#deb643', '#d7d56f', '#9eb639', '#382e43'];
let cp4 = ['#008db7', '#ee7700', '#ffdc00', '#f5fefa'];
let colorPalette = [cp1, cp2, cp3, cp4];
let colors;

let cells_in = 3;
let cells_out = cells_in + 1;
let figuresNum = cells_in ** 2 + cells_out ** 2;
let figures = [];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    colors = random(colorPalette);
    background(colors[3]);
    angleMode(DEGREES);
    noStroke();

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
        this.r = random(width/20, width/10);
        this.dsp = 95;
    }


    render(){
        fill(random(colors.slice(0, 3)))
        rotate(random(360));
        ellipse(0, 0, this.r, this.r);
        shearX(this.dsp);
        shearY(this.dsp);
        ellipse(0, 0, this.r, this.r);
    }
}

function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}