// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    background('#206a5d');

    rSeed = int(random(seed));
    console.log(rSeed);
    randomSeed(rSeed);
    noiseSeed(rSeed);
    let colors = random(colorPalette);
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