// カラーパレット
let cp1 = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let cp2 = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"];
let cp3 = ["#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"];
let cp4 = ["#a31621", "#bfdbf7", "#053c5e", "#1f7a8c", "#db222a"];
let colorPalette = [cp1, cp2, cp3, cp4];

let seed = 2000;
let rSeed;

let offset = 1;
let sW = 5;
// let r = 120;

function setup() {
  // キャンバスサイズの設定
  let canvas = createCanvas(600, 600);

  // 背景色を指定
  background("#f7f7f7");

  angleMode(DEGREES);
  rSeed = int(random(seed));
  console.log(rSeed);
  randomSeed(rSeed);
  noiseSeed(rSeed);
  let colors = random(colorPalette);

  translate(width / 3, height / 3);

  stroke("#5a5a5a");

  for (let x = 0; x <= width / 2; x += 1) {
    for (let y = 0; y <= height / 2; y += height / 25) {
      if (
        noise(x * 0.25, y / 0.02) + random(sW / 3, (sW / 3) * 2) / 2 <
        sW / 3 / 2 + 0.85
      ) {
        strokeWeight(0);
      } else {
        strokeWeight(noise(x * 0.25, y * 2) + random(sW / 3, (sW / 3) * 2) / 2);
      }
      line(x, y, x + 1, y);
    }
  }

  for (let i = 0; i < 8; i++) {
    noStroke();
    fill(random(colors));
    let x = randomGaussian(0, width / 3 / 2);
    let y = randomGaussian(0, height / 3 / 2);
    let r = randomGaussian(30, 10);
    circle(x, y, r * 2 - 3);
    stroke("#5a5a5a");
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
        cos(a) * r + x,
        sin(a) * r + y,
        cos(a + 1) * r + x,
        sin(a + 1) * r + y
      );
    }
  }
}

function mouseClicked() {
  window.location.reload();
}

function keyPressed() {
  if (key == "s") {
    var scripts = document.getElementsByTagName("sketch").src;
    console.log(scripts);
    saveCanvas(canvas, "image_" + rSeed, "png");
  }
}
