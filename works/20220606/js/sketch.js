let cp1 = ['#03071e','#370617','#6a040f','#9d0208','#d00000','#dc2f02','#e85d04','#f48c06','#faa307','#ffba08'];
let cp2 = ['#006466', '#065a60', '#0b525b', '#144552', '#1b3a4b', '#212f45', '#272640', '#312244', '#3e1f47', '#4d194d'];
let cp3 = ['#f72585','#b5179e','#7209b7','#560bad','#480ca8','#3a0ca3','#3f37c9','#4361ee','#4895ef','#4cc9f0'];
let cp4 = ['#780000', '#9d0910', '#c1121f', '#df817a',  '#7f908f', '#003049', '#336683', '#669bbc'];
let cp5 = ['#ff7b00', '#ff8800', '#ff9500', '#ffa200', '#ffaa00', '#ffb700', '#ffc300', '#ffd000', '#ffdd00', '#ffea00']
let cp6 = ['#007f5f', '#2b9348', '#55a630', '#80b918', '#aacc00', '#bfd200', '#d4d700', '#dddf00', '#eeef20', '#ffff3f']


let colorPalette = [cp1, cp2, cp3, cp4, cp5, cp6];
let colors;

function setup() {
    canvasSize = 600;
    angleMode(DEGREES);
    let canvas = createCanvas(canvasSize, canvasSize);

    background('#f0f0f0');
    colors = random(colorPalette);
    noStroke();

    let cells = canvasSize / floor(random(2, 4));
    let w = canvasSize / cells;
    let wInc = random(w, w*2);
    let hInc = random(1.5, 2);

    let right = floor(random(12, 24));
    let left = floor(random(1, 3)) * right;

    let angle = 0;
    let angleInc = random([-1, 1]) * floor(random(3, 6));

    rotation = random([3, 5]);

    translate(canvasSize/2, canvasSize/2);
    rotate(random(0, 360));

    for (let k = 0; k < rotation+1; k++){
        for (let i = -right; i < left; i++){
            for  (let j = -360; j < 360; j++){
                fill(random(colors));
                ellipse(i*wInc*sin(angle), j*w*hInc, w);
                angle += angleInc;
            }
        }
        rotate(360/rotation)
    }
}


function mouseClicked(){
    window.location.reload();
}