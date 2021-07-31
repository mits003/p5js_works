//let palette = ["#c13a1e", "#6e7e31", "#867039", "#d27202", "#aab050", "#ffffff"];
let palette = ["#ee7b00", "#1f3d89", "#C14f7e", "#a7a9ab", "#69c4d0", "#ffffff"];
let angle1 = 0;
let angle2 = 90;
let angle3 = 180;

function setup() {
    createCanvas(600, 600);
    const fr = 2; // 毎秒2フレームを描画
    frameRate(fr);
}

function draw() {
    let l1 = width / 2;
    let l2 = width / 3;
    let l3 = width / 4;
    background("#f5f4e8");
    noStroke();
    translate(width / 2, height / 2);

    fill("#c50d66");
    rotate(radians(angle1));
    rect(0, 0, l1, l1);

    fill("#f07810")
    rotate(radians(angle2));
    rect(0, 0, l2, l2);

    fill("#eec60a")
    rotate(radians(angle3));
    rect(0, 0, l3, l3);

    angle1 += 30;
    angle2 += 15;
    angle3 += 3;
}