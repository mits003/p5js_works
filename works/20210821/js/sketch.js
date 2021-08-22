let cp1 = ['#003049aa','#d62828aa','#f77f00aa','#fcbf49aa','#eae2b7aa']
let cp2 = ['#d6d6d6aa','#ffee32aa','#ffd100aa','#5f2f2faa','#232323aa']
let cp3 = ['#5f0f40aa','#9a031eaa','#fb8b24aa','#e36414aa','#0f4c5caa']
let cp4 = ['#0d3b66aa','#faf0caaa','#f4d35eaa','#ee964baa','#f95738aa']
let colorPalettes = [cp1, cp2, cp3, cp4]

let BASE_S = 20;
let BASE_B = 70;

function setup(){
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 1.0);
    let BASE_H = random(0, 360);
    background(BASE_H, BASE_S, BASE_B);
    texturize(BASE_H, 30000);

    let circlesCp = random(colorPalettes)
    let fcells = 20;
    let foffset = width / 15;
    let fmargin = 0;
    let fw = (width - foffset * 2 - fmargin * (fcells - 1)) / fcells;
    let fh = (height - foffset * 2 - fmargin * (fcells - 1)) / fcells;
    let bcells = floor(fcells * 0.25);
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

            let choice = random(5);
            if (choice < 1) {
                push();
                translate(cx, cy);
                fill(random(circlesCp))
                circle(random(-bw/2, bw/2), random(-bh/2, bh/2), random(40, foffset*2));
                pop()
            }
        }
    }

    stroke(BASE_H + random([-20, 20]), 50, 50, 1.0)
    for (let j = 0; j < fcells; j++){
        for (let i = 0; i < fcells; i++){
                let x = foffset + i * (fw + fmargin);
                let y = foffset + j * (fh + fmargin);

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
    // saveCanvas(canvas, 'myCanvasaa', 'png');
   window.location.reload();
}