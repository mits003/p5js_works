// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

let save_mode = false;
let loop_mode = false;

let json = {}; // new  JSON Object

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    background('#000');
    stroke('#fff')

    angleMode(DEGREES);

    stroke(255);
    noFill();

    
    let a = random(1.5, 5.0).toFixed(1);
    let b = random(2.0, 5.0).toFixed(1);
    
    if (a % 0.2 !== 0){
        a = parseFloat(a) + 0.1
    }
    if (b % 0.2 !== 0){
        b = parseFloat(b) + 0.1
    }

    let tS = random(1, 5).toFixed(0);
    let tE = random(1, 5).toFixed(0);
    
    json.a = a;
    json.b = b;
    json.tS = tS;
    json.tE = tE;

    push()
    translate(width/2, height/2);
    beginShape();
    for (let t = -360*tS ; t < 360*tE; t++){
        let x = sin(a*t)*cos(t) * 180;
        let y = sin(b*t)*sin(t) * 180;
        curveVertex(x, y);
    }
    endShape()
    pop();

    if(save_mode){
        saveJSON(json, 'image.json');
        save("image.png");
    };
    if(!loop_mode){noLoop();}
    else{redraw()};
}

function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    saveJSON(json, 'image.json');
    save("image" + ".png");
    window.location.reload();
}

// function img_save() {
// }