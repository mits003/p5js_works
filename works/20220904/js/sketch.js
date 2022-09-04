// カラーパレット
let cp1 = ['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557'];
let cp2 = ['#0c0a3e', '#7b1e7a', '#b33f62', '#f9564f', '#f3c677'];
let cp3 = ['#042a2b', '#5eb1bf', '#cdedf6', '#ef7b45', '#d84727'];
let colorPalletes = [cp1, cp2, cp3];
let colors;


let cells_in = 150;
let cells_out = cells_in;

function setup() {
    let canvas = createCanvas(600, 600);
    colors = random(colorPalletes)
    noLoop();
}

function draw(){
    // let w = max(width, height) / cells_out;
    let w = max(width, height) / cells_in;
    let h = w;
    for (let j = -1; j <= cells_out; j++) {
        for (let i = -1; i <= cells_out; i++) {
            let x = i * w;
            let y = j * h;
            let cx = x + w / 2;
            let cy = y + h / 2;
            push();
            translate(cx, cy);
            fill(random(colors));
            noStroke();
            ellipse(0, 0, w);
            pop();
        }
    }
    for (let j = -1; j <= cells_in; j++) {
        for (let i = -1; i <= cells_in; i++) {
            let x = i * w;
            let y = j * h;
            let cx = x + w / 2;
            let cy = y + h / 2;
            push();
            translate(cx + w / 2, cy + h / 2);
            let n = floor(map(noise(i*0.5, j*0.02), 0, 1, 0, colors.length));
            fill(colors[n]);
            noStroke();
            ellipse(0, 0, w);
            pop();
        }
    }

}

function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}