'use strict'
let colors = ["#fff471", "#dff1f4", "#8cb6c8"]
let tileCountX;
let tileCountY;

let tileWidth;
let tileHeight;

let posX;
let posY;

function setup() {
    createCanvas(600, 600);
    background("#fff");

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
            let a = random(-2, 2)
            let d = random(tileWidth * 0.2, tileWidth * 1.2);
            push();
            // 色なし正方形
            noFill()
            strokeWeight(1)
            stroke("#000")
            rect(posX, posY, d);
            // 色付き正方形
            let color = random(colors)
            noStroke()
            rotate(a);
            fill(color)
            translate(posX + d, posY + d);
            rect(posX, posY, d);
            pop();
        }
    }

    for (let i = 0; i < width * height * 5 / 100; i++) {
        //半透明の点，白でも黒でもOK．透明度は適宜調整する
        stroke(0, 0, 0, 10);
        let px = random(width);
        let py = random(height);
        point(px, py);
    }
}