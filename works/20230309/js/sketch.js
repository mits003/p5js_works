// カラーパレット
let cp1 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp2 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let colorPalette = [cp1, cp2, cp3, cp4];

let seed = 2000;
let rSeed;

let colors;
let pattern, shape;
let pattern2, shape2;

let gridOutNum = 10;
let gridInNum = gridOutNum-1;
let offset;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    background('#ffffff');

    rSeed = int(random(seed));
    console.log(rSeed);
    randomSeed(rSeed);
    noiseSeed(rSeed);
    let cp = int(random(colorPalette.length));

    pattern = createGraphics(width, height);
    shape = createGraphics(width, height);

    pattern.noStroke();

    offset = width / (gridOutNum*2);
    let w = offset*2;
    let h = offset*2;
    for (let j = 0; j < gridInNum-1; j++) {
        for (let i = 0; i < gridInNum-1; i++) {
            let sumAngle = 0;
            let angle = sumAngle;
            while (sumAngle <= 360){
                let c = random(colorPalette[cp])
                pattern.fill(c)
                let ux = offset + i*w + w/2;
                let ly = offset + j*h + h/2;
                // let x = ux + width/2*cos(sumAngle);
                // let y = ly + width/2*sin(sumAngle);
                let x = ux + w/2;
                let y = ly + h/2;
                angle = random(60);
                pattern.ellipse(random(width), random(height), random(100, 200));
                shape.ellipse(x, y, 50);
                sumAngle += angle;
            }
        }
    }
    pattern = pattern.get();
    pattern.mask(shape);
    image(pattern, 0, 0);
    
    blendMode(REMOVE)

    // pattern2 = createGraphics(width, height);
    // shape2 = createGraphics(width, height);

    // pattern2.noStroke();
    // pattern2.fill(random(colors));
    // let angle2 = random(TWO_PI);
    // let x2 = width/2 + atan(random(TWO_PI)) * width/2 / sqrt(2) * cos(angle2);
    // let y2 = height/2 + atan(random(TWO_PI)) * width/2 / sqrt(2) * sin(angle2);
    // // pattern2.ellipse(x2, y2, random(width/3, width));
    // pattern2.ellipse(width/2, height/2, random([0, width/2, width*2/3]));
    // shape2.ellipse(width/2, height/2, width)
    // pattern2 = pattern2.get();
    // pattern2.mask(shape2);
    // // image(pattern2, width/2, height/2);
    // // image(pattern2, 0, 0);
    // noLoop();
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