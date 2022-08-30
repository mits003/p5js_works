// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    background('#000');

    angleMode(DEGREES);

    stroke(255);
    noFill();

    let a = random(1.5, 3.0).toFixed(1);
    let b = random(2.0, 3.0).toFixed(1);
    // text("a: " + a, 10, 20);
    // text("b: " + b, 10, 40);
    
    let tS = random(1, 2).toFixed(0);
    let tE = random(1, 2).toFixed(0);        
    // text("tS: " + tS, 10, 80);
    // text("tE: " + tE, 10, 100);

    push()
    translate(width/2, height/2);

    for (let t = -360*tS ; t < 360*tE; t+=0.1){
        let noiseV = noise(t * 0.15);
        let x = sin(a*t)*cos(t**1.1) * 180;
        let y = sin(b*t)*sin(t**1.1) * 180;
        strokeWeight(noiseV*12)
        point(x, y);
    }
    pop();
}


function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}