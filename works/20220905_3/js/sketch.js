// カラーパレット
let cp1 = ['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557'];
let cp2 = ['#0c0a3e', '#7b1e7a', '#b33f62', '#f9564f', '#f3c677'];
let cp3 = ['#042a2b', '#5eb1bf', '#cdedf6', '#ef7b45', '#d84727'];
let colorPalletes = [cp1, cp2, cp3];
let colors;


let cells_in = 24;
let cells_out = cells_in;

function setup() {
    let canvas = createCanvas(600, 600);
    colors = random(colorPalletes);
    noLoop();
    noStroke();
}

function draw(){
    let w = max(width, height) / cells_in;
    let h = w;
    let ni1 = random(1);
    let nj1 = random(1);
    let ni2 = random(1);
    let nj2 = random(1);
    for (let j = -1; j <= cells_out; j++) {
        for (let i = -1; i <= cells_out; i++) {
            let x = i * w;
            let y = j * h;
            let cx = x + w / 2;
            let cy = y + h / 2;
            // noStroke();
            let n1 = floor(map(noise(i*ni1, j*nj1), 0, 1, 0, colors.length));
            let n2 = floor(map(noise(i*ni2, j*nj2), 0, 1, 0, colors.length));
            console.log("n1: " + n1)
            console.log("n2: " + n2)
            fill(colors[n1]);
            push();
            translate(cx+w/2, cy+h/2);
            if (i%2 === 0 && j%2 === 0){
                ellipse(-w/2, -h/2, w);
                ellipse(-w/2, h/2, w);
                ellipse(0, 0, w);
                ellipse(w/2, -h/2, w);
                ellipse(w/2, h/2, w);
            }
            translate(w/2, h/2)
            if (i%2 === 0 && j%2 !== 0){
                ellipse(-w/2, -h/2, w);
                ellipse(-w/2, h/2, w);
                // ellipse(0, 0, w);
                ellipse(w/2, -h/2, w);
                ellipse(w/2, h/2, w);
            }
            pop();
        }
    }
}

function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}