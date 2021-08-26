let cp1 = ['#486c99aa','#b0a0baaa','#c38391aa'];
let cp2 = ['#9FB8ADaa','#383E56aa','#C5D7BDaa'];
let cp3 = ['#EE99A0aa','#AD6C80aa','#94B5C0aa'];
let cp4 = ['#495464aa','#BBBFCAaa','#E8E8E8aa'];

let colorPalettes = [cp1, cp2, cp3, cp4];

let BASE_S = 15;
let BASE_B = 80;

function setup(){
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 1.0);
    let BASE_H = random(0, 360);
    background(BASE_H, BASE_S, BASE_B);
    texturize(BASE_H, 30000);

    let cp = random(colorPalettes);
    let cells = 12;
    let offset = width / 15;
    let w = (width - offset * 2) / cells;
    let h = (height - offset * 2) / cells;


    stroke(BASE_H + random([-20, 20]), 70, 40, 1.0);
    ellipseMode(RADIUS);
    let theta = random([0, HALF_PI])
    for (let j = 0; j < cells; j++){
        for (let i = 0; i < cells; i++){
            let x = offset + i * w;
            let y = offset + j * h;
            
            let cx = x + w / 2;
            let cy = y + h / 2;
            let d = w / 2;
            
            push();
            translate(cx, cy);
            rotate(theta);
            let p = random(100);
            if (p > 5){
                noFill();
                arc(0, 0, d, d, 0, HALF_PI);
                arc(0, 0, d, d, PI, -HALF_PI);
            } else {
                fill(random(cp));
                ellipse(0, 0, d / 2, d / 2);
            }
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