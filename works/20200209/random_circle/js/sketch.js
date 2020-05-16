/*
乱数

random() 0-1
random(n) 0-n
random(n, m) n-m

*/

function setup() {
    createCanvas(480, 480);
    noStroke();
    background(10, 100, 200, 100)
}

function draw() {
    x = random(width);
    y = random(height);
    if (random() > 0.9){
        r = random(50, 80);
    } else {
        r = random(10, 30);
    }
    stroke("gray")
    fill(255, 255, 255, random(30, 250));
    ellipse(x, y, r, r)
}