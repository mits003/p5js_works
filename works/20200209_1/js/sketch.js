/*
乱数

random() 0-1
random(n) 0-n
random(n, m) n-m

*/

let num_circles = 300;

function setup() {
    createCanvas(700, 700);
    noStroke();
    background("#204164");
    for (let i = 0; i < num_circles; i++) {
        x = random(width);
        y = random(height);
        if (random() > 0.9) {
            r = random(50, 80);
        } else {
            r = random(10, 30);
        }
        noStroke();
        fill(255, 255, 255, random(30, 250));
        ellipse(x, y, r, r);
        // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 5000);
    }
}
