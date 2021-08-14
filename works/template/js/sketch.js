// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    background('#206a5d');
}


function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png')
}