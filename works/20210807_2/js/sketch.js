// カラーパレット

let colors1 = ['#001219','#005f73','#0a9396','#94d2bd','#e9d8a6','#ee9b00','#ca6702','#bb3e03','#ae2012','#9b2226']
let colors2 = ['#f94144','#f3722c','#f8961e','#f9844a','#f9c74f','#90be6d','#43aa8b','#4d908e','#577590','#277da1','#f94144','#f3722c','#f8961e','#f9844a','#f9c74f','#90be6d','#43aa8b','#4d908e','#577590','#277da1','#f94144','#f3722c','#f8961e','#f9844a','#f9c74f','#90be6d','#43aa8b','#4d908e','#577590','#277da1']
let colors3 = ['#001d3d','#002952','#002c57','#002f5c','#124d85','#246bae','#47a6ff','#ffc300','#ffcf10','#ffda1f','#001d3d','#002952','#002c57','#002f5c','#124d85','#246bae','#47a6ff','#ffc300','#ffcf10','#ffda1f','#001d3d','#002952','#002c57','#002f5c','#124d85','#246bae','#47a6ff','#ffc300','#ffcf10','#ffda1f']
let colors4 = ['#FF5F5F','#F8907C','#FFC2A7','#FFEC57','#9EF2BB','#6CBAF4','#4AD0E8']


let colorPalettes = [colors1, colors2, colors3, colors4]

let inc = 0.03;
let scl = 10;
let cols, rows;

let zoff = 0;

let particles_num = 50;
let particles  = [];

let flowfield;

let fr = 50;

function setup() {
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
    frameRate(fr)
    let canvas = createCanvas(600, 600);

    let left_x = int(-width * 0);
    let right_x = int(width * 1);
    let top_y = int(-height * 0);
    let bottom_y = int(height * 1);

    cols = floor((right_x - left_x) / scl);
    rows = floor((bottom_y - top_y) / scl);

    flowfield = new Array(cols * rows);

    for (let i = 0; i < particles_num; i++) {
        particles[i] = new Particle(left_x, right_x, top_y, bottom_y);
    }
    background(255, 245, 194);
}

function draw() {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(0.1)
            flowfield[index] = v;
            xoff += inc;

        }
        yoff += inc;
        zoff += 0.0001;
    }

    for (let i = 0; i < colorPalettes[3].length; i++) {
        stroke(colorPalettes[3][i])
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }
}
