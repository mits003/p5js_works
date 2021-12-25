// カラーパレット
let cp1 = ['#37265A', '#3B8593', '#F2EB6F', '#E55571'];
let cp2 = ['#ED4F33', '#2E2963', '#ADD2D8', '#F5B12E'];
let cp3 = ['#223442', '#507667', '#F5D367', '#5A7882'];
let cp4 = ['#335c67', '#e09f3e', '#9e2a2b', '#540b0e'];
let colorPalette = [cp1, cp2, cp3, cp4];


function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    background('#fcfcfc');
    let colors = random(colorPalette)

    let cells = 20; // 格子の数
    let offset = width / 20;
    let w = (width - offset * 2) / cells;
    let h = (height - offset * 2) / cells;

    let circle_reps = 3;
    let circles = 3;
    for (let k = 0; k < circles; k++){
        let cx = random(offset, width-offset);
        let cy = random(offset, height-offset);
        stroke(random(colors))
        push();
        translate(cx, cy);
        for (let j = 0; j < circle_reps; j++){
            let d = random(w, w*3);
            for (let i = -d; i < d; i += 3){
                let l = sqrt(d**2 - i**2)
                line(-l, i, l, i)
            }
        }
        pop();
    }

    let lines = random([24, 32, 48]);
    
    for (let j = 0; j < lines; j++){
        let reps = floor(random(2, 5))
        let sx = constrain(floor(random(0, 20))*w+offset, offset, width-offset);
        let sy = constrain(floor(random(0, 20))*h+offset, offset, height-offset);
        let ex = 0;
        let ey = 0;
        for (let i = 0; i < reps; i++){
            let length = random([-1, 1])*floor(random(3, 5))*w;
            let bent = random([0, 1])
            if (bent === 0){
                ex = constrain(sx, offset, width-offset);
                ey = constrain(sy+length, offset, height-offset);
            } else {
                ex = constrain(sx+length, offset, width-offset);
                ey = constrain(sy, offset, height-offset);
            }
            stroke('#696c74');
            line(sx, sy, ex, ey);
            fill(random(colors))
            if (i !== 0 && i !== reps){
                let a = floor(random(0, 4));
                if (a === 0){
                    triangle(ex, ey, ex, ey+h, ex+w, ey)
                } else if (a === 1){
                    triangle(ex, ey, ex, ey+h, ex-w, ey)
                } else if (a === 2){
                    triangle(ex, ey, ex, ey-h, ex+w, ey)
                } else if (a === 3){
                    triangle(ex, ey, ex, ey-h, ex-w, ey)
                }
            }
            sx = ex;
            sy = ey;
        }
    }
}


function mouseClicked(){
    window.location.reload();
}