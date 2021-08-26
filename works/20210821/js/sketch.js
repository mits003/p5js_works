let cp1 = ['#F05945bb','#5EAAA8bb','#A3D2CAbb']
let cp2 = ['#ffee32bb','#007580bb','#434343bb']
let cp3 = ['#EC5858bb', '#FD8C04bb', '#EDF285bb']
let cp4 = ['#0d3b66bb','#ffee32bb','#f95738bb'];
let colorPalettes = [cp1, cp2, cp3, cp4]

let BASE_S = 35;
let BASE_B = 75;

function setup(){
    createCanvas(windowWidth, windowWidth);
    colorMode(HSB, 360, 100, 100, 1.0);
    let BASE_H = random(0, 360);
    background(BASE_H, BASE_S, BASE_B);
    texturize(BASE_H, 30000);

    let circlesCp = random(colorPalettes);
    let fcells = 20;
    let foffset = width / 15;
    let fw = (width - foffset * 2) / fcells;
    let fh = (height - foffset * 2) / fcells;
    let bcells = floor(fcells * 0.25);
    let boffset = foffset;
    let bw = (width - boffset * 2 - (bcells - 1)) / bcells;
    let bh = (height - boffset * 2 - (bcells - 1)) / bcells;

    let c = 0;
    noStroke();
    for (let j = 0; j < bcells; j++){
        for (let i = 0; i < bcells; i++){
            let x = boffset + i * bw;
            let y = boffset + j * bh;

            let cx = x + bw / 2;
            let cy = y + bh / 2;

            let choice = random(100);
            if (choice < 20 && c < 6) {
                push();
                translate(cx, cy);
                fill(random(circlesCp))
                circle(random(-bw/2, bw/2), random(-bh/2, bh/2), random(foffset/3, foffset*2));
                pop();
                c++;
            }
        }
    }

    stroke(BASE_H + random([-20, 20]), 55, 45, 1.0)
    for (let j = 0; j < fcells; j++){
        for (let i = 0; i < fcells; i++){
                let x = foffset + (i * fw);
                let y = foffset + (j * fh);

                let cx = x + fw / 2;
                let cy = y + fh / 2;

                push();
                translate(cx, cy);
                let theta = 90 * random([0, 1]);
                if (theta === 0) {
                    line(0, -fh/2, fw/2, 0);
                    line(-fw/2, 0, 0, fh/2);
                } else if (theta === 90) {
                    line(-fw/2, 0, 0, -fh/2);
                    line(0, fh/2, fh/2, 0);
                }
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
    // saveCanvas(canvas, 'myCanvasbb', 'png');
    window.location.reload();
}