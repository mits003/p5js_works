let fr = 20;

let points = [];
let inc = 0.03;
let mult = 0.003;
let cols, rows;

let bgColors = ['#404040', '#f0eff4', '#7d98a1', ]
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
            let scaled_x = col * 0.05
            let scaled_y = row * 0.05
            let noise_val = noise(scaled_x, scaled_y)
            let angle = map(noise_val, 0, 1, 0, TWO_PI)
            let p = p5.Vector.fromAngle(angle);
            p.setMag(0.1);
            points_row.push(p);
            // push();
            // translate(col * resolution, row * resolution);
            // line(0, 0, p.x * 100, p.y * 100);
            // pop()
        }
        points.push(points_row)
    }

    let step_length = 50;
    let steps = 50;
    let lines_num = 1000;
    noFill();
    strokeWeight(1);
    for (j = 0; j < lines_num; j++){
        stroke(random([10, 245]));
        let x = random(0, width);
        let y = random(0, height);
        beginShape();
        for (let i = 0; i < steps; i ++) {
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