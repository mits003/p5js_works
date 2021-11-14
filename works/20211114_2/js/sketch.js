// "Ch10_HexTiling" by tetunori http://openprocessing.org/sketch/864196
// License CreativeCommons Attribution ShareAlike https://creativecommons.org/licenses/by-sa/3.0

let cp1 = ['#335c67', '#99a88c', '#fff3b0', '#e09f3e', '#9e2a2b', '#540b0e'];
let cp2 = ['#90972e', '#da471d', '#b7cccf', '#6c3411', '#008a82', '#e2ba61'];
let cp3 = ['#699239', '#dbbd36', '#249078', '#007d98', '#f49e1b', '#5b0024'];
let colorPalette = [cp1, cp2, cp3]
let colors;

let gNum = 10;
let gLattecePoints = [];
let gBaseVectors = [];

let scalar;

function setup() {
    let canvas = createCanvas(windowHeight, windowHeight);
    colors = random(colorPalette);
    background('#f1deb5');
    stroke('#f1deb5');
    strokeWeight(2);
    initialize();

    drawTiling();
}

const initialize = () => {
    gLattecePoints = [];
    gBaseVectors = [];
    scalar = height * 1.0 / gNum;

    makeHexVector();
    makeLattice();
    drawTiling();
}

function drawTiling(){
    for (const vectorArray of gLattecePoints){
        for (const vector of vectorArray){
            push();
            translate(vector.x, vector.y);
            console.log(vector.x);
            fill(random(colors));
            drawHex();
            pop();
        }
    }
}

function makeLattice(){
    const m = Math.ceil(gNum/gBaseVectors[1].x);
    for (let idRow = 0; idRow <= gNum; idRow++){
        const vectorArray = [];
        for (let idColumn = 0; idColumn <= m; idColumn++){
            const vector = p5.Vector.mult(gBaseVectors[0], idRow * scalar)
            vector.add(p5.Vector.mult(gBaseVectors[1], idColumn * scalar))
            vectorArray.push(createVector(vector.x, vector.y % Math.floor(height + scalar)));
        }
        gLattecePoints.push(vectorArray)
    }
}

function drawHex(){
    v = random(100);
    rotate(PI/6)
    beginShape();
    for(let idx = 0; idx < 6; idx++){
        const vector = p5.Vector.fromAngle(TWO_PI * idx / 6);
        if (v < 20) {
            vector.mult(scalar / sqrt(3) * 0.8);
        }else{
            vector.mult(scalar / sqrt(3));
        }
        vertex(vector.x, vector.y);
    }
    endShape(CLOSE);
}

function makeHexVector(){
    gBaseVectors[0] = p5.Vector.fromAngle(PI/2)
    gBaseVectors[1] = p5.Vector.fromAngle(PI/6)
}

function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}
