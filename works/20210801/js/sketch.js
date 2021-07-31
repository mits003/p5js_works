// カラーパレット
let colors = ['#06AED5', '#086788', '#F0C808', '#E77211', '#DD1C1A'];
let colors2 = [
    '#ee59ae',
    '#d95fbe',
    '#c065cb',
    '#a26cd5',
    '#7f72da',
    '#617cdf',
    '#3e85df',
    '#008cdc',
    '#0098d6',
    '#00a1c8',
    '#00a7b6',
    '#22aca3',
];

let cylinders = [];
let cells = 3;
let cylinderNum = cells * cells;
function setup() {
    createCanvas(600, 600, WEBGL);

    angleMode(DEGREES);
    noLoop();
    background("#E3E3C7");
    for (let i = 0; i < cylinderNum; i++) {
        cylinders.push(new Cylinder());
    }
    lights();

    let offset = width / 6;
    let margin = offset / 5;
    let w = (width - offset * 2 - margin * (cells - 1)) / cells;

    let h = (height - offset * 2 - margin * (cells - 1)) / cells;
    stroke(255);
    push();
    translate(-width / 2, -height / 2);

    for (let j = 0; j < cells + 1; j++) {
        for (let i = 0; i < cells + 1; i++) {
            let x = offset + i * (w + margin);
            let y = offset + j * (h + margin);
            strokeWeight(10);

            push();
            translate(x, y);
            rotateX(random(360));
            rotateY(random(360));
            rotateZ(random(360));
            cylinders[floor(random(cylinderNum))].render();

            pop();
        }
    }

    for (let j = 0; j < cells; j++) {
        for (let i = 0; i < cells; i++) {
            let x = offset + i * (w + margin);
            let y = offset + j * (h + margin);
            strokeWeight(10);
            point(x, y);
            let cx = x + w / 2;
            let cy = y + h / 2;
            // point(cx, cy)

            push();
            translate(cx, cy);
            fill(random(colors));
            rotateX(random(360));
            rotateY(random(360));
            rotateZ(random(360));
            cylinders[floor(random(cylinderNum))].render();
            pop();
        }
    }

    pop();
        // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
    }


class Cylinder {
    constructor() {
        this.cylinderRadius = 30;
        this.cylinderHeight = this.cylinderRadius / 2;
        this.cylinderDetailX = random([3, 5, 8]);
        this.cylinderDetailY = 1;
        this.fillColor = random(colors);
        this.strokeWeight = 3;
        this.t = 0;
        this.tStep = 1;
    }

    render() {
        noStroke();
        fill(this.fillColor);
        cylinder(
            this.cylinderRadius,
            this.cylinderHeight,
            this.cylinderDetailX,
            this.cylinderDetailY
        );
    }
}
