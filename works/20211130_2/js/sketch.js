let cp1 = ['#F05945','#51b0bb','#faca66', '#fff']
let cp2 = ['#dbbd36','#249078','#de0053', '#000']
let cp3 = ['#EC5858', '#FD8C04', '#EDF285', '#000']
let cp4 = ['#749b5f','#cccb75','#5f7c9e', '#fff'];
let colorPalettes = [cp1, cp2, cp3, cp4]

let BASE_S = 15;
let BASE_B = 95;

function setup(){
    createCanvas(windowHeight, windowHeight);
    let colors = random(colorPalettes);
    background(colors[3])
    rectMode(CENTER);
    angleMode(DEGREES)

    let fcells = 18;
    let foffset = width / 15;
    let fw = (width - foffset * 2) / fcells;
    let fh = (height - foffset * 2) / fcells;

    noFill();
    for (let j = 0; j < fcells; j++){
        for (let i = 0; i < fcells; i++){
            stroke(random(colors.slice(0, 3)));
            let x = foffset + (i * fw);
            let y = foffset + (j * fh);

            let cx = x + fw / 2;
            let cy = y + fh / 2;

            let theta = 90 * random([0, 1]);
            push();
            translate(cx, cy);
            rotate(theta);
            line(0, -fh/2, fw/2, 0);
            line(-fw/2, 0, 0, fh/2);
            square(-fw/4, -fh/4, fw/2);
            square(fw/4, fh/4, fw/2);
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
        let theta = random(TWO_PI);
        let segmentLength = random(2, 7);
        let x2 = cos(theta) * segmentLength + x1;
        let y2 = sin(theta) * segmentLength + y1;

        line(x1, y1, x2, y2);
    }
}

function mouseClicked(){
    window.location.reload();
}