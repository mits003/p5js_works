// VSCode Creative Coding with p5.js in Visual Studio Code
// https://www.youtube.com/live/1h6vZl-OuB0?si=moR14XjHiTsRGcNn

// カラーパレット
let cp1 = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let cp2 = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"];
let cp3 = ["#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"];
let cp4 = ["#a31621", "#bfdbf7", "#053c5e", "#1f7a8c", "#db222a"];
let colorPalette = [cp1, cp2, cp3, cp4];

let seed = 2000;
let rSeed;

let stars = [];
let factor = 100;
let speedSlider;

function setup() {
  // キャンバスサイズの設定
  let canvas = createCanvas(600, 600);
  speedSlider = createSlider(0, 20, 2, 0.1);

  for (let i = 0; i < 500; i++) {
    stars[i] = createVector(
      random(-width * 2, width * 2),
      random(-height * 2, height * 2),
      random(width)
    );
    stars[i].pz = stars[i].z;
  }

  rSeed = int(random(seed));
  console.log(rSeed);
  randomSeed(rSeed);
  noiseSeed(rSeed);
  let colors = random(colorPalette);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let star of stars) {
    let x = star.x / star.z;
    let y = star.y / star.z;
    let px = star.x / star.pz;
    let py = star.y / star.pz;
    let d = map(star.z, 0, width, 5, 3);
    fill(255);
    noStroke();

    circle(x, y, d);
    stroke(255);
    line(x, y, px, py);
    star.pz = star.z;
    star.z -= speedSlider.value();
    if (star.z < 1) {
      star.x = random(-width * factor, width * factor);
      star.y = random(-height * factor, height * factor);
      star.z = 400;
      star.pz = 400;
    }
  }
}

function keyPressed() {
  if (key == "s") {
    var scripts = document.getElementsByTagName("sketch").src;
    console.log(scripts);
    saveCanvas(canvas, "image_" + rSeed, "png");
  }
}
