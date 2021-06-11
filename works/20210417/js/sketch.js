// カラーパレット
let colors = ["#FFEC00", "#9CC45A", "#ff8882", "#9dbeb9"]

// ランダムに図形を配置する
function setup(){
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    // カラーモードの設定
    colorMode(HSB, 360, 100, 100, 100);
    // 角度に度数法を指定
    angleMode(DEGREES);
    // 背景色を指定
    background("#194350");

    
    // 画面上にたくさんの点を打って背景に粒状感を与える
    // 点の密度は、個数はキャンバスサイズに対し何％打つかを考える
    for (let i = 0; i < width * height * 5 / 100; i ++){
        // 半透明の点、白、黒でもOK。透明度は適宜調整する
        stroke(0, 0, 0, 10);
        let px = random(width);
        let py = random(height);
        point(px, py);
    }
    let cells = 10; // 格子の数
    let offset = width / 10;
    let margin = offset / 5;
    let w = (width - offset * 2 - margin * (cells - 1)) / cells;
    let h = (height - offset * 2 - margin * (cells - 1)) / cells;

    // 格子状に図形を配置する基本的な方法
    // 2重for文で縦横方向にxyの位置を計算し、その位置を基準に図形を配置する
    for (let j = 0; j < cells; j++){
        for (let i = 0; i < cells; i++){
            let x = offset + i * (w + margin);
            let y = offset + j * (h + margin);
            rectMode(CENTER);

            let cx = x + w / 2;
            let cy = y + h / 2;

            push()
            translate(cx, cy)
            let c = random(colors)
            scale(random(0.6, 1.1))
            n = int(random(4));
            switch(n){
                case 0:
                    drawFlower(c);
                    break;
                case 1:
                    drawCircles(c);
                    break;
                case 2:
                    drawTriangularShape(c, 0, 0);
                    break;
                case 3:
                    drawRadialLines(c, 0, 0);
                    break;
                }
            pop()

        }
    
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
    }
}

function drawFlower(c){
    let num_holes = 5
    let d_inner = 3
    let d_outer = 12
    noFill();
    stroke(c);
    strokeWeight(1);
    ellipse(0, 0, d_inner);
    rotate(random(360))
    for (let i = 0; i < num_holes; i ++){
        ellipse(d_outer * cos(i * 360 / num_holes), d_outer * sin(i * 360 / num_holes), d_outer);
    }
}

function drawCircles(c){
    let num_holes = 8
    let d = 16
    let shift = 0.5
    noFill();
    stroke(c);
    strokeWeight(1);
    rotate(random(360))
    for (let i = 0; i < num_holes; i ++){
        ellipse(d * cos(i * 360 / num_holes) * shift, d * sin(i * 360 / num_holes) * shift, d);
    }
}

function drawTriangularShape(c, cx, cy){
    let num_vertex = int(random(6, 9));
    let l = 14;
    strokeJoin(ROUND);
    noFill();
    stroke(c);
    strokeWeight(2);
    let shift = random(360);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0)
    for (let i = 0; i <= num_vertex + 1; i ++){
        vertex(cos((i * 360 + shift) / num_vertex) * l, sin((i * 360 + shift) / num_vertex) * l);
    }
    endShape();
}


function drawRadialLines(c, cx, cy){
    let num_lines = int(random(4, 6));
    let length = random(8, 15);
    stroke(c);
    strokeWeight(random(1, 3))
    for (let i = 0; i < num_lines; i ++){
        rotate(360 / (num_lines * 2));
        line(-length, -length, length, length);
    }
}