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

let gNum = 11;
let gBaseVectors = [];

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

    initialize();
}

function draw() {
    makeHexVector();
    makeLattice();
    drawTiling();
}

function initialize() {
    gLattecePoints = [];
    gBaseVectors = [];
    scalar = height * 1.0 / gNum;
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

function makeHexVector(){
    gBaseVectors[0] = p5.Vector.fromAngle(PI/2)
    gBaseVectors[1] = p5.Vector.fromAngle(PI/6)
}

function makeLattice(){
    const m = Math.ceil(gNum/gBaseVectors[1].x);
    for (let idRow = 0; idRow < gNum; idRow+=2){
        const vectorArray = [];
        for (let idColumn = 0; idColumn <= m; idColumn+=2){
            const vector = p5.Vector.mult(gBaseVectors[0], idRow * scalar)
            vector.add(p5.Vector.mult(gBaseVectors[1], idColumn * scalar))
            vectorArray.push(createVector(vector.x, vector.y % Math.floor(height + scalar)));
        }
        gLattecePoints.push(vectorArray)
    }
}

function drawTiling(){
    for (const vectorArray of gLattecePoints){
        for (const vector of vectorArray){
            push();
            translate(vector.x, vector.y);
            fill(random(colors));
            point(cos(ang) * r^2 * rad * len, sin(ang) * r^2 * rad * len);

            pop();
        }
    }
}

function mouseClicked(){
    window.location.reload();
}