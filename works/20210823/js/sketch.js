let cp1 = ['#e9d985aa','#749c75aa','#6a5d7baa'];
let cp2 = ['#3c6e71aa','#ffffffaa','#284b63aa'];
let cp3 = ['#335c67aa','#e09f3eaa','#9e2a2baa'];
let cp4 = ['#1c829caa','#02283caa','#e0a100aa'];
;

let colorPalettes = [cp1, cp2, cp3, cp4]

let BASE_S = 20;
let BASE_B = 70;

function setup(){
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 1.0);
    let BASE_H = random(0, 360);
    background(BASE_H, BASE_S, BASE_B);
    texturize(BASE_H, 30000);

    let circlesCp = random(colorPalettes);
    let lcells = int(random(12, 30)) * 2;
    let offset = width / 20;
    let lw = (width - offset * 2) / lcells;
    let lh = (height - offset * 2) / lcells;
    let ccells = width / (offset * 4);
    let cw = (width - offset * 2 - (ccells - 1)) / ccells;
    let ch = (height - offset * 2 - (ccells - 1)) / ccells;


    noStroke()
    for (let j = 0; j < ccells; j++){
        for (let i = 0; i < ccells; i++){
            let x = offset + i * cw;
            let y = offset + j * ch;

            let cx = x + cw / 2;
            let cy = y + ch / 2;

            let choice = random(5);
            if (choice < 1) {
                push();
                translate(cx, cy);
                fill(random(circlesCp))
                circle(random(-cw/2, cw/2), random(-ch/2, ch/2), random(20, offset*2));
                pop()
            }
        }
    }

    let baseColor = color(BASE_H+random([-20, 20]), 50, 50, 1.0)
    stroke(baseColor)
    translate(offset, offset);
    for (let i = 0; i <= lcells; i++) {
        line(0, i * lh, i * lw, lh * lcells);
        line(i * lw, 0, lw * lcells, lh * i);
        line(lw * lcells, i * lh, lw * (lcells - i), lh * lcells);
        line(0, lh * (lcells - i), lw * i, 0)
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