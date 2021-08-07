// カラーパレット
// let colors = ['#FFD922','#FFC34B', '#FFB522','#FFB522', '#FF8622'] ;
// let colors = ['#06AED5', '#086788', '#F0C808', '#E77211', '#DD1C1A'];
// let colors = [
//     '#ee59ae',
//     '#d95fbe',
//     '#c065cb',
//     '#a26cd5',
//     '#7f72da',
//     '#617cdf',
//     '#3e85df',
//     '#008cdc',
//     '#0098d6',
//     '#00a1c8',
//     '#00a7b6',
//     '#22aca3'
// ];

let colors = ['#d87834ff',
'#ee9739ff',
'#ffc425ff',
'#ffdd4fff',
'#9dcd4fff',
'#76ba4fff',
'#095339ff',]

let inc = 0.01;
let scl = 3;
let cols, rows;

let zoff = 0;

let fr;

let particles_num = 100;
let particles_arrays = [];

let flowfield = [];

let c;

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    // noiseSeed(5);

    // 背景色を指定
    // background('#206a5d');

    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);

    let left_x = int(-width * 0);
    let right_x = int(width * 1);
    let top_y = int(-height * 0);
    let bottom_y = int(height * 1);

    cols = floor((right_x - left_x) / scl);
    rows = floor((bottom_y - top_y) / scl);

    flowfield = new Array(cols * rows);

    // background(255);
    for (j = 0; j < colors.length; j++) {
        let particles = [];
        let left = random(0, width - width / 5);
        let right = left + width / 10;
        let top = random(0, height - height / 5);
        let bottom = top + height / 10;
        for (let i = 0; i < particles_num; i++) {
            // particles[i] = new Particle();
            particles[i] = new Particle(left, right, top, bottom);
        }
        particles_arrays[j] = particles;
    }
    c = {r:0, g: 202, b: 120}
}

function draw() {
    // background(255, 100);
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            // let angle = noise(xoff) * TWO_PI;
            // let angle = noise(xoff, yoff) * TWO_PI;
            let angle = noise(xoff, yoff, zoff) * TWO_PI;
            // let angle = noise(xoff, yoff, zoff);
            let v = p5.Vector.fromAngle(angle);
            v.setMag(0.15);
            flowfield[index] = v;
            xoff += inc;
            // strokeWeight(1);
            // point(x, y);
        }
        yoff += inc;
        zoff += 0.0001;
    }

    for (let j = 0; j < colors.length; j++) {
        let p;
        p = particles_arrays[j];
        stroke(colors[j]);
        for (let i = 0; i < particles_num; i++) {
            particles_arrays[j][i].follow(flowfield);
            particles_arrays[j][i].update();
            particles_arrays[j][i].edges();
            particles_arrays[j][i].show();
        }
    }
    // c.r += random(-3,3);
    // c.g += random(-3,1);
    c.b += 0.5;
}
