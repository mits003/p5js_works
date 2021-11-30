// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

let num_cells = 21; // 奇数
let num_shapes = (num_cells - 1) / 2
let dx, dy;
let mx, my;
let cx, cy;

function setup() {
    let canvas = createCanvas(windowHeight, windowHeight);
    background(200);
    noStroke();
    fill(255);
    
    // セルの大きさ
    dx = width / num_cells;
    dy = height / num_cells;
    
    // マージン
    mx = dx;
    my = dy;

    // 最初の正方形の中心座標
    rectMode(CENTER);
    // square(cx, cy, dx);

    // L字ポリゴンの内側の角の座標
    for (let i = 0; i < num_shapes; i++){
        cx = (i * 2 + 1) * dx;
        cy = (i * 2 + 1) * dy;
        beginShape();
        vertex(cx, cy);
        vertex(cx, my);
        vertex(cx + dx, my);
        vertex(cx + dx, cy + dx);
        vertex(mx, cy + dx);
        vertex(mx, cy);
        vertex(cx, cy);
        endShape(CLOSE);
    }

}


function mouseClicked(){
    window.location.reload();
}