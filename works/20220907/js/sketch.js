// カラーパレット
let cp1 = ['#05668d', '#028090', '#00a896', '#02c39a', '#f0f3bd'];
let cp2 = ['#f5e6e8', '#d5c6e0', '#aaa1c8', '#967aa1', '#192a51'];
let cp3 = ['#cee5f2', '#accbe1', '#7c98b3', '#637081', '#536b78'];
let cp4 = ['#f9dbbd', '#ffa5ab', '#da627d', '#a53860', '#450920'];
let colorPalletes = [cp1, cp2, cp3, cp4];

let pg;
let pattern;
let shape;

let cols = 25;

let graphics = new Array;

let fillColor, strokeColor;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    background('#f0f0f0')
    
    let colors = random(colorPalletes);
    for (let j = 0; j < 2; j++){
        graphics[j] = createGraphics(width, height);
        let w = max(graphics[j].width, graphics[j].height) / cols;
        for (let i = 0; i < cols; i++){
            let h = 0;
            let x = i * w;
            graphics[j].strokeWeight(2)
            fillColor = color(random(colors));
            while(h < height){
                let dh = + random(w*3, height/2);
                if(j === 0){
                    graphics[j].stroke('#fff');
                } else if (j === 1) {
                    graphics[1].stroke('#efefef');
                }
                fillColor.setAlpha(255-(j*20));
                graphics[j].fill(fillColor);
                graphics[j].rect(x, h, w, dh);
                h = h + dh;
            }
        }
        graphics[j] = graphics[j].get();
    }
    
    shape = createGraphics(width, height);
    let circleNum = floor(random(2,5));
    for (let i = 0; i < circleNum; i++){
        shape.ellipse(random(shape.width), random(shape.width), shape.width/random(1, 5));
    }
    shape = shape.get();
    graphics[0].mask(shape);

    pg = createGraphics(width, height);
    pg.image(graphics[0], 0, 0);
    image(graphics[1], 0, 0);
    image(pg, 0, 0);
}
function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}