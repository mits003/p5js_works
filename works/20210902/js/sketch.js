// カラーパレット
let colors = ['#335c67', '#99a88c', '#fff3b0', '#e09f3e', '#9e2a2b', '#540b0e'];

let BASE_S = 20;
let BASE_B = 40;

function setup(){
    angleMode(DEGREES);
    createCanvas(600, 600*sin(60));
    rectMode(CENTER);
    colorMode(HSB, 360, 100, 100, 1.0);
    let BASE_H = random(0, 360);
    background(BASE_H, BASE_S, BASE_B);

    let cp = colors;
    let cells = 10;
    let w = width / cells;
    // let h = (height - (cells - 1)) / cells;
    let h = w * sin(60);

    noStroke()
    for (let j = 0; j < cells + 1; j++){
        for (let i = 0; i < cells + 1; i++){
            let x = i * w;
            let y = j * h;

            if (j % 2 == 0){
                let cx = x + w / 2;
                let l = w / 2;
                let cy = y + sin(60) * l;
    
                for (k = 0; k < 6; k++){
                    push();
                    translate(cx, cy);
                    rotate(60*k);
                    fill(cp[k])
                    triangle(0, 0, -l, 0, -cos(60)*l, -sin(60)*l);
                    pop();
                }
            } else {
                let cx = x;
                let l = w / 2;
                let cy = y + sin(60) * l;
    
                for (k = 0; k < 6; k++){
                    push();
                    translate(cx, cy);
                    rotate(60*k);
                    fill(cp[k])
                    triangle(0, 0, -l, 0, -cos(60)*l, -sin(60)*l);
                    pop();
                }

            }
        }
    }
}


function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}