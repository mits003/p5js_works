// カラーパレット
let cp = ["#8ecae6", "#ffb703"];

let seed = 2000;
let rSeed;
let scalar = 300;

let pattern;
let shape;

// let cellsNum = 6;
let cellsNum = 12;

function setup() {
  // キャンバスサイズの設定
  let canvas = createCanvas(5587, 5587);
  pixelDensity(2);

  // 背景色を指定
  background("#f7f7f7");

  rSeed = int(random(seed));
  console.log(rSeed);
  randomSeed(rSeed);
  noiseSeed(rSeed);
  let colors = cp;

  pattern = createGraphics(width, height);
  shape = createGraphics(width, height);

  pattern.noStroke();
  pattern.fill(cp[0]);
  pattern.ellipse(0, 0, width / cellsNum);
  pattern.fill(cp[1]);
  pattern.ellipse(width / cellsNum, height / cellsNum, width / cellsNum);
  pattern.fill(random(colors));
  shape.triangle(
    0,
    0,
    width / cellsNum,
    height / cellsNum - 1,
    0,
    width / cellsNum
  );
  pattern = pattern.get();
  pattern.mask(shape);

  noLoop();
}

function draw() {
  for (let i = -1; i < cellsNum + 1; i += 1) {
    for (let j = -1; j < cellsNum + 1; j += 1) {
      if (i % 2 == 0) {
        image(pattern, (width / cellsNum) * i, (width / cellsNum) * j);
        push();
        translate((width / cellsNum) * (i + 1), (width / cellsNum) * (j + 1));
        // translate((height / cellsNum) * (i + 1), (height / cellsNum) * (j + 1));
        rotate(PI);
        image(pattern, 0, 0);
        pop();
      } else {
        push();
        translate((width / cellsNum) * (i + 1), (width / cellsNum) * (j + 1));
        rotate(HALF_PI);
        image(pattern, 0, 0);
        // translate(-width / cellsNum, -width / cellsNum);
        translate(-height / cellsNum, -height / cellsNum);
        rotate(PI);
        image(pattern, 0, 0);
        pop();
      }
    }
  }
  var scripts = document.getElementsByTagName("sketch").src;
  console.log(scripts);
  saveCanvas(canvas, "image_" + rSeed, "png");
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
