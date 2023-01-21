function setup() {
    // output gif
    // createLoop({duration:6, gif:true});
    // frameRate(60);

    createCanvas(600, 600);
    angleMode(DEGREES);

    background('#000');
    fill('#fff');
}

function draw(){
    // 背景を毎フレーム塗りつぶす
    background('#000');
    // 座標系をキャンバスの中心に移動する
    translate(width/2, height/2);

    // let x = 0;
    // let y = 0;

    // 三角関数を使って周期的な動きを作る    
    // 横方向の動き
    // let x = width/3 * cos(frameCount%360); // width/3*(0 ~ 360)の繰り返し
    // let y = 0

    // 縦方向の動き
    // let x = 0
    // let y = height/3 * sin(2*frameCount%360);

    // 横方向、縦方向を組み合わせる
    let x = width/3 * cos(frameCount%360); // width/3*(0 ~ 360)の繰り返し
    let y = height/3 * sin(2*frameCount%360); // height/3*(0 ~ 360)の繰り返し

    // 円を描画する
    // ellipse(x, y, height/4);

    // 周期的に大きさの変化する円を描画する
    ellipse(x, y, height/4 * sin(frameCount));
}

function mouseClicked(){
    window.location.reload();
}

function keyPressed(){
    if (key == 's') {
        saveCanvas(canvas, 'image0', 'png')
    }
}
