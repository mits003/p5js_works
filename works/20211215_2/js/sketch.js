let cp1 = ['#283d3b','#197278','#83a8a6','#edddd4','#d99185','#c44536','#772e25'];
let cp2 = ['#8ecae6','#219ebc','#126782','#023047','#ffb703','#fd9e02','#fb8500'];
let cp3 = ['#f94144','#f3722c','#f8961e','#f9c74f','#90be6d','#43aa8b','#577590'];
let cp4 = ['#5f0f40','#7d092f','#9a031e','#ef781c','#e36414','#0f4c5c','#255c6b']
;

let colorPalette = [cp1, cp2, cp3, cp4];
let colors;

let num_circles = 6;
let pgArray = [];

function setup() {
    let canvas = createCanvas(600, 600);
    angleMode(DEGREES);
    background('#e6e7db');
    noStroke();
    colors = random(colorPalette);

    let w = 100;
    let h = 20;

    for (let i = 0; i < num_circles; i++){
        for (let j = 0; j < num_circles; j ++){
            pg = createGraphics(w*2, h*3);
            // pg.background(100, 100);

            pg.fill(random(colors));
            pg.noStroke();
            pg.rect(w/2, h, w, h);
            getPixel(pg);
            pgArray.push(pg)
        }
    }

    translate(width/2, height/2);
    for (let i = 0; i < pgArray.length; i += 2){
        push();
        translate(random(-width/2+w*2, width/2-w*2), random(-height/2+h*2, height/2-h*2));
        rotate(90*(i%4));
        image(pgArray[i], 0, 0);
        image(pgArray[i+1], 2, 2);
        pop()
    }
}

function drawLine(pg, x, y, r, g, b, a) {
    let length = random(10, 30);
    pg.stroke(r, g, b, a);
    pg.strokeWeight(1);
    pg.noFill();
    pg.line(x-length, y, x+length, y);

}


function getPixel(pg) {
    for (let y = pg.height; y >= 0; y -= 1) {
        for (let x = pg.width/3*2; x >= pg.width/3; x -= 1) {
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

function mouseClicked(){
    window.location.reload();
}

