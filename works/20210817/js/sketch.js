// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

let circles;

function setup() {
  createCanvas(640, 360);
  circles = [];
}

function draw() {
  background(0);
  frameRate(20);

  let total = 5;
  let count = 0;
  let attempts = 0;

  while (count < total) {
    let newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 100) {
      noLoop();
      console.log('finished');
      break;
    }
  }

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (let j = 0; j < circles.length; j++) {
          let other = circles[j];
          if (circle !== other) {
            let d = dist(circle.x, circle.y, other.x, other.y);
            let distance = circle.r + other.r;

            if (d - 2 < distance) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.show();
    circle.grow();
  }
}

function newCircle() {
  let x = random(width);
  let y = random(height);
  let valid = true;
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    let d = dist(x, y, circle.x, circle.y);
    if (d < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
}

function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png')
}