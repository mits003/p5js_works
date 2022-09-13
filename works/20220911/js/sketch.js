let thetaIncs = [];
let rads;
let thetas = [];
let cxs = [];
let cys = [];

let x, y;
let x1, y1;

let circles;
let sum = 0;

let pg;


function setup() {
    frameRate(0.5);
    createCanvas(600, 600);
    // gif出力
    // createLoop({duration:6, gif:true})

    angleMode(DEGREES);
    let angleCase1 = [-13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 41]; // 180 deg
    let angleCase2 = [-11, -8, -5, -2, 1, 4, 7, 10, 13, 37]; // 120 deg
    let angleCase3 = [-15, -11, -7, -3, 1, 5, 9, 13, 45]; // 90 deg
    let angleCase4 = [-13, -9, -4, 1, 6, 11, 16, 51]; // 72 deg
    let angleCase5 = [-17, -11, -5, 1, 7, 13, 49]; // 60 deg
    let angleCase6 = [-15, -7, 1, 9, 17, 41]; // 45 deg
    let angleCase = random([angleCase1, angleCase2, angleCase3, angleCase4, angleCase5, angleCase6]);
    circles = floor(random(3, 5));

    while (sum < width/5*4 || sum > width/8*7){
        rads = [];
        for (let i = 0; i <= circles; i++){
            rads.push(random(10, 150));
        }
        sum = rads.reduce(function(a,b){
            return a + b;
        });
    }
    for (let i = 0; i <= circles; i ++){
        thetaIncs.push(random(angleCase));
        thetas.push(0);
    }
    cxs.push(rads[0]/2 * cos(thetas[0]));
    cys.push(rads[0]/2 * sin(thetas[0]));
    for(let i = 1; i <= circles; i++){
        cxs.push(cxs[i-1]+rads[i]/2 * cos(thetas[i]));
        cys.push(cys[i-1]+rads[i]/2 * sin(thetas[i]));
    }

    pg = createGraphics(width, height);
    pg1 = createGraphics(width, height);

    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = -5;
    drawingContext.shadowBlur = 5;
    drawingContext.shadowColor = 'gray';
}

function draw(){
    background('#F6F6F6')
    push();
    
    translate(width/2, height/2);
    cxs.splice(0, 1, rads[0]/2 * cos(frameCount));
    cys.splice(0, 1, rads[0]/2 * sin(frameCount));
    for(let i = 1; i <= circles; i++){
        cxs.splice(i, 1, cxs[i-1] + rads[i]/2 * cos(thetas[i]));
        cys.splice(i, 1, cys[i-1] + rads[i]/2 * sin(thetas[i]));
    }
    
    for(let i = 0; i <= circles; i++){
        thetas.splice(i, 1, thetas[i]+thetaIncs[i])
    }
    
    // スピログラフを構成する円の挙動を描画
    noFill();
    for ( let i = 0; i <= thetaIncs.length; i++){
        stroke('#08ffff');
        if(i == thetaIncs.length){
        } else if (i === 0){
            ellipse(cxs[i], cys[i], rads[i]);
        } else {
            ellipse(cxs[i], cys[i], rads[i]);
        }

        stroke('#ff08ff');
        if(i == thetaIncs.length){
        } else if (i === 0){
            line(0, 0, cxs[i+1], cys[i+1]);
        } else {
            line(cxs[i], cys[i], cxs[i+1], cys[i+1]);
        }
    }

    // スピログラフによって描画される軌跡
    pg.push();
    pg.translate(width/2, height/2);
    pg.stroke('#0078AA');
    pg.strokeWeight(3);
    pg.line(x, y, cxs[circles], cys[circles]);
    pg.pop();
    console.log(cxs);
    x = cxs[circles];
    y = cys[circles];
    
    pg1.push();
    pg1.translate(width/2, height/2);
    pg1.stroke('#F2DF3A')
    pg1.strokeWeight(3);
    pg1.line(x1, y1, cxs[circles-1], cys[circles-1]);
    pg1.pop();
    x1 = cxs[circles-1];
    y1 = cys[circles-1];
    
    pop();
    image(pg, 0,0);
    image(pg1, 0,0);
}
    
    
function mouseClicked(){
    window.location.reload();
}

function keyPressed(){
    if (key == 's') {
    p5.prototype.writeFile([thetaIncs.join(',')], "params");
    saveCanvas(canvas, 'image0', 'png')
    }
}