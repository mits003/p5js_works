// カラーパレット
let cp1 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp2 = ['#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7'];
let cp3 = ['#5f0f40', '#9a031e', '#fb8b24', '#e36414', '#0f4c5c'];
let cp4 = ['#588b8b', '#f0f0f0', '#ffd5c2', '#f28f3b', '#c8553d'];
let colorPalletes = [cp1, cp2, cp3, cp4];

let pattern;
let shape;

let cols = 50;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    background('#f0f0f0')
    let colors = random(colorPalletes);

    pattern = createGraphics(width, height);
    let w = max(pattern.width, pattern.height) / cols;
    for (let i = 0; i < cols; i++){
        let h = 0;
        let x = i * w;
        while(h < height){
            let dh = + random(w*3, height/2);
            pattern.strokeWeight(2)
            pattern.stroke('#fff');
            pattern.fill(random(colors));
            pattern.rect(x, h, w, dh);
            h = h + dh;
        }
    }
    pattern = pattern.get();

    shape = createGraphics(width, height);

    shape.ellipse(random(shape.width), random(shape.width), shape.width/3*2);
    shape.ellipse(random(shape.width), random(shape.width), shape.width/2)

    shape = shape.get();
    pattern.mask(shape);
}

function draw(){
    image(pattern, 0, 0);

}
function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}