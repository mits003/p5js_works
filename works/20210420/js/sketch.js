function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360.0, 100.0, 100.0, 100.0);
    noLoop();
    background('#ffffff');
    stroke('#b1c3cb');
    strokeWeight(2.0);
    let div = 20;
    let w = (width - div) / (div + 1);
    let h = (height - div) / (div + 1);

    for (let i = 1; i < div; i++) {
        for (let j = 1; j < div; j++) {
            let x = i * w;
            let y = j * h;
            rectMode(CENTER);

            let cx = x + w / 2;
            let cy = y + h / 2;

            push();
            translate(cx, cy);
            let s = noise(x * 0.008 + y * 0.008);
            fill('#417aeb');
            rect(0, 0, w * s, h * s);
            pop();
        }
    }
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
}
