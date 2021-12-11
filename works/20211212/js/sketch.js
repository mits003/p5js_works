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

    let cx = width/2;
    let cy = height/2;
    translate(cx, cy);
    rotate(random(360));

    let interval = random([8, 12, 15]);
    let d = random(0.01, 1);
    let num_reps = floor(random(2, 10));
    let angle1 = random(30, 120);
    let angle2 = 360/num_reps;
    let mag = random([1, 2, 3, 6, 10, 25, 50, 80, 120]);
    let h1 = floor(random(3, 6));
    let h2 = floor(random(3, 6));
    for (let j = 0; j < num_reps; j++){
        for (let i = -width/h1; i < width/h2; i += interval){
            let x1 = sin(i/d)*mag-cos(angle1)*i;
            let x2 = -sin(i/d)*mag+cos(angle1)*i;
            let c = random(colors);
            push();
            rotate(angle2*j);
            stroke(c)
            line(x1, i, x2, i);
            noStroke();
            fill(c)
            ellipse(x1, i, 5);
            ellipse(x2, i, 5);
            pop()
        }
    }
}

function mouseClicked(){
    window.location.reload();
}

