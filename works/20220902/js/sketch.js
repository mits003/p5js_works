// カラーパレット
let colors = ['#06AED5', '#086788', '#F0C808','#E77211', '#DD1C1A'];
// let colors =['#ee59ae', '#d95fbe', '#c065cb', '#a26cd5', '#7f72da', '#617cdf', '#3e85df', '#008cdc', '#0098d6', '#00a1c8', '#00a7b6', '#22aca3'];

let cells_in = 5;
let cells_out = cells_in + 1;
let figuresNum = cells_in;

let num_circles = 30;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(windowHeight, windowHeight);
    
    // 背景色を指定
    // background('#202020');
    background('#f2f2f2');
    
    let offset = width / 1;
    
    let w = (width - offset * 2) / cells_out;
    let h = (height - offset * 2) / cells_out;

    let n = random(1,4).toFixed(1);
    console.log(n)
    
    for (let j = 0; j < cells_out; j++) {
        for (let i = 0; i < cells_out; i++) {
            let x = offset + i * w;
            let y = offset + j * h;
            let cx = x + w / 2;
            let cy = y + h / 2;
            
            push();
            translate(cx, cy);
            mirage(0, 0, 30, n);
            pop();
        }
    }
}

function mirage(x, y, d, n) {
    let r = d * 0.5;
    let c = int(d * 25);
    let col = color(random(colors));
    for (let i = 0; i < c; i++) {
        let ang = random(TWO_PI) * 4;
        let rad = sqrt(random(1)) * random(0.5) * 2 + 1;
        let len = ang * 1;
        stroke(col);
        point( x + cos(ang) * r^n * rad * len, y + sin(ang) * r^n * rad * len);
    }
}


function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}