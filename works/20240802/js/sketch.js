let seed = 2550;
let rSeed;

let start = 100;

let rep = 150;

function setup() {
  // キャンバスサイズの設定
  let canvas = createCanvas(600, 600);

  angleMode(DEGREES);

  noiseDetail(2, 1);

  rSeed = int(random(seed));
  console.log(rSeed);
  randomSeed(rSeed);
  noiseSeed(rSeed);

  background(30);

  translate(width / 2, height / 2);

  let c = floor(random(6));
  console.log(c);

  let space = 1;
  for (let j = 0; j < rep; j++) {
    push();
    translate(random(-width / 2, width / 2), random(-height / 2, height / 2));
    for (let i = 0; i < 10; i++) {
      let xoff = map(cos(i) + j, -1, 1, 0, 3);
      let yoff = map(sin(i) + j, -1, 1, 0, 3);

      let n = noise(xoff + start, yoff + start);
      let h = map(n, 0, 1, -100, 100);

      let r, g, b;

      if (c == 0) {
        // blue and purple base
        r = map(sin(i), -1, 1, 100, 255);
        g = map(h, -100, 100, 0, 150);
        b = map(n, 0, 1, 100, 200);
      } else if (c == 1) {
        // yellow and red base
        r = map(sin(i), -1, 1, 100, 255);
        b = map(h, -100, 100, 0, 150);
        g = map(n, 0, 1, 100, 200);
      } else if (c == 2) {
        // yellow and red base
        g = map(sin(i), -1, 1, 100, 255);
        b = map(h, -100, 100, 0, 150);
        r = map(n, 0, 1, 100, 200);
      } else if (c == 3) {
        // yellow and red base
        g = map(sin(i), -1, 1, 100, 255);
        r = map(h, -100, 100, 0, 150);
        b = map(n, 0, 1, 100, 200);
      } else if (c == 4) {
        // pink and yello base
        b = map(sin(i), -1, 1, 100, 255);
        g = map(h, -100, 100, 0, 150);
        r = map(n, 0, 1, 100, 200);
      } else if (c == 5) {
        // pink and yello base
        b = map(sin(i), -1, 1, 100, 255);
        r = map(h, -100, 100, 0, 150);
        g = map(n, 0, 1, 100, 200);
      }
      for (let k = 0; k < 360; k += space) {
        rotate(space);
        noStroke();
        fill(r, g, b, 30);
        rect(0, 0, h, 1);
      }
    }
    pop();
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
