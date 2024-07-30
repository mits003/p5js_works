// カラーパレット
let cp1 = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let cp2 = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"];
let cp3 = ["#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"];
let cp4 = ["#a31621", "#bfdbf7", "#053c5e", "#1f7a8c", "#db222a"];
let colorPalette = [cp1, cp2, cp3, cp4];

let seed = 3000;
let rSeed;

function setup() {
  // キャンバスサイズの設定
  let canvas = createCanvas(windowWidth, windowHeight);
  let colors = random(colorPalette);
  let bg = random(colors);
  background(bg);

  rSeed = int(random(seed));
  console.log(rSeed);
  randomSeed(rSeed);
  noiseSeed(rSeed);
  angleMode(DEGREES);

  noStroke();
  for (let i = 0; i < 10; i++) {
    fill(random(colors));
    ellipse(width / 2, height / 2, random(200, min(windowHeight, windowWidth)));
  }

  strokeWeight(1);
  stroke(bg);

  // 格子模様
  let n = 100;
  let w = width / n;
  let a = 120;
  for (let j = -n; j <= n; j++) {
    let sx = w * j;
    let sy = 0;
    let ex = width + w * j;
    let ey = height * sin(60);
    line(sx, sy, ex, ey);
  }
  for (let j = -n; j <= n; j++) {
    let sx = width + w * j;
    let sy = 0;
    let ex = w * j;
    let ey = height * sin(60);
    line(sx, sy, ex, ey);
  }
}

function mouseClicked() {
  window.location.reload();
}

function keyPressed() {
  if (key == "s") {
    var scripts = document.getElementsByTagName("sketch").src;
    console.log(scripts);
    // saveCanvas(canvas, 'image_'+rSeed, 'svg');
    save("image_" + rSeed + ".svg");
  }
  if (key == "p") {
    var scripts = document.getElementsByTagName("sketch").src;
    console.log(scripts);
    save("image_" + rSeed + ".png");
  }
}
