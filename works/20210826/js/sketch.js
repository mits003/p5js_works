let cp1 = ['#486c99aa','#b0a0baaa','#c38391aa'];
let cp2 = ['#00838faa','#d1e8f0aa','#d86d4aa6'];
let cp3 = ['#5f0f40aa','#9a031eaa','#0f4c5caa'];
let cp4 = ['#023047aa','#ffb703aa','#fb8500aa'];

let colorPalettes = [cp1, cp2, cp3, cp4]

let BASE_S = 30;
let BASE_B = 40;

function setup(){
    createCanvas(600, 600);
    rectMode(CENTER);
    angleMode(DEGREES)
    colorMode(HSB, 360, 100, 100, 1.0);
    let BASE_H = random(0, 360);
    background(BASE_H, BASE_S, BASE_B);
    texturize(BASE_H, 30000);

    let cp = random(colorPalettes);
    let fcells = 12;
    let foffset = width / 15;
    let fmargin = 0;
    let fw = (width - foffset * 2 - fmargin * (fcells - 1)) / fcells;
    let fh = (height - foffset * 2 - fmargin * (fcells - 1)) / fcells;
    let bcells = floor(fcells * 0.65);
    let boffset = foffset;
    let bmargin = 0;
    let bw = (width - boffset * 2 - bmargin * (bcells - 1)) / bcells;
    let bh = (height - boffset * 2 - bmargin * (bcells - 1)) / bcells;

    noStroke()
    for (let j = 0; j < bcells; j++){
        for (let i = 0; i < bcells; i++){
            let x = boffset + (i * (bw + bmargin));
            let y = boffset + (j * (bh + bmargin));

            let cx = x + bw / 2;
            let cy = y + bh / 2;
            let d = random(bw * 0.2, fw * 1.2);
            let a = random(-5, 5)

            let choice = random(5);
            if (choice < 1) {
                push();
                translate(cx, cy);
                rotate(45 + a);
                fill(random(cp))
                rect(random(-bw/2, bw/2), random(-bh/2, bh/2), d);
                pop()
            }
        }
    }

    stroke(BASE_H + random([-20, 20]), 20, 50, 1.0);
    noFill();
    ellipseMode(RADIUS)
    for (let j = 0; j < fcells; j++){
        for (let i = 0; i < fcells; i++){
            let x = foffset + i * (fw + fmargin);
            let y = foffset + j * (fh + fmargin);

            let cx = x + fw / 2;
            let cy = y + fh / 2;
            let d = 20;
            let theta1 = map(noise(i * 0.05), 0, 1, 0, 360);
            let theta2 = map(noise(j * 0.05), 0, 1, 360 - theta1, 360);

            push();
            translate(cx, cy);
            line(0, 0, sin(theta1)*d, cos(theta1)*d);
            line(0, 0, sin(theta1 + theta2)*d, cos(theta1 + theta2)*d);
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