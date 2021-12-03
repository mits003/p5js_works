// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

let num_cells = 17; // 奇数
let num_shapes = (num_cells - 1) / 2
let theta = 90;
let dx, dy;
let mx, my;
let cx, cy;
let l = 1;

function setup() {
    let canvas = createCanvas(windowHeight, windowHeight);
    background(100);
    noStroke();
    strokeCap(SQUARE);
    
    angleMode(DEGREES);
    // セルの大きさ
    // dx = width / num_cells;
    // dy = height / num_cells;
    dx = 20;
    dy = dx;
    
    // マージン
    mx = dx/2;
    my = dy/2;

    translate(width/2, height/2);

    
    let reps = 360 / theta
    // L字ポリゴンの内側の角の座標
    for (let j = 0; j < reps; j++){
        rotate(theta);
        for (let i = 0; i < num_shapes; i++){
            noStroke();
            cx = (i * 2 + 1) * dx;
            cy = (i * 2 + 1) * dy;
            
            // fill(255);
            // beginShape();
            // vertex(cx, cy);
            // vertex(cx, my);
            // vertex(cx + dx, my);
            // vertex(cx + dx, cy + dx);
            // vertex(mx, cy + dx);
            // vertex(mx, cy);
            // vertex(cx, cy);
            // endShape(CLOSE);
            
            stroke(200);
            // strokeWeight(3);
            // noFill();
            // beginShape();
            // vertex(cx + dx / 2, my);
            // vertex(cx + dx / 2, cy + dy / 2);
            // vertex(mx, cy + dy / 2);
            // endShape()

            for (let k = 0; k < 10; k ++){
                let n = 0;
                while (n*l < cx - mx){
                    line(cx, cy-n*l, cx+dx, cy-n*l);
                    line(cx-n*l, cy, cx-n*l, cy+dx);
                    n += noise(k)*50;
                }
            }
        }

    }

    for (let i = 0; i < reps; i ++){

    }

}


function mouseClicked(){
    window.location.reload();
}