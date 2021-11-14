// カラーパレット
let bcpalette = ['#261E47'];
// let stpalette = ['#FBE251', '#2EA9DF', '#D0104C'];
// let stpalette = ['#3a555f', '#cfb06a', '#68abc4'];
let stpalette = ['#ee59ae', '#008cdc', '#22aca3'];

let theta1 = 0;
let theta2 = 0;
let rad1;
let rad2;
let rad3;

let x, y;

let red = 120;
let green = 30;
let blue = 100;

function setup() {
    frameRate(20)
    createCanvas(windowHeight - 10, windowHeight - 10);
    background('#fff');
    strokeWeight(4);
    stroke(200);
    rect(20, 20, width-20*2, height-20*2)
    angleMode(DEGREES);
    
    rad1 = random(40, 60);
    rad2 = 120;
    rad3 = 30;
    strokeWeight(1)
    noFill()

}

function draw() {
    // // 左側
    // if (theta < 180) {
    //     stroke(red, map(theta, 0, 180, 0, 255), blue);

    //     push();
    //     translate(width/4, height/2);
    //     // 最初のサークル
    //     rotate(theta);
    //     point(rad1 * cos(theta), rad1 * sin(theta));

    //     pop();

    // }

    // 右側
    if (theta1 < 360) {
        // stroke(red, map(theta, 0, 720, 0, 255), blue);
        
        push();
        translate(width/2, height/2);
        // 最初のサークル
        // point(0,0);
        // rotate(theta);
        let cx = rad1 * cos(theta1);
        let cy = rad1 * sin(theta1);
        
        // translate(cx, cy)
        // point(0,0);
        
        let cx2 = rad1 + rad2 * cos(theta2);
        let cy2 = rad1 + rad2 * sin(theta2);
        
        translate(cx2, cy2);
        stroke(stpalette[0]);
        line(cx, cy, cx2 + rad2 * cos(theta2), cy2 + rad2 * sin(theta2))
        stroke(stpalette[1]);
        line(cx, cy, cx2 + rad2 * cos(theta2 + 8), cy2 + rad2 * sin(theta2 + 8));
        stroke(stpalette[2]);
        line(cx, cy, cx2 + rad2 * cos(theta2 + 16), cy2 + rad2 * sin(theta2 + 16));

        pop();
    }
    theta1 += 1;
    theta2 += 50;

}
function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png');
    // window.location.reload();
}