// カラーパレット
let cp1 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp2 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let colorPalette = [cp1, cp2, cp3, cp4];

let seed = 2000;
let rSeed;
let scalar = 300;

let pattern;
let shape;

let cellsNum = 6;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    
    // 背景色を指定
    background('#f7f7f7');
    
    rSeed = int(random(seed));
    console.log(rSeed);
    randomSeed(rSeed);
    noiseSeed(rSeed);
    let colors = random(colorPalette);
    
    pattern = createGraphics(width, height);
    shape = createGraphics(width, height);


    pattern.noStroke();
    pattern.fill(random(colors));
    pattern.ellipse(0, 0, width/cellsNum);
    pattern.fill(random(colors));
    pattern.ellipse(width/cellsNum, height/cellsNum, width/cellsNum);
    pattern.fill(random(colors));
    shape.triangle(0, 0, width/cellsNum, height/cellsNum-1, 0, width/cellsNum)
    pattern = pattern.get();
    pattern.mask(shape);

    noLoop();
}

function draw(){
    for(let i = -1; i < cellsNum+1; i += 1){
        for(let j = -1; j < cellsNum+1; j += 1){
            if (i % 2 == 0){
                image(pattern, width/cellsNum*i, width/cellsNum*j);
                push();
                translate(width/cellsNum*(i+1), width/cellsNum*(j+1))
                rotate(PI)
                image(pattern, 0, 0);
                pop()
            } else {
                push();
                translate(width/cellsNum*(i+1), width/cellsNum*(j+1))
                rotate(HALF_PI)
                image(pattern, 0, 0);
                translate(-width/cellsNum, -width/cellsNum)
                rotate(PI)
                image(pattern, 0, 0);
                pop()
            }
        }
    }
}


function mouseClicked(){
    window.location.reload();
}

function keyPressed(){
    if(key == 's'){
        var scripts = document.getElementsByTagName("sketch").src
        console.log(scripts)
        saveCanvas(canvas, 'image_'+rSeed, 'png');
    }
}