function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 1.0);
    // 背景色を指定
    background('#fff');
    noStroke()

    for (i = 0; i < width; i = i+10){
        for (j = 0; j < 100; j++){
            // yellow to green, blue
            let hue = map(random(i, i+50), 0, width, 210, 60);
            fill(hue, random(80, 100), random(90, 100), 0.5);
            circle(random(0, width), i, random(30,50))
        }
    }
}


function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png')
}