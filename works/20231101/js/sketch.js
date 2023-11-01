// ref https://openprocessing.org/sketch/1251771 by takawo
// ref https://openprocessing.org/sketch/1828929 by takawo
// カラーパレット
let cp1 = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let cp2 = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"];
let cp3 = ["#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"];
let cp4 = ["#a31621", "#bfdbf7", "#053c5e", "#1f7a8c", "#db222a"];
let colorPalette = [cp1, cp2, cp3, cp4];
let colors;

let seed = 2000;
let rSeed;

let sqr;

function setup() {
  // キャンバスサイズの設定
  let canvas = createCanvas(600, 600);

  rectMode(CENTER);
  // 背景色を指定
  background("#f7f7f7");

  rSeed = int(random(seed));
  console.log(rSeed);
  randomSeed(rSeed);
  noiseSeed(rSeed);
  colors = random(colorPalette);
  strokeWeight(0.1);

  // sqr = new Sqr(width, width, 0, 0, colors);

  noLoop();
}

function draw() {
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < 5; i++) {
    sqr = new Sqr(width, width, 0, 0, colors[i]);
    sqr.createChildren();
    sqr.show();
  }
  pop();
}

class Sqr {
  constructor(w, wParent, xParent, yParent, color) {
    this.w = w;
    this.wParent = wParent;
    this.xParent = xParent;
    this.yParent = yParent;

    this.x = random(-wParent / 2 + w / 2, wParent / 2 - w / 2);
    this.y = random(-wParent / 2 + w / 2, wParent / 2 - w / 2);

    this.color = color;
    this.children = [];
  }

  createChildren() {
    if (this.w > 20) {
      for (let i = 0; i < 800; i++) {
        // let color = random(colors);
        let sqr = new Sqr(
          this.w * random(0.1, 0.5),
          this.w,
          this.x,
          this.y,
          this.color,
          this.layer + 1
        );

        if (i == 0) {
          this.children.push(sqr);
        } else {
          for (let j = 0; j < this.children.length; j++) {
            if (
              abs(sqr.x - this.children[j].x) <
                sqr.w / 2 + this.children[j].w / 2 &&
              abs(sqr.y - this.children[j].y) <
                sqr.w / 2 + this.children[j].w / 2
            ) {
              break;
            } else if (j === this.children.length - 1) {
              this.children.push(sqr);
            }
          }
        }
      }
    }
  }
  show() {
    stroke(this.color);

    noFill();
    rect(this.x, this.y, this.w, this.w, this.w / 20);
    for (let i = 0; i < this.children.length; i++) {
      push();
      translate(this.xParent, this.yParent);
      this.children[i].createChildren();
      this.children[i].show();
      pop();
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
