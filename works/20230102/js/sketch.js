let rv;
let rh;

function setup() {
    // output gif
    // createLoop({duration:6, gif:true});
    frameRate(60);
    createCanvas(600, 600);
    angleMode(DEGREES);

    background('#000');
    fill('#fff');
    
    rv = random(height/3, height/2-50);
    rh = random(width/3, width/2-50);
    
}

function draw(){
    background('#000');
    translate(width/2, height/2);
    let x = rv*cos(frameCount%360);
    let y = rh*sin(2*frameCount%360);

    ellipse(x, y, 120*sin(frameCount));
}

function mouseClicked(){
    window.location.reload();
}

function keyPressed(){
    if (key == 's') {
        saveCanvas(canvas, 'image0', 'png')
    }
}
