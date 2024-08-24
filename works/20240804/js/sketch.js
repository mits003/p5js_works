let seed = 2000;
let rSeed;
let c;

let start = 0;

let rep = 10;

function setup() {
  // キャンバスサイズの設定
  let canvas = createCanvas(600, 600);

  angleMode(DEGREES);

  noiseDetail(2, 1);

  rSeed = int(random(seed));
  // console.log(rSeed);
  randomSeed(rSeed);
  noiseSeed(rSeed);

  frameRate(30);
}

function draw() {
  background("#ffffff");
  translate(width / 2, height / 2);
  let space = 0.1;
  for (let j = 0; j < rep / 2; j++) {
    for (let i = 0; i < 360; i += space) {
      let xoff = map(cos(i) + j + 1, -1, 1, 0, 3);
      let yoff = map(sin(i) + j, -1, 1, 0, 3);

      let n = noise(xoff + start, yoff + start);
      let h = map(n, 0, 1, -300, 300);

      rotate(space);
      stroke("#9AA8AAAA");
      point(h, 1);
    }
  }

  // c = floor(random(6));
  // console.log(c);

  for (let j = 0; j < rep; j++) {
    for (let i = 0; i < 360; i += space) {
      let xoff = map(cos(i) + j, -1, 1, 0, 3);
      let yoff = map(sin(i) + j, -1, 1, 0, 3);

      let n = noise(xoff + start, yoff + start);
      let h = map(n, 0, 1, -300, 300);

      let r, g, b;

      if (c == 0) {
        // purple base, blue accent
        r = map(sin(i), -1, 1, 100, 200);
        g = map(h, -150, 150, 0, 150);
        b = map(n, 0, 1, 150, 255);
      } else if (c == 1) {
        // green yellow base, blue and yellow accent
        r = map(sin(i), -1, 1, 100, 200);
        b = map(h, -150, 150, 0, 150);
        g = map(n, 0, 1, 150, 255);
      } else if (c == 2) {
        // pink rawon base, green yellow accent
        g = map(sin(i), -1, 1, 100, 200);
        b = map(h, -150, 150, 0, 150);
        r = map(n, 0, 1, 150, 255);
      } else if (c == 3) {
        // blue base, purple accent
        g = map(sin(i), -1, 1, 100, 200);
        r = map(h, -150, 150, 0, 150);
        b = map(n, 0, 1, 150, 255);
      } else if (c == 4) {
        // pink and red base, yellow accent
        b = map(sin(i), -1, 1, 100, 200);
        g = map(h, -150, 150, 0, 150);
        r = map(n, 0, 1, 150, 255);
      } else if (c == 5) {
        // green base, blue and yellow accent
        b = map(sin(i), -1, 1, 100, 200);
        r = map(h, -150, 150, 0, 150);
        g = map(n, 0, 1, 150, 255);
      }
      c = 4;
      rotate(space);
      noStroke();
      fill(r, g, b, 30);
      rect(0, 0, h, 1);
    }
  }
  start += 0.0025;
}

function mouseClicked() {
  window.location.reload();
}
