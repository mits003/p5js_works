let buffer = 30;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 1.0);

    baseHue1 = floor(random(60, 300));
    console.log(baseHue1)
    baseHue2 = floor(random(60, 300));
    console.log(baseHue2)



    noStroke();
    for (let i = -buffer; i < width + buffer ; i = i+12){
        for (let j = 0; j < 100; j++){
            // red to yellow
            let hue1 = map(random(i, i+50), 0, width, baseHue1, baseHue1 + random([-60, 60]));
            fill(hue1, 90, 60, 0.5);
            circle(random(0, width), i, random(30,50))
            // light blue to blue
            let hue2 = map(random(i, i+50), 0, width, baseHue2, baseHue2 + random([-60, 60]));
            fill(hue2, 90, 90, 0.5);
            circle(random(0, width), i, random(30,50))
        }
    }
}

function mouseClicked(){
    window.location.reload();
}