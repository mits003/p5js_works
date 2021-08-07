// カラーパレット
let colors = ["#FFEC00", "#9CC45A", "#ECAECA", "#D8E27F"]

// ランダムに図形を配置する
function setup(){
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    // カラーモードの設定
    colorMode(HSB, 360, 100, 100, 100);
    // 角度に度数法を指定
    angleMode(DEGREES);
    // 背景色を指定
    background("#f7EDD0");

    
    // 画面上にたくさんの点を打って背景に粒状感を与える
    // 点の密度は、個数はキャンバスサイズに対し何％打つかを考える
    for (let i = 0; i < width * height * 5 / 100; i ++){
        // 半透明の点、白、黒でもOK。透明度は適宜調整する
        stroke(0, 0, 0, 10);
        let px = random(width);
        let py = random(height);
        point(px, py);
    }
    let cells = 8; // 格子の数
    let offset = width / 10;
    let margin = offset / 5;
    let w = (width - offset * 2) / cells;
    let h = (height - offset * 2) / cells;
    // let w = (width - offset * 2 - margin * (cells - 1)) / cells;
    // let h = (height - offset * 2 - margin * (cells - 1)) / cells;

    // 格子状に図形を配置する基本的な方法
    // 2重for文で縦横方向にxyの位置を計算し、その位置を基準に図形を配置する
    for (let j = 0; j < cells; j++){
        for (let i = 0; i < cells; i++){
            let x = offset + i * (w );
            let y = offset + j * (h );
            // let x = offset + i * (w + margin);
            // let y = offset + j * (h + margin);
            rectMode(CENTER);

            let cx = x + w / 2;
            let cy = y + h / 2;
            let d = w;

            let rotate_num = int(random(4)); // 0~3の整数
            rotate_num = rotate_num * 90; // 0, 90, 180, 270

            let shape_num = int(random(4));

            let c = color(random(colors));

            push();
            translate(cx, cy);
            rotate(rotate_num);
            if (random(100) > 50) {
                noStroke();
                fill(c);
            } else {
                noFill();
                stroke(c);
            }

            if (shape_num == 0){
                triangle(-d / 2, -d / 2, d / 2, -d / 2, -d / 2, d / 2)
            } else if (shape_num == 1){
                rectMode(CENTER);
                rect(0, 0, d, d);
            } else if (shape_num == 2){
                ellipse(0, 0, d, d);
            } else if (shape_num == 3){
                arc(-d / 2, -d / 2, d * 2, d * 2, 0, 90);
            }
            strokeWeight(10);
            point(0, 0)
            point(w/2,h/2 )
            pop();
        }
    // saveCanvas(canvas, 'myCanvas', 'png');
    }
}