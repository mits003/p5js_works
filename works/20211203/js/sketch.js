let num_cells = 11; // 奇数
let num_shapes = (num_cells - 1) / 2
let theta = 90;
let dx = 30;
let dy = dx;
let mx, my;
let cx, cy;

function setup() {
    let canvas = createCanvas(windowHeight, windowHeight);
    background(255);
    noStroke();
    strokeCap(SQUARE);
    angleMode(DEGREES);

    // マージン
    mx = dx/2;
    my = dy/2;

    translate(width/2, height/2);
    let reps = 360 / theta;
    // L字ポリゴンの内側の角の座標
    stroke(0);
    for (let j = 0; j < reps; j++){
        rotate(theta);
        for (let i = 0; i < num_shapes; i++){
            cx = (i * 2 + 1) * dx;
            cy = (i * 2 + 1) * dy;
            
            noStroke();
            fill(255);
            beginShape();
            vertex(cx, cy);
            vertex(cx, my);
            vertex(cx + dx, my);
            vertex(cx + dx, cy + dx);
            vertex(mx, cy + dx);
            vertex(mx, cy);
            vertex(cx, cy);
            endShape(CLOSE);
            
            strokeWeight(3);
            noFill();
            stroke(0);
            beginShape();
            vertex(cx + dx / 2, my);
            vertex(cx + dx / 2, cy + dy / 2);
            vertex(mx, cy + dy / 2);
            endShape()

            strokeWeight(1);
            let l = 0;
            while (l < cx - mx){
                let noiseVal = map(noise(l*0.01), 0, 1, -1, 1) * 3;
                if (noiseVal > 0) {
                    stroke(200)
                } else {
                    stroke(100)
                }
                line(cx, cy-l, cx+dx*noiseVal, cy-l);
                line(cx-l, cy, cx-l, cy+dy*noiseVal);
                l += 2;
            }
        }
    }
}


function mouseClicked(){
    window.location.reload();
}