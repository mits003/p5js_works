// カラーパレット
let colors = ["#86c2e7", "#edf0f4", "#f6b98b", "#fff798"]

// ランダムに図形を配置する
function setup(){
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    // カラーモードの設定
    colorMode(HSB, 360, 100, 100, 100);
    // 角度に度数法を指定
    angleMode(DEGREES);
    // 背景色を指定
    background("#ffffff");

    
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
    let inner_cells = 3; // 格子の数
    let offset = width / 10;
    let margin = offset / 5;
    // let w = (width - offset * 2 - margin * (cells - 1)) / cells;
    // let h = (height - offset * 2 - margin * (cells - 1)) / cells;
    let w = (width - cells) / cells;
    let h = (height - cells) / cells;
    let d = w/1.9;

    // 格子状に図形を配置する基本的な方法
    // 2重for文で縦横方向にxyの位置を計算し、その位置を基準に図形を配置する
    for (let j = 0; j < cells; j++){
        for (let i = 0; i < cells; i++){
            let x = i * w;
            let y = j * h;
            rectMode(CENTER);

            let cx = x + w / 2;
            let cy = y + h / 2;
            
            push()
            translate(cx, cy)
            let c = color(random(colors));
            noFill();
            stroke(c);
            strokeWeight(random(1, 4));
            ellipse(0, 0, d);
            ellipse(0-d, 0-d, d);
            ellipse(0-d, 0+d, d);
            ellipse(0+d, 0+d, d);
            ellipse(0+d, 0-d, d);
            
            pop()

        }
    
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
    }
}

function draw_circle(){
    noFill();

}