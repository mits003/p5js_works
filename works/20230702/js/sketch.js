// カラーパレット
let cp1 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp2 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let colorPalette = [cp1, cp2, cp3, cp4];

let seed = 2000;
let rSeed;

let rows = 500;
let columns = 15;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    background('#f7f7f7');
    // background('#161616');

    rSeed = int(random(seed));
    console.log(rSeed);
    randomSeed(rSeed);
    noiseSeed(rSeed);
    let colors = random(colorPalette);

    let h = height / rows


    strokeWeight(0.1);
    // let leftL = int(random(1,10))*10
    // let rightL = int(random(1,10))*10
    
    let incA = TWO_PI/rows;
    for(let i = 0; i < columns; i ++){
        push();
        // translate(width/columns*i + width/(columns*2), 0);
        translate(width/columns*i + width/(columns*2), 0);
        stroke(colors[i % colors.length]);
        let a = 0;
        // let incA = TWO_PI*random(1,100)/rows;
        let leftL = int(random(1,10))*i
        // let rightL = int(random(1,10))*10
        for (let j = -rows; j < rows; j++){
        // for (let j = 0; j < rows*2; j++){
            // line(0, j*h, cos(a*noise(1))*100, j*h);
            // line(-cos(a*noise(i))*150, j*h, cos(a*noise(i))*150, j*h);
            // line(-cos(a)*leftL, j*h+10, cos(a)*rightL, j*h+30);
            // line(-cos(a)*leftL, j*h+j, cos(a)*leftL, j*h-j);
            // line(-cos(a)*leftL, j, cos(a)*leftL, j+30);
            line(-cos(a)*leftL, -sin(j)*600, cos(a)*leftL*j, sin(j)*600);
            a = a + incA;
        }
        pop()
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