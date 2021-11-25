// カラーパレット
let bcpalette = ['#261E47'];
let stpalette = ['#DDD23B', '#A8D8B9', '#D0104C'];


let x, y;

let x1, y1;
let x2, y2;

let a1;
let a2;

let a1Inc;
let a2Inc;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(400, 400);
    angleMode(DEGREES);
    background(random(bcpalette));
    // background(250);
    // background(60);
    
    r1 = random(50, 100);
    r2 = random(50, 100);
    a1 = 0;
    a2 = 0;

    a1Inc = floor(random(4, 12));
    a2Inc = floor(random(4, 12));
    stroke(random(stpalette));
}

function draw() {
    translate(width/2, height/2);
    for (let i = 0; i < 360; i ++){
    
        let x1 = r1 * cos(a1);
        let y1 = r1 * sin(a1);
    
        let x2 = x1 + r2 * cos(a2);
        let y2 = y1 + r2 * sin(a2);
    
        line(x, y, x2, y2);
    
        x = x2;
        y = y2;
    
        a1 += a1Inc;
        a2 += a2Inc;
    }
}

function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png');
    // window.location.reload();
}