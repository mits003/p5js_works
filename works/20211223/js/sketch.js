let cp1 = ['#807459','#e4d6a7','#e9b44c','#c26f31','#9b2915','#5a9395','#50a2a7'];
let cp2 = ['#f1f7ed','#8b9b92','#243e36','#50745c','#e0eec6','#d1cb82','#c2a83e'];
let cp3 = ['#f9f9f9','#dbe2e1','#bccac9','#acbab9','#9caaa9','#4e5d5c','#2b3a39'];
let cp4 = ['#ffbc42','#ec674e','#d81159','#b41f58','#8f2d56','#218380','#73d2de'];

let colorPalette = [cp1, cp2, cp3, cp4];
let colors;
let pgArray = [];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    background('#e6e7db');
    colors = random(colorPalette);

    let cells = random([7, 9, 11]); // 格子の数
    let offset = width / 20;
    let w = (width - offset * 2) / cells;
    let h = (height - offset * 2) / cells;
    let pgW = w+h*2/3;
    let pgH = h/3;

    for (let i = 0; i < colors.length; i++){
            pg = createGraphics(pgW, pgH);
            pg.fill(colors[i]);
            pg.stroke(100);
            pg.noStroke();
            pg.rect(pgW/4, 0, pgW/2, pgH);
            getPixel(pg);
            pgArray.push(pg);
    }

    let angle = 1;
    for (let j = 0; j < cells; j++){
        for (let i = 0; i < cells; i++){
            let x = offset+i*w;
            let y = offset+j*h;
            let n = floor(random(0, colors.length-1));

            push();
            translate(x+1/2*w,y+3/2*pgH);
            if (angle%2 === 0) {
                rotate(PI/2);
            }

            image(pgArray[n], -1/2*pgW-2, -1/2*pgH);
            image(pgArray[n+1], -1/2*pgW+2, -1/2*pgH+2);

            pop();
            angle += 1;
        }
    }
}


function mouseClicked(){
    window.location.reload();
}

function drawLine(pg, x, y, r, g, b, a) {
    let length = random(0, 20);
    pg.stroke(r, g, b, a);
    pg.strokeWeight(1);
    pg.noFill();
    pg.line(x-length, y, x+length, y);

}

function getPixel(pg) {
    for (let y = pg.height; y >= 0; y -= 1) {
        for (let x = pg.width/4*3; x >= pg.width/4; x -= 1) {
            const index = random();
            const color = pg.get(x, y);
            const r = color[0];
            const g = color[1];
            const b = color[2];
            const a = color[3];
            if (index > 0.1) drawLine(pg, x, y, r, g, b, a);
        }
    }
}