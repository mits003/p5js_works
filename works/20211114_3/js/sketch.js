// "Ch10_HexTiling" by tetunori http://openprocessing.org/sketch/864196
// License CreativeCommons Attribution ShareAlike https://creativecommons.org/licenses/by-sa/3.0

let cp1 = ['#005eac', '#6f8aa9', '#003682', '#84c0da', '#d0deea', '#96b4ce', '#ffffff'];
let cp2 = ['#dfcb8c', '#b4bb8c', '#d3c1af', '#ebebc1', '#b2cdba', '#e1c0b6', '#e5e2da'];
let cp3 = ['#bf0d52', '#ed8c1f', '#50abd3', '#edda15', '#6ab592', '#931e56', '#f7f2e4'];
let colorPalette = [cp1, cp2, cp3]
let colors;

let gNum = 10;
let gLattecePoints = [];
let gBaseVectors = [];

let scalar;

function setup() {
    let canvas = createCanvas(windowHeight, windowHeight);
    colors = random(colorPalette);
    // colors = colorPalette[1];
    background(random(colors));
    // stroke('#c1b389');
    stroke(colors[6]);
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
            fill(random(colors));
            drawHexTriangle();
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

function drawHexTriangle(){
    for( let index = 0; index < 6; index++ ){
        push();
        const vector = p5.Vector.fromAngle( Math.PI * index / 3 + Math.PI / 6 );
        vector.mult( scalar / Math.pow( Math.sqrt( 3 ), 2 ) );
        translate( vector.x, vector.y ) ;
        rotate( Math.PI * index );

        fill(colors[index])
        drawTriangle();

        pop();
    }
}

function drawTriangle() {
    beginShape();
    for( let index = 0; index < 3; index++ ){
        const vector = p5.Vector.fromAngle( 2 * Math.PI * index / 3 + Math.PI / 2 );
        vector.mult( scalar / Math.pow( Math.sqrt( 3 ), 2 ) );
        vertex( vector.x, vector.y );
    }
    endShape( CLOSE );
}

function makeHexVector(){
    gBaseVectors[0] = p5.Vector.fromAngle(PI/2)
    gBaseVectors[1] = p5.Vector.fromAngle(PI/6)
}

function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}
