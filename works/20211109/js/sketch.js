let theta1 = 0;
let theta2 = 0;
let theta3 = 0;
let theta4 = 0;
let theta5 = 0;

let rad1;
let rad2;
let rad3;
let rad4;
let rad5;

let x, y;

function setup() {
    frameRate(30)
    createCanvas(windowHeight - 10, windowHeight - 10);
    colorMode(HSB, 360, 100, 100);
    let bgBaseH = floor(random(0, 360));
    bg1Cl = color(bgBaseH, 80, 25);
    bg2Cl = color(bgBaseH, 10, 90);
    background(bg1Cl);

    noStroke();
    fill(bg2Cl);
    rect(20, 20, width/2, height - 40);
    angleMode(DEGREES);

    theta1Inc = floor(random(1,6));
    theta2Inc = floor(random(1,6));
    theta3Inc = floor(random(-6,-1));
    theta4Inc = floor(random(1,6));
    theta5Inc = floor(random(-6,6));

    rad1 = random([30, 60, 120]);
    rad2 = random([30, 60, 120]);
    rad3 = 40;
    rad4 = 20;
    rad5 = 40;
    dot1Cl = color(bgBaseH, 80, 25);
    dot2Cl = color(bg2Cl);
}

function draw() {
    push();
    translate(width/2 + 20, height/2 + 40);
    rotate(-90);
    let cx = rad1 * cos(theta1);
    let cy = rad1 * sin(theta1);
    
    let cx2 = cx + rad2 * cos(theta2);
    let cy2 = cy + rad2 * sin(theta2);
    
    let cx3 = cx2 + rad3 * cos(theta3);
    let cy3 = cy2 + rad3 * sin(theta3);
    
    let cx4 = cx3 + rad4 * cos(theta4);
    let cy4 = cy3 + rad4 * sin(theta4);

    let cx5 = cx4 + rad5 * cos(theta5);
    let cy5 = cy4 + rad5 * sin(theta5);

    strokeWeight(6);
    if (y > 0) {
        stroke(dot2Cl);
    } else {
        stroke(bg1Cl)
    }
    line(x, y, cx5, cy5);

    x = cx5;
    y = cy5;
    pop();

    theta1 += theta1Inc;
    theta2 += theta2Inc;
    theta3 += theta3Inc;
    theta4 += theta4Inc;
    theta5 += theta5Inc;
}
function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}

