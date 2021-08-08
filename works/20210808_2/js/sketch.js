let fr = 20;

let points = [];
let inc = 0.03;
let mult = 0.004;
let density = 60;
let cols, rows;

let bgColors = ['#ccb06b', '#d3bc95']
function setup() {
    // frameRate(fr)
    let canvas = createCanvas(600, 600);
    // angleMode(DEGREES);
    noiseDetail(1);
    background(random(bgColors));

    let space = width / density;


    for (let x = 0; x < width; x += space) {
        for (let y = 0; y < height; y += space) {
            let p = createVector(x, y);
            points.push(p);
        }
    }
}

function draw() {
    noStroke();
    for (let i = 0; i < points.length; i++) {
        // red streams
        let r = map(points[i].x, 0, width, 70, 160);
        let g = map(points[i].y, 0, height, 20, 50);
        let b = map(points[i].x, 0, width, 25, 45);
        // green streams
        // let r = map(points[i].x, 0, width, 25, 50);
        // let g = map(points[i].y, 0, height, 50, 120);
        // let b = map(points[i].x, 0, width, 25, 45);
        fill(r, g, b);
        let angle = map(
            noise(points[i].x * mult, points[i].y * mult),
            0,
            1,
            0,
            720
        );

        points[i].add(createVector(cos(angle), sin(angle)));
        ellipse(points[i].x, points[i].y, 1);
    }
}

function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png')
}