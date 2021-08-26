let cp1 = ['#ce5a6abb','#e3abcabb','#B5E477bb'];
let cp2 = ['#dd97adbb','#ddb140bb','#659400bb'];
let cp3 = ['#2ec4b6bb','#cbf3f0bb','#FF9F1Cbb'];
let cp4 = ['#b4bd63bb','#c8c4ebbb','#B57DB4bb'];

let colorPalettes = [cp1, cp2, cp3, cp4]

let BASE_S = 25;
let BASE_B = 75;

function setup(){
    createCanvas(600, 600);
    rectMode(CENTER);
    angleMode(DEGREES)
    colorMode(HSB, 360, 100, 100, 1.0);
    let BASE_H = random(0, 360);
    background(BASE_H, BASE_S, BASE_B);
    texturize(BASE_H, 30000);
    
    let cp = random(colorPalettes);
    let fcells = 10;
    let foffset = width / 15;
    let fw = (width - foffset * 2) / fcells;
    let fh = (height - foffset * 2) / fcells;
    let bcells = floor(fcells * 0.65);
    let boffset = foffset;
    let bw = (width - boffset * 2) / bcells;
    let bh = (height - boffset * 2) / bcells;

    noStroke();
    let bc = 0;
    for (let j = 0; j < bcells; j++){
        for (let i = 0; i < bcells; i++){
            let x = boffset + (i * bw);
            let y = boffset + (j * bh);

            let cx = x + bw / 2;
            let cy = y + bh / 2;
            let d = random(bw * 0.2, fw * 1.2);
            let a = random(-2, 2)

            let p = random(100);
            if (p < 15 && bc < 7) {
                push();
                translate(cx, cy);
                rotate(a);
                fill(random(cp))
                rect(random(-bw/2, bw/2), random(-bh/2, bh/2), d);
                pop();
                bc++;
            }
        }
    }

    stroke(BASE_H + random([-20, 20]), 10, 90, 1.0);
    noFill()
    for (let j = 0; j < fcells; j++){
        for (let i = 0; i < fcells; i++){
            let x = foffset + i * fw;
            let y = foffset + j * fh;

            let cx = x + fw / 2;
            let cy = y + fh / 2;
            let d = random(fw * 0.4, fw * 1.2);

            push();
            translate(cx, cy);
            rect(0, 0, d);
            pop();
        }
    }
}


function texturize(base_h, density){
    for(let i = 0; i < density; i++) {
        stroke(base_h,
            BASE_S - random(-5, 8),
            BASE_B - random(8),
            random(75, 85));

        let x1 = random(width);
        let y1 = random(height);
        let theta = random(360);
        let segmentLength = random(2, 7);
        let x2 = cos(theta) * segmentLength + x1;
        let y2 = sin(theta) * segmentLength + y1;

        line(x1, y1, x2, y2);
    }
}

function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}