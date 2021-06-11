// 参考
// https://www.openprocessing.org/sketch/826848#

//let palette = ["#ee7b00", "#1f3d89", "#C14f7e", "#a7a9ab", "#69c4d0"]
let palette = ["#c13a1e", "#6e7e31", "#867039", "#d27202", "#aab050"]
let pos = [];
let wh = [];

function setup() {
    createCanvas(600, 600);
    noLoop();
    rectMode(CENTER);
}

function draw() {
    background(255);
    noFill();
    stroke(255);
    strokeWeight(2);
    divideRect(0, 0, width, height, 100);
    for(let i =0; i < pos.length; i ++) {
        let x = pos[i].x;
        let y = pos[i].y;
        let w = wh[i].x;
        let h = wh[i].y;
        let xOff = 1 //random(-1, 1) * 6;
        let yOff = 1 //random(-1, 1) * 6;
        let angle = random(-1, 1) * 0.05;
        let rnd = random(0.7, 1.05);
        noStroke();
        fill(random(palette));
        push();
        translate(x, y);
        rotate(angle);
        rect(xOff, yOff, w * rnd, h * rnd);
        pop();
    }
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 2000);
}

function divideRect(x, y, w, h, min) {
    let p = 0.2;
    if (w > min || h > min) {
        if (w >= h) {
            let rdrw = random(0.1, 0.9) * w;
            divideRect(x, y, rdrw, h, min);
            divideRect(x + rdrw, y, w - rdrw, h, min);
        }
        if (w < h) {
            let rndh = random(0.1, 0.9) * h;
            divideRect(x, y, w, rndh, min);
            divideRect(x, y + rndh, w, h - rndh, min);
        }
    }
    else {
        rect(x + w / 2, y + h / 2, w, h);
        if (random(1) < 0.5) {
            addRect(x + w / 2, y + h / 2, w - 2, h - 2)
        }
    }
}

function addRect(x, y, w, h) {
    pos.push(createVector(x, y));
    wh.push(createVector(w, h));
}