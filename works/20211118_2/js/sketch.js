let buffer = 30;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    background('#fff');
    colorMode(HSB, 360, 100, 100, 1.0);
    // angleMode(DEGREES);
    frameRate(50);
    baseHue1 = floor(random(60, 300));
    baseHue2 = floor(random(60, 300));
}

function draw(){
    // background('#ffffff01');
    noStroke();
    translate(width/2, height/2);
        for (let j = 0; j < width * sin(90); j +=10){
            rad = random(30,50)
            let hue1 = map(random(30), 0, j/2, baseHue1, baseHue1 + 50);
            fill(hue1, 90, 90, 0.3);
            arc(j * cos(frameCount), j * sin(frameCount), j, j/2, 50, 180, OPEN);
    }
}

function mouseClicked(){
    window.location.reload();
}