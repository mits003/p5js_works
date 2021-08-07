// カラーパレット
let colors1 = ['#FF9900','#FDA003','#FAA705','#F8AF08','#F6B60B','#F3BD0E','#F1C410','#EECB13','#ECD216','#EADA19','#E7E11B','#E5E81E'];
let colors2 = ['#ee59ae','#d95fbe','#c065cb','#a26cd5','#7f72da','#617cdf','#3e85df','#008cdc','#0098d6','#00a1c8','#00a7b6','#22aca3'];
let colors3 = ['#E1EAF2','#D4DEE7','#C8D2DD','#BBC5D2','#AEB9C8','#A1ADBD','#95A1B3','#8895A8','#7B899E','#6E7C93','#627089','#55647E'];
let colors4 = ['#BCD0C7','#ACC6BE','#9CBCB4','#8CB2AB','#7CA8A2','#6C9E99','#5C938F','#4C8986','#3C7F7D','#2C7574','#1C6B6A','#0C6161'];

let bgColors = ['#F3E2E2', '#FFFBE6', '#E7ECF2'];
let colors = [colors1, colors2, colors3, colors4];
function setup() {
    createCanvas(600, 600);
    noLoop();
    angleMode(DEGREES);
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 300);
}

function draw() {
    let bgColor = random(bgColors);
    let colorPalette = random(colors);
    background(bgColor);
    noFill();
    let seed = random(100);
    for (let j = 0; j < 10; j++) {
        noiseSeed(j * 1000 + seed);
        for (let i = 0; i < colorPalette.length; i++) {
            beginShape();
            stroke(colorPalette[i]);
            strokeWeight(2);
            for (let x = 0; x <= width; x++) {
                let y = map(noise(x * 0.0015, i * 0.02), 0, 1, 0, height);
                vertex(x, y);
            }
            endShape();
        }
    }
    blendMode(MULTIPLY);
    fill(bgColor);
    noStroke();
    triangle(0, 0, 0, height, width/2, height/2)
    triangle(width, 0, width, height,width/2, height/2)
}

