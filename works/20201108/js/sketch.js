'use strict'
let colors = ["#959aa9", "#3d566f", "#f1ac5f"]
let tileCountX;
let tileCountY;

let tileWidth;
let tileHeight;

let posX;
let posY;

function setup() {
    createCanvas(600, 600);
    background("#fff");
    stroke("#fff");
    fill(200,70,100);

    rectMode(CENTER);
    angleMode(DEGREES);

    tileCountX = 10;
    tileCountY = 10;

    let offset = width / 30;

    tileWidth = (width - offset * 2) / tileCountX;
    tileHeight = (height - offset * 2) / tileCountY;

    for (let gridY = 0; gridY <= tileCountY; gridY++){
        for (let gridX = 0; gridX <= tileCountX; gridX++){
            let posX = offset + gridX * tileWidth;
            let posY = offset + gridY * tileHeight;
            // translate(gridX + width / 2, gridY + height / 2)
            let a = random(-2, 2)
            let d = random(tileWidth * 0.2,tileWidth);
            let color = random(colors)
            push();
            noFill()
            rect(posX, posY, d, d);
            translate(posX + d, posY + d);
            rotate(a);
            fill(color)
            rect(posX, posY, d, d);
            pop();
        }
    }
}