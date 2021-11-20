// カラーパレット
let colors = ['#06AED5', '#086788', '#F0C808','#E77211', '#DD1C1A'];
// let colors =['#ee59ae', '#d95fbe', '#c065cb', '#a26cd5', '#7f72da', '#617cdf', '#3e85df', '#008cdc', '#0098d6', '#00a1c8', '#00a7b6', '#22aca3'];


let num_circles = 30;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(windowHeight, windowHeight);

    // 背景色を指定
    // background('#202020');
    background('#f2f2f2');
    noLoop();
}

function draw() {
    for (i = 0; i < num_circles; i++) {
        mirage(
            random(-0.1, 1.1) * width,
            random(-0.1, 1.1) * height,
            random(10, 30)
        );
    }
}

function mirage(x, y, d) {
    let r = d * 0.5;
    let c = int(d * 1200);
    let col = color(random(colors));
    for (let i = 0; i < c; i++) {
        let ang = random(TWO_PI) * 4;
        let rad = sqrt(random(1)) * random(0.5) * 2 + 1;
        let len = ang * 1;
        col.setAlpha(random(50));
        stroke(col);
        point( x + cos(ang) * r^2 * rad * len, y + sin(ang) * r^2 * rad * len);
    }
}

function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png')
}