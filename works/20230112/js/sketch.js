// object color palette
let colors = ['#81b214', '#ffcc29', '#f58634'];

function setup() {
    // mode settings
    rectMode(CENTER);
    // canvas size setting
    let canvas = createCanvas(600, 600);
    // set color for the background
    background("#fffef2");

    let cells = 4; // Num of grids
    let offset = width / 10;
    let w = (width - offset * 2) / cells;
    let h = (height - offset * 2) / cells;

    // distribute fisgures in grids
    for (let j = 0; j < cells; j++){
        for (let i = 0; i < cells; i++){
            let x = offset + i * w;
            let y = offset + j * h;

            let cx = x + w / 2;
            let cy = y + h / 2;

            push();
            translate(cx, cy);
            rotate(PI*random(0, 2));
            let c = random(colors)
            fill(c);
            strokeWeight(3);
            stroke(c);
            let n = int(random(8));
            // let n = 3;
            switch(n){
                case 0:
                    rect(0, 0, random(width/12, width/4), random(width/12, width/4));
                    break;
                case 1:
                    ellipse(0, 0, random(width/12, width/5));
                    break;
                case 2:
                    let lx = random(width/12, width) 
                    let ly = random(width/12, width) 
                    line(-lx/2, -ly/2, lx/2, ly/2);
                    break;
                case 3:
                    let ctx = drawingContext;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.bezierCurveTo(random(-width/2, width/2), random(-width/2, width/2), random(-width/2, width/2), random(-width/2, width/2), random(-width/2, width/2), random(-width/2, width/2));
                    ctx.stroke();
                    break;
                }
            pop()
        }
    }

    // make background granular
    for (let i = 0; i < width * height * 10 / 100; i ++){
        stroke("#ffffff22");
        let px = random(width);
        let py = random(height);
        point(px, py);
    }
}


function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}