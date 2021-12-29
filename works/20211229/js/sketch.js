let cp1 = ['#856e75', '#aacbc1', '#c3b39c', '#749488', '#4d4150', '#7f6c68', '#e7d557', '#e77433', '#bd3528', '#e0a3c2', '#f2db68', '#dcdcdd' ,'#97b680', '#97bcc3', '#d9e366', '#966885', '#696885', '#ee847d', '#3471a1', '#8d9b9f']
let colorPalette = [cp1];
let colors;
let c = []

function setup() {
    let canvas = createCanvas(600, 600);
    colors = random(colorPalette);

    for (let i = 0; i < 5; i++) {
        index = colors.indexOf(random(colors));
        if (index > -1) {
            c.push(colors[index])
            colors.splice(index, 1);
        }
    }

    grainyGradient(canvas);
    noStroke();

    let pg = createGraphics(width, height);
    pg.clear();
    let ctx = pg.drawingContext;

    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;
    let d1 = 0;
    let d2 = 0;
    let l = 0;
    
    while (l <= d1/2 || l <= d2/2 || l >= (d1+d2)/2){
        x1 = random(width/5*2, width/5*3);
        y1 = random(width/5*2, width/5*3);
        x2 = random(width/5*2, width/5*3);
        y2 = random(width/5*2, width/5*3);
        d1 = random(width/8, width/5*1.5);
        d2 = d1 + random(30, 50);
        l = sqrt((x1-x2)**2 + (y1-y2)**2);
    }

    ctx.ellipse(x1, y1, d1, d1, 0, 0, Math.PI*2);
    ctx.clip();
    
    ctx.fillStyle = c[0];
    ctx.beginPath();
    ctx.ellipse(x2, y2, d2, d2, 0, 0, Math.PI*2);
    ctx.fill();

    fill(c[1])
    ellipse(x1, y1, d1*2);
    fill(c[2])
    ellipse(x2, y2, d2*2);

    image(pg, 0, 0);
}

function grainyGradient(pg){
    let ctx = pg.drawingContext;

    let data = Uint32Array.from({length: 2*width * 2*height}, () => Math.random()*0xFFFFFFff);

    const img = new ImageData(new Uint8ClampedArray(data.buffer), 2*width, 2*height);

    ctx.putImageData(img, 0, 0);
    ctx.globalCompositeOperation = "color";
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = "hard-light";
    ctx.fillStyle = ctx.createLinearGradient(0, 0, 0, height);
    ctx.fillStyle.addColorStop(0.1, c[3]);
    ctx.fillStyle.addColorStop(0.9, c[4]);
    ctx.fillRect(0, 0, width, height);
}

function mouseClicked(){
    window.location.reload();
}