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

    // let n = random()
    // let n = 8;
    // let a = n / (n - 1);

    for (let n = 1; n <= 2; n ++){

        let a = random(1.5, 5.0).toFixed(1);
        let b = random(2.0, 5.0).toFixed(1);
        // text("a: " + a, 10, 20);
        // text("b: " + b, 10, 40);
        
        let tS = random(1, 5).toFixed(0);
        let tE = random(1, 5).toFixed(0);
        
        // text("tS: " + tS, 10, 80);
        // text("tE: " + tE, 10, 100);

        push()
        translate(width/2, height/2);
        scale(1/n);
        beginShape();
        for (let t = -360*tS ; t < 360*tE; t++){
            let x = sin(a*t)*cos(t**1.5) * 180;
            let y = sin(b*t)*sin(t**1.5) * 180;
            curveVertex(x, y);
        }
        endShape()
        pop();
    }
    
    // let coord = new Array;
    // let t = 360;
    // let x, y;
    // beginShape();
    // // while (t < 10 && coord[0] != coord[t-1] && cood[1] != coord[t]){
    // while (x != 0 && y != 0 ){
    //     x = sin(a*t)*cos(t) * 100;
    //     y = sin(a*t)*sin(t) * 100;
    //     curveVertex(x, y);
    //     console.log("y" + y)
    //     console.log("x "+ x)
    //     coord.push([x, y]);
    //     t += 1;
    // }
    // endShape()
}


function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}