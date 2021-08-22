let cp1 = ['#486c9966','#b0a0ba66','#c3839166'];
let cp2 = ['#00838f66','#d1e8f066','#d86d4666'];
let cp3 = ['#5f0f4066','#9a031e66','#0f4c5c66'];
let cp4 = ['#02304766','#ffb70366','#fb850066'];

let colorPalettes = [cp1, cp2, cp3, cp4]

let BASE_S = 20;
let BASE_B = 70;

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
    let fmargin = 0;
    let fw = (width - foffset * 2 - fmargin * (fcells - 1)) / fcells;
    let fh = (height - foffset * 2 - fmargin * (fcells - 1)) / fcells;
    let bcells = floor(fcells * 0.65);
    let eoffset = foffset;
    let bmargin = 0;
    let bw = (width - eoffset * 2 - bmargin * (bcells - 1)) / bcells;
    let bh = (height - eoffset * 2 - bmargin * (bcells - 1)) / bcells;

    noStroke()
    for (let j = 0; j < bcells; j++){
        for (let i = 0; i < bcells; i++){
            let x = eoffset + (i * (bw + bmargin));
            let y = eoffset + (j * (bh + bmargin));

            let cx = x + bw / 2;
            let cy = y + bh / 2;
            let d = random(bw * 0.2, fw * 1.2);
            let a = random(-2, 2)

            let choice = random(5);
            if (choice < 2) {
                push();
                translate(cx, cy);
                rotate(a);
                fill(random(cp))
                rect(random(-bw/2, bw/2), random(-bh/2, bh/2), d);
                pop()
            }
        }
    }

    stroke(80);
    noFill()
    for (let j = 0; j < fcells; j++){
        for (let i = 0; i < fcells; i++){
            let x = foffset + i * (fw + fmargin);
            let y = foffset + j * (fh + fmargin);

            let cx = x + fw / 2;
            let cy = y + fh / 2;
            let d = random(fw * 0.4, fw * 1.2);

            push();
            translate(cx, cy);
            rect(0, 0, d);
            pop()
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