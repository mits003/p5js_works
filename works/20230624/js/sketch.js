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
  let canvas = createCanvas(758, 1102, SVG);
  // let canvas = createCanvas(1515, 2204);
  // background('#ffffff');

  rSeed = int(random(seed));
  // rSeed = 2976;
  console.log(rSeed);
  randomSeed(rSeed);
  noiseSeed(rSeed);
  // let colors = random(colorPalette);
  let colors = cp1;
  angleMode(DEGREES);

  drawingContext.save();

  ellipse((width / 5) * 4, (width / 5) * 1, height / 7);
  drawingContext.clip();
  // fill(random(colors));
  fill(colors[2]);
  rect(0, 0, width, height);
  noStroke();
  for (let i = 0; i < 20; i++) {
    fill(random(colors));
    ellipse(random(width), random(height), random(100, 200));
  }

  drawingContext.restore();

  push();
  translate(width / 2, height / 3);
  rotate(30);

  strokeWeight(2);

  let w = width / 45;
  let lines = floor(random(9, 12));
  for (let j = 0; j < lines; j++) {
    stroke(random(colors));
    let sx = 0;
    let sy = 0;
    let reps = 160;
    let mx = 0;
    let my = 0;
    for (let i = 0; i < reps; i++) {
      // let length = floor(randomGaussian(1, random(1, 4)))*w;
      let length = floor(randomGaussian(1, 2)) * w;
      // 擬似平面方向にのみ移動を規制する
      let bent1 = floor(random(2));
      let bent2 = bent1 + random([60, 120]);
      mx = sx + length * cos(120 * bent1);
      my = sy + length * sin(120 * bent1);
      ex = mx + length * cos(120 * bent2);
      ey = my + length * sin(120 * bent2);
      line(sx, sy, mx, my);
      sx = mx;
      sy = my;
    }
  }

  pop();

  // save('image_'+rSeed, 'svg');
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
    save("image_" + rSeed+ ".png");
  }
}
