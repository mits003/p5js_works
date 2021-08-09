// color palettes
let colors1 = ['#FF9900','#FF9900','#FDA003','#FDA003','#FAA705','#FAA705','#F8AF08','#F8AF08','#F6B60B','#F6B60B','#F3BD0E','#F3BD0E','#F1C410','#F1C410','#EECB13','#EECB13','#ECD216','#ECD216','#EADA19','#EADA19','#E7E11B','#E7E11B','#E5E81E','#E5E81E'];
let colors2 = ['#ee59ae','#ee59ae','#d95fbe','#d95fbe','#c065cb','#c065cb','#a26cd5','#a26cd5','#7f72da','#7f72da','#617cdf','#617cdf','#3e85df','#3e85df','#008cdc','#008cdc','#0098d6','#0098d6','#00a1c8','#00a1c8','#00a7b6','#00a7b6','#22aca3','#22aca3'];
let colors3 = ['#E1EAF2','#E1EAF2','#D4DEE7','#D4DEE7','#C8D2DD','#C8D2DD','#BBC5D2','#BBC5D2','#AEB9C8','#AEB9C8','#A1ADBD','#A1ADBD','#95A1B3','#95A1B3','#8895A8','#8895A8','#7B899E','#7B899E','#6E7C93','#6E7C93','#627089','#627089','#55647E','#55647E'];
let colors4 = ['#BCD0C7','#BCD0C7','#ACC6BE','#ACC6BE','#9CBCB4','#9CBCB4','#8CB2AB','#8CB2AB','#7CA8A2','#7CA8A2','#6C9E99','#6C9E99','#5C938F','#5C938F','#4C8986','#4C8986','#3C7F7D','#3C7F7D','#2C7574','#2C7574','#1C6B6A','#1C6B6A','#0C6161','#0C6161'];
let colors = [colors1, colors2, colors3, colors4];

let points = [];
let inc = 0.03;
let mult = 0.003;
let cols, rows;

let bgColors = ['#f0eff4', '#edf6f9', '#E7F4B9']
function setup() {
    let canvas = createCanvas(600, 600);
    noiseDetail(1);
    background(random(bgColors));

    let left_x = int(-width * 0.5);
    let right_x = int(width * 1.5);
    let top_y = int(-height * 0.5);
    let bottom_y = int(height * 1.5);

    let resolution = int(width * 0.03) 
    cols = floor((right_x - left_x) / resolution);
    rows = floor((bottom_y - top_y) / resolution);

    for (let col = 0; col < cols; col++) {
        let points_row = []
        for (let row = 0; row < rows; row++) {
            let scaled_x = col * 0.1
            let scaled_y = row * 0.1
            let noise_val = noise(scaled_x, scaled_y)
            let angle = map(noise_val, -1, 1, -PI, PI)
            let p = p5.Vector.fromAngle(angle);
            p.setMag(0.2);
            points_row.push(p);
            // push();
            // translate(col * resolution, row * resolution);
            // line(0, 0, p.x * 100, p.y * 100);
            // pop()
        }
        points.push(points_row)
    }

    let step_length = 30;
    let steps = 24;
    let lines_num = 800;
    noFill();
    strokeWeight(3);
    c = random(colors);
    for (j = 0; j < lines_num; j++){
        let x = random(-20, width + 20);
        let y = random(-20, height + 20);
        beginShape(POINTS);
        for (let i = 0; i < steps; i ++) {
            stroke(c[i]);
            vertex(x, y);
            let x_offset = x - left_x;
            let y_offset = y - top_y;
            let col_index = floor(x_offset / resolution);
            let row_index = floor(y_offset / resolution);
            let grid_angle = points[col_index][row_index];
            let x_step = step_length * grid_angle.x;
            let y_step = step_length * grid_angle.y;
            x = x + x_step;
            y = y + y_step;
        }
        endShape();
    }

}

function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png')
}