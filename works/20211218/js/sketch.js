let cp1 = ['#283d3b','#197278','#83a8a6','#edddd4','#d99185','#c44536','#772e25'];
let cp2 = ['#8ecae6','#219ebc','#126782','#023047','#ffb703','#fd9e02','#fb8500'];
let cp3 = ['#f94144','#f3722c','#f8961e','#f9c74f','#90be6d','#43aa8b','#577590'];
let cp4 = ['#5f0f40','#7d092f','#9a031e','#ef781c','#e36414','#0f4c5c','#255c6b']
;

let colorPalette = [cp1, cp2, cp3, cp4];
let colors;
let pgArray = [];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    background('#e6e7db');
    colors = random(colorPalette);

    let cells = random([3, 5, 7, 9]); // 格子の数
    let offset = width / 20;
    let w = (width - offset * 2) / cells;
    let h = (height - offset * 2) / cells;
    let pgW = w;
    let pgH = h/3;

    for (let i = 0; i < colors.length; i++){
            pg = createGraphics(pgW, pgH);
            pg.fill(colors[i]);
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
            let n = floor(random(0, colors.length-3));

            push();
            translate(x+1/2*w,y+3/2*pgH);
            if (angle%2 === 0) {
                rotate(PI/2);
            }
            image(pgArray[n], -1/2*w-2, -3/2*pgH);
            image(pgArray[n+1], -1/2*w+2, -3/2*pgH+2);

            image(pgArray[n+1], -1/2*w-2, -1/2*pgH);
            image(pgArray[n+2], -1/2*w+2, -1/2*pgH+2);

            image(pgArray[n+2], -1/2*w-2, 1/2*pgH);
            image(pgArray[n+3], -1/2*w+2, 1/2*pgH+2);
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