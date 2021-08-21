let cp1 = ['#003049','#d62828','#f77f00','#fcbf49','#eae2b7']
let cp2 = ['#d6d6d6','#ffee32','#ffd100','#5f2f2f','#232323']
let cp3 = ['#5f0f40','#9a031e','#fb8b24','#e36414','#0f4c5c']
let cp4 = ['#0d3b66','#faf0ca','#f4d35e','#ee964b','#f95738']
let colorPalettes = [cp1, cp2, cp3, cp4]

let BASE_S = 20;
let BASE_B = 70;

function setup(){
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 1.0);
  let BASE_H = random(0, 360);
  background(BASE_H, BASE_S, BASE_B);
  texturize(BASE_H, 30000);

  let circles = random(4, 8);
  let circlesCp = random(colorPalettes)
  let cells = 20;
  let offset = width / 15;
  let margin = 0;
  let w = (width - offset * 2 - margin * (cells - 1)) / cells;
  let h = (height - offset * 2 - margin * (cells - 1)) / cells;

  for (let i = 0; i < circles; i++){
    noStroke();
    fill(random(circlesCp));
    circle(random(offset*2, width-offset*2), random(offset*2, height-offset*2), random(40, offset*2));
  }

  stroke(BASE_H + random([-20, 20]), 50, 50, 1.0)
  for (let j = 0; j < cells; j++){
    for (let i = 0; i < cells; i++){
        let x = offset + i * (w + margin);
        let y = offset + j * (h + margin);

        let cx = x + w / 2;
        let cy = y + h / 2;

        push();
        translate(cx, cy);

        let theta = 90 * random([0, 1]);
        if (theta === 0) {
          line(0, -h/2, w/2, 0);
          line(-w/2, 0, 0, h/2);
        } else if (theta === 90) {
          line(-w/2, 0, 0, -h/2);
          line(0, h/2, h/2, 0);
        }

        pop();
    }
  }
}

function texturize(base_h, density){
  for(let i = 0; i < density; i++) {
    stroke(base_h,
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
  // saveCanvas(canvas, 'myCanvas', 'png');
  window.location.reload();
}