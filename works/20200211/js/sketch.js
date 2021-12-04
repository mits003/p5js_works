var tileCount = 20;

var moduleColor;
var moduleAlpha = 180;
var maxDistance = 500;

function setup() {
    createCanvas(600, 600);
    background("white");
    strokeWeight(3);
    moduleColor = color(0, 0, 0, moduleAlpha);
}

function draw() {
    clear();
    stroke("blue");

    for (var gridY = 0; gridY < width; gridY +=25) {
        for (var gridX = 0; gridX < height; gridX += 25) {
            var diameter = dist(mouseX, mouseY, gridX, gridY);
            diameter = diameter / maxDistance * 40;
            push();
            translate(gridX, gridY, diameter * 5);
            //rect(0, 0, diameter, diameter);
            ellipse(0, 0, diameter)
            pop()
        }
    }
}