"use strict"
// アラビアンナイトカラー
let palette = ["#734876", "#7187b0", "#3a555f", "#cfb06a", "#68abc4"]

let c;
let lineLength;
let angle = 0;
let angleSpeed = 1;

// 開始時刻
let startTime;
// 1秒
const oneSec = 1000;
// 経過時間
let elaspedTime = 0;
// 秒数をカウント
let count = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    // カーソルを表示する
    cursor(CROSS);
    strokeWeight(1);

    startTime = millis();

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
    };

    // 現在時間値
    const now = millis();
    // 経過時間値
    elaspedTime = now - startTime;
    // 1秒たったら色変
    if (elaspedTime >= oneSec) {
        // 秒数を１つ大きくする
        count++;
        // 色変
        c = random(palette);
        // 再スタート
        startTime = millis();
    }
}

function stop() { if (mouseButton == RIGHT) line.stop()}

function mousePressed() {
    lineLength = 100;
}

// 上下左右の矢印キーでラインの長さ角度を調整
function keyPressed() {
    if (keyCode == UP_ARROW) lineLength += 5;
    if (keyCode == DOWN_ARROW) lineLength -= 5;
    if (keyCode == LEFT_ARROW) angleSpeed += 0.5;
    if (keyCode == RIGHT_ARROW) angleSpeed += 0.5;
}

// 画像の保存
function keyReleased() {
    if (key == "s" || key =="S") saveCanvas(gd.timestamp(), "png");
    if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}
