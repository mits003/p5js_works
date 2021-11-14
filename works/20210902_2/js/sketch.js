// カラーパレット
let colors = ['#335c67', '#99a88c', '#fff3b0', '#e09f3e', '#9e2a2b', '#540b0e'];

let BASE_S = 30;
let BASE_B = 40;

function setup(){
    createCanvas(600, 600);
    rectMode(CENTER);
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100, 1.0);
    let BASE_H = random(0, 360);
    background(BASE_H, BASE_S, BASE_B);

    let cp = colors;
    let cells = 6;
    let w = width / cells;
    let h = height / cells * sin(60);

    noStroke()
    for (let j = 0; j <= cells + 1; j++){
        for (let i = 0; i <= cells; i++){
            let x = i * w;
            let y = j * h;

            l = w / 2;

            push();
            translate(x, y)
            fill(colors[0]);
            triangle(0, 0, 0, l * sin(60), l * cos(60), l * sin(60));
            fill(colors[1]);
            triangle(0, l * sin(60), l * cos(60), l * sin(60), 0, l * sin(60)*2);
            fill(colors[2]);
            triangle(l * cos(60), l * sin(60), 0, l * sin(60)*2, l * cos(60), l * sin(60) * 2);
            triangle(l * cos(60), l * sin(60), l * cos(60), l * sin(60) * 2, l * cos(60) * 2, l * sin(60) * 2); // 右側
            fill(colors[3]);
            triangle(l * cos(60), l * sin(60), l * cos(60), 0, 0, 0);
            triangle(l * cos(60), l * sin(60), l * cos(60), 0, l, 0); //右側
            fill(colors[4]);
            triangle(l * cos(60), l * sin(60), l, l * sin(60), l, 0);
            triangle(l * cos(60) * 3, l * sin(60), l, l * sin(60), l, 0); //右側
            
            stroke('#fff');
            strokeWeight(6)
            point(l * cos(60) * 3, l * sin(60));
            point(l, l * sin(60));
            point(l, 0);
            pop();
        }
    }
}


function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}