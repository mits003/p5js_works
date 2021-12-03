let colors = ['#eed13f', '#a20031', '#d98332', '#45966c', '#317f91'];

let cx, cy;

function setup() {
    let canvas = createCanvas(windowHeight, windowHeight);
    background(random(colors));
    noStroke();
    strokeCap(SQUARE);
    angleMode(DEGREES);

    translate(width/2, height/2);
    rotate(45);
    // L字ポリゴンの内側の角の座標
    stroke(0);
    cx = 0;
    cy = 0;

    let d = width-100;
    noStroke();
    // ellipse(cx, cy, d);

    strokeWeight(1);
    let l = 0;
    while (l < cx + d/2){
        let noiseVal = map(noise(l*0.05), 0, 1, 1, 5);
        if (noiseVal > 3) {
            stroke(200)
        } else {
            stroke(50)
        }
        let h = sqrt((d/2)**2 - l**2)
        line(cx, cy+l, cx-h, cy+l);
        line(cx, cy-l, cx+h, cy-l);
        line(cx-l, cy, cx-l, cy+h);
        line(cx+l, cy, cx+l, cy-h);
        l += noiseVal;
    }
}


function mouseClicked(){
    window.location.reload();
}