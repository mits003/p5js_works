"use strict"

let palette = ["#eb6da5", "#b6cec5", "#c49ac5", "#ee847d", "#dbc779"]

let c;
let lineLength;
let angle = 0;
let angleSpeed = 1;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    cursor(CROSS);
    strokeWeight(1);

    c = "#eb6da5";

}

function draw() {
    if ( mousePressed && mouseButton == LEFT) {
        lineLength = 100;
        push();
        translate(mouseX, mouseY);
        rotate(radians(angle));
        stroke(c);
        line(100-lineLength, 50-lineLength, 100+lineLength, 50-lineLength);
        pop();

        angle += angleSpeed;
    }
}

function stop() { if (mouseButton == RIGHT) line.stop()}


function mousePressed() {
    lineLength = 100;
}

function keyPressed() {
    if (keyCode == UP_ARROW) lineLength += 5;
    if (keyCode == DOWN_ARROW) lineLength -= 5;
    if (keyCode == LEFT_ARROW) angleSpeed += 0.5;
    if (keyCode == RIGHT_ARROW) angleSpeed += 0.5;
}

function keyReleased() {
    if (key == "s" || key =="S") saveCanvas(gd.timestamp(), "png");
    if (keyCode == DELETE || keyCode == BACKSPACE) background(255);

    if (key == "d" || key == "D") {
        angle += 180;
        angleSpeed *= -1;
    };
    if (key == "c") {
        c = random(palette);
        console.log(c);
    }
}
