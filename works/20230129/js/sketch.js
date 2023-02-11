let cp0 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp2 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp6 = ['#5f0f40', '#9a031e', '#fb8b24', '#e36414', '#0f4c5c'];
let colorPalette = [cp0, cp2, cp3, cp4, cp6];

let gridOutNum = 4;
let gridInNum;
let offset;

function setup() {
    // canvas setting
    let canvas = createCanvas(600, 600);
    background('#f7f7f7');
    let colors = random(colorPalette);
    
    grid(width, height);

    offset = width / (gridOutNum*2);
    console.log(offset)
    let w = offset*2;
    let h = offset*2;
    console.log(w);
    console.log(h);
    let constantGrid = random(2)
    // let gridInNum = 2;
    for (let i = 0; i < gridOutNum-1; i++){
        for (let j = 0; j < gridOutNum-1; j++){
            let gridInNum = int(random(1, 6));
            // if(constantGrid < 1){
            //     gridInNum = int(random(1, 6));
            // }
            
            // let ux = offset + i * w ;
            // let ly = offset + j * h ;
            // let ux = offset + i * w + w / gridInNum / 2;
            // let ly = offset + j * h + h / gridInNum / 2;
            let ux = offset + i*w + w/2;
            let ly = offset + j*h + h/2;
            let c = random(colors)
            let n = int(random(3));
            // let n = 2;
            
            push()
            translate(ux, ly);
            switch(2){
                case 0:
                    noFill();
                    ellipse(0, 0, offset*2)
                    // drawCrossings(w, h, c, gridInNum);
                break;
                case 1:
                    drawStaggeredCircles(w, h, c, gridInNum);
                break;
                case 2:
                    drawCirclesCircle(w, h, c, gridInNum);
                break
            }
            pop()
        }
    }

}

function drawCrossings(w, h, c, gridInNum){
    let lengthHalf = w / (gridInNum * 2 * 2);
    let innerW = w / gridInNum;
    let innerH = h / gridInNum;
    stroke(c);
    strokeWeight(2)
    for (let i = 0; i < gridInNum; i++){
        for (let j= 0; j < gridInNum; j++){
            let cx = i * innerW
            let cy = j * innerH
            line(cx-lengthHalf, cy, cx+lengthHalf, cy);
            line(cx, cy-lengthHalf, cx, cy+lengthHalf);
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

function drawStaggeredCircles(w, h, c, gridInNum){
    let innerW = w / gridInNum;
    let innerH = h / gridInNum;
    let n = int(random(2));
    switch(n){
        case 0:
            fill(c);
            noStroke()
        break;
        case 1:
            noFill();
            stroke(c)
            break;
    }
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
    
function drawCirclesCircle(w, h, c, gridInNum){    
    let n = int(random(2));
    let cx = w / gridInNum * gridInNum/2;
    let cy = h / gridInNum;
    let r = w / (gridInNum * 2 * 2);
    let circleNum = gridInNum + 4;

    switch(n){
        case 0:
            fill(c);
            noStroke();
            // push();
            // translate(cx, cy);
            // if (circleNum % 2 == 1){
                // }
            rotate(-PI/circleNum/2);
            for (let i = 0; i < circleNum; i++){
                ellipse(h/15*5 * cos(TWO_PI/circleNum*i), h/15*5 * sin(TWO_PI/circleNum*i), 10);
            }
            rotate(-PI/circleNum/2);
            for (let i = 0; i < circleNum; i++){
                ellipse(h/15*4 * cos(TWO_PI/circleNum*i), h/15*4 * sin(TWO_PI/circleNum*i), 8);
            }
            rotate(-PI/circleNum/2);
            for (let i = 0; i < circleNum; i++){
                ellipse(h/15*3 * cos(TWO_PI/circleNum*i), h/15*3 * sin(TWO_PI/circleNum*i), 6);
            }
            rotate(-PI/circleNum/2);
            for (let i = 0; i < circleNum; i++){
                ellipse(h/15*2 * cos(TWO_PI/circleNum*i), h/15*2 * sin(TWO_PI/circleNum*i), 5);
            }
            // pop();
        break;
        case(1):
            noFill();
            stroke(c);
            push();
            // translate(cx, cy);
            // rotate(-PI/circleNum/2);
            for (let i = 0; i < circleNum; i++){
                ellipse(cos(TWO_PI/circleNum*i), sin(TWO_PI/circleNum*i), 10);
            }
            pop()
        break;
    }

}

function mouseClicked(){
    window.location.reload();
}

function grid(width, height){
    let gridNum = gridOutNum*2;
    let gridSpace = width / gridNum;

    strokeWeight(2);
    stroke(100)
    for (let i = 0; i <= width; i += gridSpace){
        for (let j = 0; j <= height; j += gridSpace){
            point(i, j);
        }
    }
}