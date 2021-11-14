let theta1 = 0;
let theta2 = 0;
let theta3 = 0;

let rad1;
let rad2;
let rad3;

let x, y;

function setup() {
    frameRate(20)
    createCanvas(windowHeight - 10, windowHeight - 10);
    colorMode(HSB, 360, 100, 100);
    let bgBaseH = floor(random(0, 360));
    bg1Cl = color(bgBaseH, 80, 25);
    bg2Cl = color(bgBaseH, 10, 90);
    background(bg1Cl);
    
    noStroke();
    fill(bg2Cl)
    rect(20, 20, width/2, height - 40);
    angleMode(DEGREES);
    
    theta1Inc = floor(random(1,6));
    theta2Inc = floor(random(1,6));
    rad1 = random(60, 120);
    rad2 = random([60, 120, 150, 180]);
    rad3 = 30;
    dot1Cl = color(bgBaseH, 80, 25);
    dot2Cl = color('#f2f2f2');

}

function draw() {
    push();
    translate(width/2 + 10, height/2);
    let cx = rad1 * cos(theta1);
    let cy = rad1 * sin(theta1);
    
    let cx2 = cx + rad2 * cos(theta2);
    let cy2 = cy + rad2 * sin(theta2);
    
    let cx3 = cx2 + rad3 * cos(theta3);
    let cy3 = cy2 + rad3 * sin(theta3);
    
    translate(-20, 0);

    strokeWeight(2);
    stroke(dot1Cl);
    if (cx2 < 20){
        ellipse(cx2, cy2, 2);
    }

    strokeWeight(6);
    stroke(dot2Cl);
    line(x, y, cx3, cy3);

    x = cx3;
    y = cy3;
    pop();

    theta1 += theta1Inc;
    theta2 -= theta2Inc;
}
function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}

