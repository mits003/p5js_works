// カラーパレット
let cp1 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp2 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let colorPalette = [cp1, cp2, cp3, cp4];

let seed = 2000;
let rSeed;

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

    noStroke();
    for(let i = 0; i < 12; i++){
        push();
        // translate(width/2, height/2);
        translate(random(width), random(height));
        rotate(PI/random(1,6)*i);
        drawingContext.save();
        let region = new Path2D();
        for(let j = 0; j < int(random(3, 30)); j++){
            let r1 = random(10,50);
            let r2 = random(10,50);
            region.rect(r1*j, r1*j, r1*j, r1*j);
            region.rect(r2*j, r2*j, r2*j, r2*j);
            region.ellipse(r1*j, r1*j, r1*j, r1*j, 0, 0, TWO_PI);
            region.ellipse(r2*j, r2*j, r2*j, r2*j, 0, 0, TWO_PI);
        }
        drawingContext.clip(region, "evenodd");
        fill(random(colors));
        ellipse(0, 0, 2000);
        drawingContext.restore();
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