// カラーパレット
// let colors = ['#FFD922', '#FFC34B', '#FFB522', '#FFB522', '#FF8622'];
// let colors = ['#06AED5', '#086788', '#F0C808', '#E77211', '#DD1C1A'];
let colors = [
    '#ee59ae',
    '#d95fbe',
    '#c065cb',
    '#a26cd5',
    '#7f72da',
    '#617cdf',
    '#3e85df',
    '#008cdc',
    '#0098d6',
    '#00a1c8',
    '#00a7b6',
    '#22aca3',
];

// let colors = ['#22ACA3','#2DA8A4','#37A3A4','#429FA5','#4D9BA5','#5896A6','#6292A6','#6D8DA7','#7889A8','#8385A8','#8D80A9','#987CA9','#A378AA','#AE73AB','#B86FAB','#C36AAC','#CE66AC','#D962AD','#E35DAD','#EE59AE']

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
let figuresNum = 1;
let figures = [];

function setup() {
    frameRate(1);
    // キャンバスサイズの設定
    let canvas = createCanvas(800, 800);

    for (let i = 0; i < figuresNum; i++) {
        figures.push(new Figure());
    }
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
}

function draw() {
    background('#232323');
    noStroke();
    for (let i = 0; i < 4; i++) {
        push();
        translate(width/2, height/2)
        rotate(radians(90 * i));
        figures[0].render();
        pop();
    }
}

class Figure {
    constructor() {
        this.r;
        this.R = 30;
        this.A = 8;
        this.drops = 12;
    }

    render() {
        for (let i = 0; i < this.drops; i++) {
            fill(colors[i]);
            push();
            translate(
                - this.R * cos(radians((360 * i) / this.drops)) * (i + 1),
                - this.R * sin(radians((360 * i) / this.drops)) * (i + 1)
            );
            rotate(radians((360 * i) / this.drops));
            beginShape();
            for (let t = 0; t < TWO_PI; t += 0.1) {
                r = 1 / (this.A * sin(t / 2) + 1);
                vertex(this.R * r * cos(t), this.R * r * sin(t));
            }
            endShape(CLOSE);
            pop();
        }
    }
}
