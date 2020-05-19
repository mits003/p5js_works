"use strict"

let walker;

function setup() {
  createCanvas(640, 360);
  walker = new Walker;
  background("#d7de8a");
}

function draw() {
  walker.step();
  walker.render();
}

class Walker {
  constructor() {
    this.x = width/2;
    this.y = height/2;
  }

  render() {
    stroke("#02983b");
    strokeWeight(floor(random(8)))
    point(this.x, this.y);
  }

  step() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x = this.x + 10;
      this.y = this.y + 10;
    } else if (choice == 1) {
      this.x = this.x - 10;
      this.y = this.y + 10;
    } else if (choice == 2) {
      this.x = this.x + 10;
      this.y = this.y - 10;
    } else{
      this.x = this.x - 10;
      this.y = this.y - 10;
    }
    // strict the range of x and y between 0 to extent of the canvas
    this.x = constrain(this.x, 0, width-1);
    this.y = constrain(this.y, 0, height-1);
  }
}