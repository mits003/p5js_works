// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

let s = new Scribble();

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    background('#ffffff');
    divideRect(10, 10, width - 20, height - 20, 5);
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
}

// function draw() {
//     divideRect(10, 10, width - 20, height - 20, 8);
// }

function divideRect(x, y, w, h, div) {
    stroke(random(colors))
    fillHachure(x, y, w, h);
    rect(x, y, w, h);
    div--;

    if (div >= 0) {
        if (w >= h) {
            let randomW = random(w * 0.1, w * 0.9);
            // divideRect(x + randomW, y, w - randomW, h, div);
            stroke(random(colors))
            fillHachure(x, y, randomW, h);
            fill('#ffffff')
            
            divideRect(x, y, randomW, h, div);
        } else if (w < h) {
            let randomH = random(h * 0.1, h * 0.9);
            divideRect(x, y, w, randomH, div);
            stroke(random(colors))
            // divideRect(x, y + randomH, w, h - randomH, div);
            fillHachure(x, y, w, randomH);
        }
    }
}

function fillHachure(xleft, ybottom, xright, ytop) {
    // the x coordinates of the border points of the hachure
    let xCoords = [xleft, xright, xright, xleft];
    // the y coordinates of the border points of the hachure
    let yCoords = [ytop, ytop, ybottom, ybottom];
    // the gap between two hachure lines
    let gap = 3.5;
    // the angle of the hachure in degrees
    let angle = 315;
    s.scribbleFilling(xCoords, yCoords, gap, angle);
}
