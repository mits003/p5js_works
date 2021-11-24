let bgcp1 = ['#eeeedd', '#c4c07e'];
let bgcp2 = ['#d2d9e1', '#262d40'];
let bgcp3 = ['#fdfbeb', '#95a8ad'];
let bgcp = ['#fdfbeb', '#95a8ad'];
let bgColorpalette = [bgcp1, bgcp2, bgcp3];

let BASE_B = 60;
let BASE_S = 35;

function setup() {
    let canvas = createCanvas(windowHeight, windowHeight);
    background('#dddddd');
    colorMode(HSB, 360, 100, 100, 100);
    angleMode(DEGREES);


    bgColors = random(bgColorpalette);
    drawingContext.save();
    let gradient = drawingContext.createLinearGradient(width/2, 0, width/2, height);
    gradient.addColorStop(0, bgColors[0]);
    gradient.addColorStop(1, bgColors[1]);
    drawingContext.fillStyle = gradient;
    drawingContext.fillRect(0, 0, width, height);
    drawingContext.restore();

    rainfall(233, 80);

    h = random(360);
    for (let i = 1; i <= 3; i += 2){
        for (let j = 1; j <= 3; j +=2){
            push();
            translate(width/4 * i, height/4 * j)
            noStroke();
            fill(h, 30, 40);
            frames();
            rotate(180);
            fill(h, 25, 65);
            frames();
            pop();
        }
    }
}

function rainfall(base_h, density){
    rCtx = drawingContext
    rCtx.save();
    for(let i = 0; i < density; i++) {
        stroke(base_h,
            BASE_S - random(-5, 8),
            BASE_B - random(8),
            30);

        let x1 = random(width);
        let y1 = random(height);
        let theta = 90;
        let segmentLength = random(100, 120);
        let x2 = cos(theta) * segmentLength + x1;
        let y2 = sin(theta) * segmentLength + y1;

        rCtx.shadowOffsetX = 1;
        rCtx.shadowOffsetY = -3;
        rCtx.shadowBlur = 1;
        rCtx.shadowColor = 'black';
        line(x1, y1, x2, y2);
    }
    rCtx.restore();
}

function frames(){
    beginShape();
    vertex(-width/4, -height/4);
    vertex(width/4, -height/4);
    vertex(width/5, -height/5);
    vertex(-width/5, -height/5);
    vertex(-width/4, -height/4);
    endShape(CLOSE);

    beginShape()
    vertex(-width/4, -height/4);
    vertex(-width/5, -height/5);
    vertex(-width/5, height/5);
    vertex(-width/4, height/4);
    vertex(-width/4, -height/4);
    endShape(CLOSE);
}

function mouseClicked(){
    window.location.reload();
}