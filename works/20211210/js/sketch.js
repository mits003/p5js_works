let colors = ['#81b214', '#ffcc29', '#262d40', '#008db7', '#bf6b90', '#005ea7', '#c2b3d5', '#ee7700'];

let num_circles = 2;

function setup() {
    let canvas = createCanvas(600, 600);
    noLoop();
    angleMode(DEGREES);
    background('#e6e7db');
    noStroke();

    for (let i = 0; i < num_circles; i++){
        fill(random(colors))
        let cx = width/3*(i+1)-80;
        let cy = height/3*(i+1)-80;
        ellipse(cx, cy, 200)
    }
}

function draw(){
    getPixel();
}

function drawLine(x, y, r, g, b) {
    let length = random(10, 100);
    stroke(r, g, b);
    strokeWeight(1);
    noFill();
    line(x, y, x+length, y+length);
}


function getPixel() {
    for (let y = height; y >= 0; y -= 1) {
        for (let x = 0; x <= width; x += 1) {
            const index = random();
            const color = get(x, y);
            const r = color[0];
            const g = color[1];
            const b = color[2];
            if (index > 0.3) drawLine(x, y, r, g, b);
        }
    }
}

function mouseClicked(){
    window.location.reload();
}

