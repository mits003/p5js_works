// カラーパレット
let cp1 = ['#335c67','#fff3b0','#e09f3e','#9e2a2b','#540b0e'];
let cp2 = ['#002642','#840032','#e59500','#e5dada','#02040f'];
let cp3 = ['#fb6107','#f3de2c','#7cb518','#5c8001','#fbb02d'];
let cp4 = ['#780116','#f7b538','#db7c26','#d8572a','#c32f27'];
let cp5 = ['#3a2e39','#1e555c','#f4d8cd','#edb183','#f15152'];
let colorPalette = [cp1, cp2, cp3, cp4, cp5];
let colors;
let c = []


function setup() {
    let canvas = createCanvas(600, 600);
    window
    noLoop();
    angleMode(DEGREES);
    colors = random(colorPalette);

    for (let i = 0; i < 1; i++) {
        index = colors.indexOf(random(colors));
        if (index > -1) {
            c.push(colors[index])
            colors.splice(index, 1);
        }
    }
    background(c[0]);

    translate(width/2, height/2);
    let num_lines = 80;
    for (let k = 0; k < num_lines; k ++){
        rotate(random(360));
        let cx = random(-width/2, width/2);
        let cy = random(-height/2, height/2);
        let dx = random(5, 20);
        let dy = random(5, 20);
        let dim = random([-1, 1])
        let interval = 3;
        let d1 = random(0.8, 1);
        let d2 = random(0.8, 1);
        let angle1 = random(30, 120);
        let mag1 = random(4, 20);
        let mag2 = random(4, 20);
        let h1 = floor(random(3, 6));
        let h2 = floor(random(3, 6));
        let cIndex = 0;
        for (let i = -width/h1; i < width/h2; i += interval){
            let x1 = sin(i/d1)*mag1-cos(angle1)*i;
            let x2 = dim*sin(i/d2)*mag2-cos(angle1)*i;
            push();
            stroke(colors[cIndex%colors.length]);
            fill(colors[cIndex%colors.length]);
            line(x1+cx, i+cy, x2+cx+dx, i+cy+dy);
            pop()
            cIndex += 1;
        }
    }
}

function mouseClicked(){
    window.location.reload();
}

