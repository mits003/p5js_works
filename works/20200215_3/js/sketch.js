let palette = ["#aeafaf", "#e3e6e1", "#b7c6c7", "#4b5665", "#bbbcea", "#ceccb8"]

let count = 0;
let tileCountX = 10;
let tileCountY = 10;
let tileWidth = 0;
let tileHeight = 0;

let colorStep = 15;

let circleCount = 0;
let endSize = 0;
let endOffset = 0;

let actRandomSeed = 0;

function setup() {
    createCanvas(600, 600);
    tileWidth = width / tileCountX;
    tileHeight = height / tileCountY;
    noFill();
    stroke(255);
    background(255);
    const fr = 1; // 毎秒2フレームを描画
    frameRate(fr);
}

function draw() {
    background(250);
    //randomSeed(actRandomSeed);

    translate(tileWidth / 2, tileHeight / 2);

    circleCount = int(random(3,5));
    // map(入力値, 現在の最小値, 現在の最大値, 変更後の最小値, 変更後の最大値) 現在の数直線から変更後の数直線に伸び縮みさせる
    // max(比較する値1, 比較する値2) より大きい値が返される
    endSize = map(mouseX, 0, max(width, mouseX), tileWidth / 2, 0);
    endOffset = map(mouseY, 0, max(height, mouseY), 0, (tileWidth - endSize) / 2);

    for (let gridY = 0; gridY <= tileCountY; gridY ++) {
        for (let gridX = 0; gridX <= tileCountX; gridX ++) {
            push();
            //各グリッドの中心に原点を移動
            translate(tileWidth * gridX, tileHeight * gridY);
            // scale(x_axis, y_axis) それぞれの軸方向に図形を伸縮させる
            //scale(1, tileHeight / tileWidth);

            //let toggle = int(random(0, 4));
            //if (toggle == 0) rotate(-HALF_PI);
            //if (toggle == 1) rotate(0);
            //if (toggle == 2) rotate(HALF_PI);
            //if (toggle == 3) rotate(PI);

            let toggle = int(random(0, 360));
            rotate(toggle);

            // draw module
            for (let i = 0; i < circleCount; i ++) {
                let diameter = map(i, 0, circleCount, tileWidth, endSize);
                let offset = map(i, 0, circleCount, 0, endOffset);
                fill(random(palette))
                ellipse(offset, offset, diameter);
            }
            pop()
        }
    }

}