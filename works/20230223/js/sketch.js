// カラーパレット
let cp1 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp2 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let colorPalette = [cp1, cp2, cp3, cp4];

let seed = 4000;
let rSeed;

let monumentsNum = 10;
let grainsNum = 50;

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
    
    strokeWeight(0.5);

    for(let j = 0; j < monumentsNum; j++){
        push();
        translate(random(100, width-100), random(100, height-100));
        stroke(random(colors));
        let r = random(10, 50);
        for(let i = 0; i < r*grainsNum; i++){
            let x = randomGaussian(0, r);
            let y = randomGaussian(0, r);
            let a = atan2(y, x);
            line(x, y, x+cos(a)*10, y+sin(a)*10)
        }
        pop();
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