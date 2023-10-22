// カラーパレット
let cp1 = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let cp2 = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"];
let cp3 = ["#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"];
let cp4 = ["#a31621", "#bfdbf7", "#053c5e", "#1f7a8c", "#db222a"];
let colorPalletes = [cp1, cp2, cp3, cp4];
let colors;

let seed = 2000;
let rSeed;

// let cr = 100;
let r = 30;
let sW = 5;
let x, y;

function setup() {
  WIDTH = 600;
  HEIGHT = WIDTH;
  let canvas = createCanvas(WIDTH, HEIGHT);
  //   colors = random(colorPalletes);
  colors = random(colorPalletes);
  angleMode(DEGREES);
  rSeed = int(random(seed));
  console.log(rSeed);
  randomSeed(rSeed);
  noiseSeed(rSeed);

  translate(width / 2, height / 2);

  background("#f7f7f7");

  let flw_num = 6;
  let petals_num = random(4, 15);

  let shiftX = random(-1, 1) * 10;
  let shiftY = random() * 10;
  console.log(shiftX);
  console.log(shiftY);
  let cr = random(80, 120);
  let arc = random([60, 120, 180, 240, 360]);
  for (let i = flw_num; i > 0; i--) {
    let c = random(colors);
    push();
    rotate(((i + 1) * 360) / flw_num);
    translate(shiftX, shiftY * 10);
    for (let j = 0; j < petals_num; j++) {
      noStroke();
      fill(c);
      x = cr * cos((j * 360) / petals_num);
      y = cr * sin((j * 360) / petals_num);

      if (random() < 0.4) {
        stroke("#5a5a5a");
      } else {
        stroke(c);
      }
      for (let a = 0; a < arc; a++) {
        if (
          noise(a * 0.25) + random(sW / 3, (sW / 3) * 2) / 2 <
          sW / 6 + 0.85
        ) {
          strokeWeight(0);
        } else {
          strokeWeight(noise(a * 0.25) + random(sW / 3, (sW / 3) * 2) / 2);
        }
        line(
          cos(a) * cr + x,
          sin(a) * cr + y,
          cos(a + 1) * cr + x,
          sin(a + 1) * cr + y
        );
        line(
          cos(a) * (cr - 10) + x,
          sin(a) * (cr - 10) + y,
          cos(a + 1) * (cr - 10) + x,
          sin(a + 1) * (cr - 10) + y
        );
      }
    }
    pop();
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
