// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

let num_cells = 17; // 奇数
let num_shapes = (num_cells - 1) / 2
let theta = 90;
let dx, dy;
let mx, my;
let cx, cy;

function setup() {
    let canvas = createCanvas(windowHeight, windowHeight);
    background(100);
    noStroke();
    fill(255);
    
    angleMode(DEGREES);
    // セルの大きさ
    // dx = width / num_cells;
    // dy = height / num_cells;
    dx = 20;
    dy = dx;
    
    // マージン
    mx = dx/2;
    my = dy/2;

    // 最初の正方形の中心座標
    rectMode(CENTER);
    // square(cx, cy, dx);

    translate(width/2, height/2);


    let reps = 360 / theta
    // L字ポリゴンの内側の角の座標
    for (let j = 0; j < reps; j++){
        rotate(theta);
        for (let i = 0; i < num_shapes; i++){
            noStroke();
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

            stroke(200);
            strokeWeight(3);
            strokeCap(SQUARE);
            line(cx + dx / 2, cy + dx / 2, cx + dx / 2, my);
            line(cx + dx / 2, cy + dx / 2, mx, cy + dy / 2);
        }
    }

    for (let i = 0; i < reps; i ++){

    }

}


function mouseClicked(){
    window.location.reload();
}