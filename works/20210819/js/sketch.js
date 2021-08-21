let BASE_S = 10;
let BASE_B = 100;

function setup(){
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 1.0);
  let BASE_H = random(0, 360);
  background(BASE_H, BASE_S, BASE_B);
  texturize(BASE_H, 30000);
}

function texturize(base_h, density){
  for(let i = 0; i < density; i++) {
    stroke(20,
      BASE_S - random(-5, 8),
      BASE_B - random(8),
      random(75, 85));

    let x1 = random(width);
    let y1 = random(height);
    let theta = random(TWO_PI);
    let segmentLength = random(2, 7);
    let x2 = cos(theta) * segmentLength + x1;
    let y2 = sin(theta) * segmentLength + y1;

    line(x1, y1, x2, y2);
  }
}

function mouseClicked(){
  saveCanvas(canvas, 'myCanvas', 'png')
}