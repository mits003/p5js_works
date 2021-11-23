let drop_num = 12;

let x, y;

let base_h, h;
let base_r;

let BASE_S = 20;
let BASE_B = 50;

function setup() {
    let canvas = createCanvas(windowHeight, windowHeight);
    background('#f0f0f0');
    angleMode(DEGREES)
    colorMode(HSB, 360, 100, 100, 100);

    noStroke();
    base_h = floor(random(90));
    for (let k = 1; k < drop_num; k++){
        x = random(width);
        y = random(height);
        h = base_h + k % 4 * 90 ;
        console.log(h)
        base_r = random(50, 150)
        for (let i = 0; i < 12; i ++){
            for (let j = 0; j < 10; j ++){
                fill(h + j * 10, 80, 80, 3);
                ellipse(x, y, j * 2 + base_r);
            }
        }
    }
    texturize(0, 1000);
}

function texturize(base_h, density){
    for(let i = 0; i < density; i++) {
        stroke(base_h,
            BASE_S - random(-5, 8),
            BASE_B - random(8),
            2);

        let x1 = random(width);
        let y1 = random(height);
        let theta = random([0, 90]);
        let segmentLength = random(50, 80);
        let x2 = cos(theta) * segmentLength + x1;
        let y2 = sin(theta) * segmentLength + y1;

        drawingContext.shadowOffsetX = 1;
        drawingContext.shadowOffsetY = -3;
        drawingContext.shadowBlur = 1;
        drawingContext.shadowColor = 'black';
        line(x1, y1, x2, y2);
    }
}

function mouseClicked(){
    window.location.reload();
}