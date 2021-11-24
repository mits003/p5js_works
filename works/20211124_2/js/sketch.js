// カラーパレット
let cp1 = ['#81b214', '#ffcc29', '#f58634'];
let cp2 = ['#e24507', '#a22e8a', '#f3c800'];
let cp3 = ['#f1bd4c', '#a43121', '#dc5f45'];
let cp4 = ['#45996c', '#006b56', '#154228'];
let colorPalette = [cp1, cp2, cp3, cp4];
let colors;

let pointer;
let cross;
let box;

let count = 3;
let reps = 1000;

function setup() {
    createCanvas(600, 600);
    pointer = new Pointer;
    cross = new Cross;
    box = new Box;
    background("#f2f2f2");
    colors = random(colorPalette);
    pc = random(colors);
    cc = random(colors);
    bc = random(colors);

    translate(width/2, height/2)
    for (let j = 0; j < count; j ++){
        for (let i = 0; i < reps; i ++){
            stroke(colors[j])
            pointer.step();
            pointer.render();
            
            stroke(colors[j])
            cross.step();
            cross.render();
        }
    }
}

class Pointer {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    render() {
    strokeWeight(3)
    point(this.x, this.y);
    }

    step() {
    var choice = floor(random(4));
    if (choice === 0) {
        this.x = this.x + 20;
        this.y = this.y + 20;
    } else if (choice == 1) {
        this.x = this.x - 20;
        this.y = this.y + 20;
    } else if (choice == 2) {
        this.x = this.x + 20;
        this.y = this.y - 20;
    } else{
        this.x = this.x - 20;
        this.y = this.y - 20;
    }
        this.x = constrain(this.x, -width/2.5, width/2.5);
        this.y = constrain(this.y, -width/2.5, width/2.5);
    }
}

class Cross {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    render() {
    strokeWeight(1)
    line(this.x - 5, this.y - 5, this.x + 5, this.y + 5)
    line(this.x - 5, this.y + 5, this.x + 5, this.y - 5)
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
    this.x = constrain(this.x, -width/2.5, width/2.5);
    this.y = constrain(this.y, -width/2.5, width/2.5);
    }
}


function mouseClicked(){
    window.location.reload();
}