// カラーパレット
let cp1 = ['#335c67','#fff3b0','#e09f3e','#9e2a2b','#540b0e'];
let cp2 = ['#002642','#840032','#e59500','#e5dada','#02040f']
let cp3 = ['#fb6107','#f3de2c','#7cb518','#5c8001','#fbb02d']
let cp4 = ['#780116','#f7b538','#db7c26','#d8572a','#c32f27']
let cp5 = ['#3a2e39','#1e555c','#f4d8cd','#edb183','#f15152']
let colorPalette = [cp1, cp2, cp3, cp4, cp5];
let colors;
let c = []

let num_stripes = 2;

function setup() {
    let canvas = createCanvas(600, 600);
    noLoop();
    angleMode(DEGREES);
    colors = random(colorPalette);

    for (let i = 0; i < 3; i++) {
        index = colors.indexOf(random(colors));
        if (index > -1) {
            c.push(colors[index])
            colors.splice(index, 1);
        }
    }

    background(c[0]);
    
    ctx = drawingContext;
    let cx = width/2;
    let cy = width/2;

    fill(c[1])
    noStroke();
    ellipse(cx, cy, 250)

    ctx.beginPath();
    ctx.arc(cx, cy, 250, 0, Math.PI * 2);
    ctx.clip();

    let lag = floor(random(-(width-500)/2, (width-500)/2));
    stroke(c[2]);

    translate(width/2, height/2);
    for (let j = 0; j < num_stripes; j++){
        let interval = floor(random(2, 4));
        let d = random(0.5, 2);
        let mag = random(10, 20);
        rotate(-90*j)
        for (let i = -width/2; i < width/2; i += interval){
            length = sin(i/d) * mag - 50;
            line(-width/2, i+lag, length, i+lag);
        }
    }
}

function mouseClicked(){
    window.location.reload();
}

