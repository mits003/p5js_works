// カラーパレット
let cp1 = ['#395f85', '#45a17f', '#8996ac','#8aaea9', '#3f8b92'];
let cp2 = ['#004f7a', '#7a8a92', '#423a57', '#dce5ec', '#9a7fb8'];
let cp3 = ['#5690c7', '#f1f8f7', '#7d7f7f', '#fdde83', '#649f44'];
let cp4 = ['#e2515a', '#5ba6b5', '#edce57', '#878f93', '#814336'];

let bgcp1 = ['#f2f2f2', '#8fc6c6'];
let bgcp2 = ['#d2d9e1', '#262d40'];
let bgcp3 = ['#fdfbeb', '#95a8ad'];


let colorPalette = [cp1, cp2, cp3, cp4];
let bgColorpalette = [bgcp1, bgcp2, bgcp3];
let colors;

let num_circles = 15;
let points = 180;
let levels = 5;

function setup() {
    let canvas = createCanvas(windowHeight, windowHeight);

    colors = random(colorPalette);
    bgColors = random(bgColorpalette)

    let gradient = drawingContext.createLinearGradient(width/2, 0, width/2, height);
    gradient.addColorStop(0, bgColors[0]);
    gradient.addColorStop(1, bgColors[1]);
    drawingContext.fillStyle = gradient;
    drawingContext.fillRect(0, 0, width, height);

    noLoop();
}

function draw() {
    for (i = 0; i < num_circles; i++) {
        mirage(
            random(-0.1, 1.1) * width,
            random(-0.1, 1.1) * height,
            random(3, 10)
        );
    }
}

function mirage(x, y, d) {
    push();
    translate(x, y);
    let col = color(random(colors));
    col.setAlpha(60);

    for (let j = 0; j < levels; j++){
        for (let i = 0; i < points; i++) {
            let ang = random(TWO_PI);
            stroke(col);
            point(pow(2, j) * cos(ang) * d, pow(2, j) * sin(ang) * d);
        }
    }
    pop();
}

function mouseClicked(){
    window.location.reload();
}