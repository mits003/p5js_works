// color palette
let colors = ['#81b214', '#ffcc29', '#f58634'];
let gridOutNum = 6;
let gridInNum = 3;

function setup() {
    // canvas setting
    let canvas = createCanvas(600, 600);
    background('#206a5d');
    angleMode(DEGREES)

    let offset = width/10;
    let margin = offset/2;
    let w = (width - offset * 2) / gridOutNum;
    let h = (height - offset * 2) / gridOutNum;

    // grid

    for (let i = 0; i < gridOutNum; i++){
        for (let j = 0; j < gridOutNum; j++){
            let ux = offset + i * w + w / gridInNum / 2;
            let ly = offset + j * h + h / gridInNum / 2;
            let cx = ux + w/2; 
            let cy = ly + h/2;
            stroke(255);
            // strokeWeight(20);
            // point(cx, cy);
            // point(ux, ly);

            push()
            // translate(cx, cy);
            translate(ux, ly);
            let c = random(colors)
            // scale(random(0.6, 1.1))
            n = int(random(5));
            switch(n){
                case 0:
                    drawCrossings(w, h, c);
                    break;
                case 1:
                    drawDiagonalCrossings(w, h, c);
                    break;
                case 2:
                    drawGinkgo(w, h, c);
                    point(0, 0)
                    break;
                case 3:
                    // drawBricks(c, 0, 0);
                    //drawmoon();
                    break;
                case 4:
                    drawStaggeredCircles(w, h, c);
                    //drawmoon();
                    break;
                }
            pop()
        }
    }

}

function drawCrossings(w, h, c){
    let lengthHalf = w / (gridInNum * 2 * 2);
    let innerW = w / gridInNum;
    let innerH = h / gridInNum;
    fill(c);
    for (let i = 0; i < gridInNum; i++){
        for (let j= 0; j < gridInNum; j++){
            let cx = i * innerW
            let cy = j * innerH
            line(cx-lengthHalf, cy, cx+lengthHalf, cy);
            line(cx, cy-lengthHalf, cx, cy+lengthHalf);
            // strokeWeight(3)
        }
    }
    for (let i = 0; i < gridInNum-1; i++){
        for (let j= 0; j < gridInNum-1; j++){
            let cx = i * innerW + innerW / 2
            let cy = j * innerH + innerH / 2
            line(cx-lengthHalf, cy, cx+lengthHalf, cy);
            line(cx, cy-lengthHalf, cx, cy+lengthHalf);
        }
    }
}
function drawDiagonalCrossings(w, h, c){
    let lengthHalf = w / (gridInNum * 2 * 2 * 2);
    let innerW = w / gridInNum;
    let innerH = h / gridInNum;
    fill(c);
    for (let i = 0; i < gridInNum; i++){
        for (let j= 0; j < gridInNum; j++){
            let cx = i * innerW
            let cy = j * innerH
            line(cx-lengthHalf, cy-lengthHalf, cx+lengthHalf, cy+lengthHalf);
            line(cx+lengthHalf, cy-lengthHalf, cx-lengthHalf, cy+lengthHalf);
            point(cx, cy);
        }
    }
    for (let i = 0; i < gridInNum-1; i++){
        for (let j= 0; j < gridInNum-1; j++){
            let cx = i * innerW + innerW / 2
            let cy = j * innerH + innerH / 2
            line(cx-lengthHalf, cy-lengthHalf, cx+lengthHalf, cy+lengthHalf);
            line(cx+lengthHalf, cy-lengthHalf, cx-lengthHalf, cy+lengthHalf);
            point(cx, cy);
        }
    }
}

function drawStaggeredCircles(w, h, c){
    let innerW = w / gridInNum;
    let innerH = h / gridInNum;
    fill(c);
    for (let i = 0; i < gridInNum; i++){
        for (let j= 0; j < gridInNum; j++){
            let cx = i * innerW
            let cy = j * innerH
            ellipse(cx, cy, innerH/2)
        }
    }
    for (let i = 0; i < gridInNum-1; i++){
        for (let j= 0; j < gridInNum-1; j++){
            let cx = i * innerW + innerW / 2
            let cy = j * innerH + innerH / 2
            ellipse(cx, cy, innerH/2)
        }
    }
}

function draw(w, h, c){
    let innerW = w / gridInNum;
    let innerH = h / gridInNum;
    fill(c);
    for (let i = 0; i < gridInNum; i++){
        for (let j= 0; j < gridInNum; j++){
            let cx = i * innerW
            let cy = j * innerH
            ellipse(cx, cy, innerH/2)
        }
    }
    for (let i = 0; i < gridInNum-1; i++){
        for (let j= 0; j < gridInNum-1; j++){
            let cx = i * innerW + innerW / 2
            let cy = j * innerH + innerH / 2
            ellipse(cx, cy, innerH/2)
        }
    }
}

function drawGinkgo(w, h, c){
    // let innerW = w / gridInNum;
    // let innerH = h / gridInNum;
    fill(c);
    let innerW = w ;
    let innerH = h ;
    // for (let i = 0; i < gridInNum; i++){
    //     for (let j = 0; j < gridInNum; j++){
    for (let i = 0; i < 1; i++){
        for (let j = 0; j < 1; j++){
            let cx = i * innerW + innerW / 2;
            let cy = j * innerH + innerH / 2;
            ellipse(cx, cy, 10)
            curveTightness(4)
            beginShape();
            curveVertex(cx, cy-innerH);
            curveVertex(cx+innerW/2, cy+innerH*sin(15));
            curveVertex(cx, cy+innerH/2);
            curveVertex(cx-innerW/2, cy+innerH*sin(15));
            curveVertex(cx, cy-innerH);
            endShape();
        }
    }
    // for (let i = 0; i < gridInNum-1; i++){
    //     for (let j = 0; j < gridInNum-1; j++){
    //         let x = i * innerW;
    //         let y = j * innerH;
    //         arc(x, y, innerW, innerH, 0,PI);
    //     }
    // }
}


function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}