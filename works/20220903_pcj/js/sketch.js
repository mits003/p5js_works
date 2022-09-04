// カラーパレット
let colors = ['#FF5F5F', '#F8907C', '#FFC2A7', '#FFEC57', '#9EF2BB', '#6CBAF4', '#4AD0E8'];

let cells_in = 24;
let cells_out = cells_in + 1;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES)
    background(random(colors));
    noLoop();
}

function draw(){
    let w = max(width, height) / cells_out;
    let h = w;

    for (let j = -1; j <= cells_out; j++) {
        for (let i = -1; i <= cells_out; i++) {
            let x = i * w;
            let y = j * h;
            let cx = x + w / 2;
            let cy = y + h / 2;
            push();
            translate(cx, cy);
            fill(random(colors));
            noStroke();
            ellipse(0, 0, w);
            pop();
        }
    }
    for (let j = -1; j <= cells_in; j++) {
        for (let i = -1; i <= cells_in; i++) {
            let x = i * w;
            let y = j * h;
            let cx = x + w / 2;
            let cy = y + h / 2;
            push();
            translate(cx + w / 2, cy + h / 2);
            fill(random(colors));
            noStroke();
            ellipse(0, 0, w);
            pop();
        }
    }
}


function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}