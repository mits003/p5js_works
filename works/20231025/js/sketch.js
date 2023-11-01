// カラーパレット
let cp1 = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let cp2 = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"];
let cp3 = ["#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"];
let cp4 = ["#a31621", "#bfdbf7", "#053c5e", "#1f7a8c", "#db222a"];
let colorPalletes = [cp1, cp2, cp3, cp4];
let colors;

let seed = 2000;
let rSeed;

let cr;
let sW;
let x, y;

// let cells_in = 12;
// let cells_out = cells_in + 1;
// let figuresNum = cells_in ** 2 + cells_out ** 2;
let figures = [];

function setup() {
  WIDTH = 600;
  HEIGHT = WIDTH;
  let canvas = createCanvas(WIDTH, HEIGHT);
  background("#f7f7f7");
  colors = random(colorPalletes);
  angleMode(DEGREES);
  rSeed = int(random(seed));
  randomSeed(rSeed);
  // noiseSeed(rSeed);

  sW = 5;

  // let cells_in = floor(random(3, 10)) + 1;
  let cells_in = 12;
  let cells_out = cells_in + 1;
  let figuresNum = (cells_in + 1) ** 2 + (cells_out + 1) ** 2;

  let offset = width;

  let w = (width - offset * 2) / cells_out;
  let h = (height - offset * 2) / cells_out;

  cr = -w / 2;

  for (let i = 0; i < figuresNum; i++) {
    figures.push(new Figure());
  }

  let num = 0;
  for (let j = -1; j < cells_out; j++) {
    for (let i = -1; i < cells_out; i++) {
      let x = offset + i * w;
      let y = offset + j * h;
      let cx = x + w;
      let cy = y + h;
      push();
      translate(cx, cy);
      figures[num].render();
      num += 1;
      pop();
    }
  }
  for (let j = -1; j < cells_in; j++) {
    for (let i = -1; i < cells_in; i++) {
      let x = offset + i * w;
      let y = offset + j * h;
      let cx = x + w;
      let cy = y + h;
      push();
      translate(cx + w / 2, cy + h / 2);
      figures[num].render();
      num += 1;
      pop();
    }
  }
}

class Figure {
  render() {
    noFill();
    let a = random();
    let c = random(colors);
    stroke(c);
    for (let i = 0; i < cr; i += cr / sW / 10) {
      for (let a = 0; a < 360; a++) {
        if (
          noise(a * 0.25) + random(sW / 3, (sW / 3) * 2) / 2 <
          sW / 6 + 0.85
        ) {
          strokeWeight(0);
        } else {
          strokeWeight(noise(a * 0.25) + random(sW / 3, (sW / 3) * 2) / 2);
        }
        line(
          cos(a) * (cr - i),
          sin(a) * (cr - i),
          cos(a + 1) * (cr - i),
          sin(a + 1) * (cr - i)
        );
      }
    }
  }
}

function mouseClicked() {
  // saveCanvas(canvas, 'myCanvas', 'png');
  window.location.reload();
}

function keyPressed() {
  if (key == "s") {
    var scripts = document.getElementsByTagName("sketch").src;
    console.log(scripts);
    saveCanvas(canvas, "image_" + rSeed, "png");
  }
}
