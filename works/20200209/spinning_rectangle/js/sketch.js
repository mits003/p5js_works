/*

*/

var angle = 0;
var r = 30; //半径

function setup() {
    createCanvas(480, 480);
    background("skyblue");
    noStroke();
    const fr = 6; // 毎秒6フレームを描画
    frameRate(fr);
}

function draw() {
    const fr = frameRate();
    push();
    noStroke()
    fill(10, 20, 120, 30)
    //原点を描画領域の中心に移動
    translate(width/2, height/2);
    rotate(angle)
    rect(0, 0, 100, 100)
    pop();
    //円の中心を原点に対し回転
    angle -= 30;
}
