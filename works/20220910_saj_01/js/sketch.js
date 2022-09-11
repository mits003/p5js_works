// color palettes
let bgCp1 = ['#FF9900','#FAA705','#F6B60B','#F1C410','#ECD216','#E5E81E'];
let bgCp2 = ['#ee59ae','#c065cb','#7f72da','#3e85df','#0098d6','#22aca3'];
let bgCp3 = ['#E1EAF2','#C8D2DD','#AEB9C8','#95A1B3','#7B899E','#55647E'];
let bgCp4 = ['#BCD0C7','#9CBCB4','#7CA8A2','#5C938F','#3C7F7D','#0C6161'];
let fCp1 = ['#8ecae6','#8ecae6','#219ebc','#219ebc', '#023047','#023047', '#ffb703','#ffb703', '#fb8500','#fb8500'];
let fCp2 = ['#003049','#003049','#d62828','#d62828', '#f77f00','#f77f00', '#fcbf49','#fcbf49', '#eae2b7','#eae2b7'];
let fCp3 = ['#5f0f40','#5f0f40','#9a031e','#9a031e', '#fb8b24','#fb8b24', '#e36414','#e36414', '#0f4c5c','#0f4c5c'];
let fCp4 = ['#588b8b','#588b8b','#f0f0f0','#f0f0f0', '#ffd5c2','#ffd5c2', '#f28f3b','#f28f3b', '#c8553d','#c8553d'];
let bgCp = [bgCp1, bgCp2, bgCp3, bgCp4];
let fCp = [fCp1, fCp2, fCp3, fCp4]

let points = [];
let inc = 0.03;
let mult = 0.003;
let cols, rows;


function setup() {
    canvas = createCanvas(1500/2, 1500/2);
// }

// function draw(){
    noiseDetail(1);
    
    let bgC = random(bgCp); 
    background(random(bgC));
    let fC = random(fCp);

    noStroke();
    
    let circles = floor(random(1, 4));
    for (let i = 0; i < circles; i++){
        fill(random(bgC))
        ellipse(random(width), random(height), random(50, 300));
    }

    let left_x = int(-width * 0.5);
    let right_x = int(width * 1.5);
    let top_y = int(-height * 0.5);
    let bottom_y = int(height * 1.5);

    let resolution = int(width * 0.03) 
    cols = floor((right_x - left_x) / resolution);
    rows = floor((bottom_y - top_y) / resolution);

    let step_length = 30;
    let steps = fC.length;
    let lines_num = 800;
    noFill();
    strokeWeight(4);

    for (let col = 0; col < cols; col++) {
        let points_row = []
        for (let row = 0; row < rows; row++) {
            let noise_val = noise(col * 0.1, row * 0.1)
            let angle = map(noise_val, -1, 1, -PI, PI)
            let p = p5.Vector.fromAngle(angle);
            p.setMag(0.3);
            points_row.push(p);
        }
        points.push(points_row)
    }

    for (j = 0; j < lines_num; j++){
        let x = random(-20, width + 20);
        let y = random(-20, height + 20);
        beginShape(POINTS);
        for (let i = 0; i < steps; i ++) {
            stroke(fC[i]);
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
    saveCanvas(canvas, 'image0', "png");
}

function mouseClicked(){
    window.location.reload();
}
