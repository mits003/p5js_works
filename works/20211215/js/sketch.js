// カラーパレット
let cp1 = ['#1a535c','#4ecdc4','#f7fff7','#ff6b6b','#ffe66d']
let cp2 = ['#227c9d','#17c3b2','#ffcb77','#fef9ef','#fe6d73']
let cp3 = ['#335c67','#fff3b0','#e09f3e','#9e2a2b','#540b0e']
let cp4 = ['#000000','#14213d','#fca311','#e5e5e5','#ffffff']
let cp5 = ['#264653','#2a9d8f','#e9c46a','#f4a261','#e76f51']
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

    let cx = 0;
    let cy = height/2;
    translate(cx, cy);

    let interval = random([4, 6]);
    let d = random(0.1, 0.8);
    let num_reps = floor(random(4, 8));
    let angle1 = random(30, 120);
    let mag = random([1, 2, 3, 6, 10, 25, 50]);
    for (let j = -1; j < num_reps+1; j++){
        push();
        translate(width/num_reps*j, 0);
        let c = random(colors);
        let lag = abs(j%2*interval/2);
        stroke(c);
        for (let i = -width/2+lag; i < width/2+lag; i += interval){
            let x1 = sin(i/d)*mag-cos(angle1)*i;
            line(x1, i, x1+width/(num_reps-1), i);
        }
        pop()
    }
}


function mouseClicked(){
    window.location.reload();
}