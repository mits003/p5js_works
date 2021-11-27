// カラーパレット
let cp1 = ['#edeadc', '#889086', '#2a5249', '#e5ddb5', '#00233a'];
let cp2 = ['#859a5b', '#31663e', '#4b2c15', '#c6b083', '#746c5f'];
let cp3 = ['#c93128', '#e6cd4c', '#e3f2fb', '#3e4d9e', '#507c90'];
let cp4 = ['#f7e95e', '#bfd47b', '#d98eaf', '#f8d2e3', '#d0d3e2'];
let colorPalette = [cp1, cp2, cp3, cp4];
let colors;

let reps = 12;
let r = 30;
let dsp = r / 2

let cx = 0;
let cy = 0;

function setup() {
    frameRate(60)
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    angleMode(DEGREES)
    // 背景色を指定
    colors = random(colorPalette);
    background(colors[4]);
    
    
    
    strokeWeight(r - 10);
    noFill();
    // noLoop();
}

function draw(){
    background(colors[4]);
    for (let i = 0; i < reps; i ++){
        push();
        translate(width/5, height/5);
        rotate(-45 - frameCount);
        stroke(colors[0]);
        ellipse(0, i * dsp, i * r);
        pop();
        push();
        translate(width/5 * 4, height/5 * 4);
        rotate(135- frameCount);
        stroke(colors[1]);
        ellipse(0, i * dsp, i * r);
        pop();
        push();
        translate(width/5, height/5 * 4);
        rotate(45 + frameCount);
        stroke(colors[2]);
        ellipse(0, i * dsp, i * r);
        pop();
        push();
        translate(width/5 * 4, height/5);
        rotate(-135 + frameCount);
        stroke(colors[3]);
        ellipse(0, i * dsp, i * r);
        pop();
    }
}


function mouseClicked(){
    window.location.reload();
}