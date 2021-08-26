function setup(){
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 1.0);
    let BASE_H = random(0, 360);

    noStroke();
    fill(BASE_H, 25, 65, 1.0);
    rect(0, 0, width/2, height/2); // spring

    fill(BASE_H, 35, 75, 1.0);
    rect(width/2, 0, width, height/2); // summer

    fill(BASE_H, 30, 40, 1.0);
    rect(0, height/2, width/2, height); // fall

    fill(BASE_H, 15, 80, 1.0);
    rect(width/2, height/2, width, height); // winter

}


function texturize(base_h, density){
    for(let i = 0; i < density; i++) {
        stroke(base_h,
            BASE_S - random(-5, 8),
            BASE_B - random(8),
            random(75, 85));

        let x1 = random(width);
        let y1 = random(height);
        let theta = random(360);
        let segmentLength = random(2, 7);
        let x2 = cos(theta) * segmentLength + x1;
        let y2 = sin(theta) * segmentLength + y1;

        line(x1, y1, x2, y2);
    }
}

function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}