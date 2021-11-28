// カラーパレット
let cp1 = ['#edeadc', '#889086', '#2a5249', '#e5ddb5', '#00233a'];
let cp2 = ['#c93128', '#e6cd4c', '#e3f2fb', '#3e4d9e', '#507c90'];
let cp3 = ['#f7e95e', '#bfd47b', '#d98eaf', '#f8d2e3', '#d0d3e2'];
let colorPalette = [cp1, cp2, cp3];
let colors;

let squares;
let s = new Scribble();


let BASE_S = 20;
let BASE_B = 50;

function setup() {
    let canvas = createCanvas(windowHeight, windowHeight);
    colors = random(colorPalette);
    background('#fff');
    const mpss = new mPSS(width);
    squares = mpss.getSquares();
    noLoop();
}

function draw() {
    // noStroke();
    squares.forEach((sq) => {
        n = random(1);
        if (n > 0.6) {
            let c = random(colors);
            stroke(c);
            fillHachure(sq.x + 5, sq.y + 5, sq.x + sq.size - 5, sq.y + sq.size - 5);
        } else {
            let c1 = random(colors);
            stroke(c1);
            fillHachure(sq.x + 5, sq.y + 5, sq.x + sq.size - 5, sq.y + sq.size - 5);
            let c2 = random(colors);
            stroke(c2);
            fillHachure(sq.x + 5, sq.y + 5, sq.x + sq.size - 5, sq.y + sq.size - 5);
        }
    });
}

function fillHachure(xleft, ybottom, xright, ytop) {
    let xCoords = [xleft, xright, xright, xleft];
    let yCoords = [ytop, ytop, ybottom, ybottom];
    let gap = 3.5;
    let angle = 315;
    s.scribbleFilling(xCoords, yCoords, gap, angle);
}

function mouseClicked(){

    window.location.reload();
}