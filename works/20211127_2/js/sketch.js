// カラーパレット
let cp1 = ['#96743b', '#601f13', '#2a5249', '#e5ddb5'];
let cp2 = ['#395f85', '#97ae73', '#8aaea9', '#52556e'];
let cp3 = ['#cacda5', '#da471d', '#008a82', '#e1e2d6'];
let cp4 = ['#cdde67', '#d44f97', '#9d3c3e', '#ddebd5'];
let cp5 = ['#e1ddc3', '#efd7a3', '#e3c36e', '#605d54'];
let colorPalette = [cp1, cp2, cp3, cp4, cp5];
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
        this.r = width/20;
        // this.reps = floor(random(3, 7));
        this.reps = 120;
        this.dsp = 5;
        this.rotation = 0;
    }


    render(){
        rotate(random(360))
        for (let i = this.reps; i > 0; i -= 2){
            fill(colors[i%3])
            rotate(this.rotation + i * 22.5);
            ellipse(0, 0, this.r, this.r - i) ;
        }
    }
}

function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}