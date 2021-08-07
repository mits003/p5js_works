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

function setup() {
    // createCanvas(600, 600);
    createCanvas(2400, 600);
    noLoop();
    angleMode(DEGREES);
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
}

function draw() {
    background('#E7ECF2');
    noFill();

    let seed = random(100);
    for (let j = 0; j < 10; j++) {
        noiseSeed(j * 1000 + seed);
        for (let i = 0; i < 12; i++) {
            beginShape();
            stroke(random(colors));
            strokeWeight(3)
            for (let x = 0; x <= width; x++) {
                let y = map(noise(x * 0.0015, i * 0.02), 0, 1, 0, height);
                vertex(x, y);
            }
            endShape();
        }
    }
}

