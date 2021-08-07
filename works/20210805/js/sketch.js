// カラーパレット
let colors = ['#FFD922','#FFC34B', '#FFB522','#FFB522', '#FF8622'] ;
// let colors = ['#06AED5', '#086788', '#F0C808', '#E77211', '#DD1C1A'];
// let colors = [
//     '#ee59ae',
//     '#d95fbe',
//     '#c065cb',
//     '#a26cd5',
//     '#7f72da',
//     '#617cdf',
//     '#3e85df',
//     '#008cdc',
//     '#0098d6',
//     '#00a1c8',
//     '#00a7b6',
//     '#22aca3'
// ];

// let colors = [
//     '#d87834ff',
//     '#ee9739ff',
//     '#ffc425ff',
//     '#ffdd4fff',
//     '#9dcd4fff',
//     '#76ba4fff',
//     '#095339ff',
// ];
let r;
let R = 5;
let A = 8;
let drops = 12;
let flowers = 1;
let cells_in = 9;
let cells_out = cells_in + 1;
let figuresNum = cells_in;
let figures = [];

function setup() {
    frameRate(2);
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    for (let i = 0; i < figuresNum; i++) {
        figures.push(new Figure());
    }
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
}

function draw() {
    background('#264653');
    let offset = width / 1;

    let w = (width - offset * 2) / cells_out;
    let h = (height - offset * 2) / cells_out;

    noStroke();
    for (let j = 0; j < cells_out; j++) {
        for (let i = 0; i < cells_out; i++) {
            let x = offset + i * w;
            let y = offset + j * h;
            let cx = x + w / 2;
            let cy = y + h / 2;
            push();
            translate(cx, cy);
            figures[floor(random(figuresNum))].render();
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
            figures[floor(random(figuresNum))].render();
            pop();
        }
    }

}

class Figure {
    constructor() {
        this.r;
        this.R = 10;
        this.A = 8;
        this.drops = 12;
    }

    render() {
        fill(random(colors));
        for (let i = 0; i < this.drops; i++) {
            push();
            translate(
                this.R * cos(radians((360 * i) / this.drops)),
                this.R * sin(radians((360 * i) / this.drops))
            );
            rotate(radians((360 * i) / this.drops));
            beginShape();
            for (let t = 0; t < TWO_PI; t += 0.1) {
                r = 1 / (A * sin(t / 2) + 1);
                vertex(this.R * r * cos(t), this.R * r * sin(t));
            }
            endShape(CLOSE);
            pop();
        }
    }
}
