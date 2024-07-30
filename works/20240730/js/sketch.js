// カラーパレット
let cp1 = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let cp2 = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"];
let cp3 = ["#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"];
let cp4 = ["#a31621", "#bfdbf7", "#053c5e", "#1f7a8c", "#db222a"];
let colorPalette = [cp1, cp2, cp3, cp4];

let seed = 2000;
let rSeed;

let start = 100;

function setup() {
  // キャンバスサイズの設定
  let canvas = createCanvas(600, 600);

  angleMode(DEGREES);

  noiseDetail(2, 1);

  rSeed = int(random(seed));
  console.log(rSeed);
  randomSeed(rSeed);
  noiseSeed(rSeed);
  let colors = random(colorPalette);
}

function draw() {
  background(30);
  noStroke();

  translate(width / 2, height / 2);

  let space = 0.1;
  for (let i = 0; i < 360; i += space) {
    let xoff = map(cos(i), -1, 1, 0, 3);
    let yoff = map(sin(i), -1, 1, 0, 3);

    let n = noise(xoff + start, yoff + start);
    let h = map(n, 0, 1, -300, 300);

    // blue and purple base
    // let r = map(sin(i), -1, 1, 100, 200);
    // let g = map(h, -150, 150, 0, 150);
    // let b = map(n, 0, 1, 150, 255);

    // pink and yello base
    // let b = map(sin(i), -1, 1, 100, 200);
    // let g = map(h, -150, 150, 0, 150);
    // let r = map(n, 0, 1, 150, 255);

    // yellow and red base
    // let g = map(sin(i), -1, 1, 100, 200);
    // let b = map(h, -150, 150, 0, 150);
    // let r = map(n, 0, 1, 150, 255);

    // yellow and red base
    let g = map(sin(i), -1, 1, 100, 200);
    let r = map(h, -150, 150, 0, 150);
    let b = map(n, 0, 1, 150, 255);

    rotate(space);
    fill(r, g, b);
    rect(0, 0, h, 1);
  }

  // start += 0.01
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
