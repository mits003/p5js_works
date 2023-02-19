// カラーパレット
let cp1 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp2 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let colorPalette = [cp1, cp2, cp3, cp4];

let gridOutNum = 12;
let gridInNum = gridOutNum-1;
let offset;

let r = 10;

let seed = 2000;
let rSeed;

let circles = [];

function setup() {
    // canvas setting
    let canvas = createCanvas(600, 600);
    background('#f7f7f7');
    rSeed = int(random(seed));
    console.log(rSeed);
    randomSeed(rSeed);
    noiseSeed(rSeed);
    let cp = int(random(colorPalette.length));

    offset = width / (gridOutNum*2);
    let w = offset*2;
    let h = offset*2;
    for (let j = 0; j < gridInNum-1; j++) {
        for (let i = 0; i < gridInNum-1; i++) {
            let ux = offset + i*w + w/2;
            let ly = offset + j*h + h/2;
            let x = ux + w/2
            let y = ly + h/2
            let colors = colorPalette[cp];
            let circle = new Circle(x, y, r, colors);
            circles.push(circle);
        }
    }

    for (let i = 0; i < gridOutNum-1; i++){
        for (let j = 0; j < gridOutNum-1; j++){
            let ux = offset + i*w + w/2;
            let ly = offset + j*h + h/2;
            let x = ux;
            let y = ly;
            let colors = colorPalette[cp];
            let circle = new Circle(x, y, r, colors);
            circles.push(circle);
        }
    }

    for(let i = 0; i < circles.length; i++){
        circles[i].display();
    }
}

function grid(width, height){
    let gridNum = gridOutNum*2;
    let gridSpace = width / gridNum;

    strokeWeight(2);
    stroke(100)
    for (let i = 0; i <= width; i += gridSpace){
        for (let j = 0; j <= height; j += gridSpace){
            point(i, j);
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

