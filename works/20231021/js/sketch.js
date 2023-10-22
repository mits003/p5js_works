// カラーパレット
let cp1 = ["#4158D0", "#C850C0", "#FFCC70"];
let cp2 = ["#0c0a3e", "#7b1e7a", "#b33f62", "#f9564f", "#f3c677"];
let cp3 = ["#042a2b", "#5eb1bf", "#cdedf6", "#ef7b45", "#d84727"];
let colorPalletes = [cp1, cp2, cp3];
let colors;

let seed = 2000;
let rSeed;

let cr = 120;
let r = 30;
let sW = 5;

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
  let petals_num = 5;

  for (let i = flw_num; i > 0; i--) {
    let c = random(colors);
    push();
    rotate(((i + 1) * 360) / flw_num);
    for (let j = 0; j < petals_num; j++) {
      noStroke();
      fill(c);
      let x = cr * cos((j * 360) / petals_num);
      let y = cr * sin((j * 360) / petals_num);

      if (random() < 0.8) {
        stroke("#5a5a5a");
      } else {
        stroke(c);
      }
      for (let a = 0; a < 360; a++) {
        if (
          noise(a * 0.25) + random(sW / 3, (sW / 3) * 2) / 2 <
          sW / 3 / 2 + 0.85
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
