let cp1 = ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff']
let cp2 = ['#f72585', '#7209b7', '#3a0ca3', '#4361ee', '#4cc9f0'];
let cp3 = ['#8ecae6', '#219ebc', '#ffb703', '#fd9e02', '#fb8500'];
let cp4 = ['#ff6700', '#ebebeb', '#c0c0c0', '#3a6ea5', '#004e98'];
let cp5 = ['#ff8f1c', '#ffcc00', '#f5f000', '#aded0c', '#51d72f'];

let colorPalette = [cp1, cp2, cp3, cp4, cp5];
let colors;

function setup() {
    canvasSize = 600;
    angleMode(DEGREES);
    let canvas = createCanvas(canvasSize, canvasSize);

    background('#fcfcfc');
    colors = random(colorPalette);
    noStroke();

    let cells = canvasSize / 2;
    let w = canvasSize / cells;

    let minNum = floor(random(1, 3)) * 120;
    let maxNum = floor(random(1, 3)) * minNum;

    let right = random([minNum, maxNum]);
    let left = random([minNum, maxNum]);

    let angle = 0;
    let angleInc = random([-1, 1]);

    translate(canvasSize/2, canvasSize/3);
    rotate(90);

    let lineNum = floor(random(1, 4)) * 12;

    for (let k = 0; k < 2; k++){
        for (let i = lineNum; i < lineNum　+　36; i++){
            for  (let j = -120; j < 120; j++){
                fill(random(colors));
                ellipse(i*w*sin(angle), j*w, w);
                angle += angleInc;
            }
        }
        translate(canvasSize/3, 0);
    }
}


function mouseClicked(){
    window.location.reload();
}