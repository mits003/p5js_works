var angle = 0;
var l = 20;

function setup() {
    createCanvas(600, 600);
    background(255);
}

function draw() {
    push();
    translate(width / 2, height / 2);
    rotate(radians(angle));
    vX = sin(radians(angle)) * l;
    vY = cos(radians(angle)) * l;
    hX = sin(radians(angle + 90)) * l;
    hY = cos(radians(angle + 90)) * l;

    noFill();
    strokeWeight(1);
    rectMode(CENTER);

    stroke("skyblue");
    rect(-vX, -vY, l, l);

    stroke("pink");
    rect(vX, vY, l, l);

    stroke("orange")
    rect(-hX, -hY, l, l);

    stroke("greenyellow")
    rect(hX, hY, l, l);

    pop();
    angle += 30;
    l += 1;
}