let thetaIncs = [];
let rads = [];
let thetas = [];
let cxs = [];
let cys = [];

let x = [];
let y = [];

let circles = [];
let sum = 0;

let offset;
let w;
let h;

let graphics = new Array;

let angleCase1 = [-13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 41]; // 180 deg
let angleCase2 = [-11, -8, -5, -2, 1, 4, 7, 10, 13, 37]; // 120 deg
let angleCase3 = [-15, -11, -7, -3, 1, 5, 9, 13, 45]; // 90 deg
let angleCase4 = [-13, -9, -4, 1, 6, 11, 16, 51]; // 72 deg
let angleCase5 = [-17, -11, -5, 1, 7, 13, 49]; // 60 deg
let angleCase6 = [-15, -7, 1, 9, 17, 41]; // 45 deg

let cells = 2; // 格子の数

function setup() {
    frameRate(12);
    createCanvas(600, 600);

    offset = width / 20;
    w = (width - offset * 2) / cells;
    h = (height - offset * 2) / cells;
    // gif出力
    // createLoop({duration:9, gif:true});
    
    // background('#262643');
    background('#f2f2ff');
    colorMode(HSB, 360, 100, 100, 100);

    angleMode(DEGREES);
    let angleCase = random([angleCase1, angleCase2, angleCase3, angleCase4, angleCase5, angleCase6]);
    for (let j = 0; j < cells ** 2; j++){
        circles[j] = floor(random(3, 5));
        console.log('circles: ' + circles[j]);

        sum = 0;
        rads[j] = new Array();
        while (sum < width/6){
        // while (sum > width/5*4 || sum < width/8*7){
            for (let i = 0; i < circles[j]; i++){
                rads[j].push(random(10, 150));
                // console.log(rads[j]);
            }
            sum = rads[j].reduce(function(a,b){
                return a + b;
            });
        }

        thetaIncs[j] = new Array;
        thetas[j] = new Array;
        for (let i = 0; i < circles[j]; i ++){
            thetaIncs[j].push(random(angleCase));
            thetas[j].push(0);
        }

        cxs[j] = new Array;
        cys[j] = new Array;
        cxs[j].push(rads[j][0]/2 * cos(thetas[j][0]));
        cys[j].push(rads[j][0]/2 * sin(thetas[j][0]));

        for(let i = 1; i < circles[j]; i++){
            cxs[j].push(cxs[j][i-1]+rads[j][i]/2 * cos(thetas[j][i]));
            cys[j].push(cys[j][i-1]+rads[j][i]/2 * sin(thetas[j][i]));
        }

        let pg = createGraphics(width, height);
        graphics[j] = pg;
    }
    // noLoop();
}

function draw(){
    background('#f2f2ff')
    for (let j = 0; j < cells; j++){
        for (let k = 0; k < cells; k++){
            let cx = offset + j*w + w/2
            let cy = offset + k*h + h/2


            // push();
            // translate(cx, cy);
            // fill('#000')
            // ellipse(0, 0, 30);
            // pop();
            // push();
            
            graphics[j*cells+k].push();
            graphics[j*cells+k].translate(cx, cy);
            // graphics[j*cells+k].fill('#000')
            // graphics[j*cells+k].ellipse(0, 0, 30);
            // graphics[j*cells+k].pop();

            cxs[j*cells+k].splice(0, 1, rads[j*cells+k][0]/2 * cos(frameCount));
            cys[j*cells+k].splice(0, 1, rads[j*cells+k][0]/2 * sin(frameCount));
            for(let i = 1; i < circles[j*cells+k]; i++){
                // cxs[j*cells+k].splice(i, 1, cxs[j*cells+k][i-1] + rads[j*cells+k][i]/2 * cos(thetas[i]));
                // cys[j*cells+k].splice(i, 1, cys[j*cells+k][i-1] + rads[j*cells+k][i]/2 * sin(thetas[i]));
                cxs[j*cells+k].splice(i, 1, cxs[j*cells+k][i-1] + rads[j*cells+k][i]/2 * cos(thetas[j*cells+k][i]));
                cys[j*cells+k].splice(i, 1, cys[j*cells+k][i-1] + rads[j*cells+k][i]/2 * sin(thetas[j*cells+k][i]));
            }
            
            for(let i = 0; i < circles[j*cells+k]; i++){
                thetas[j*cells+k].splice(i, 1, thetas[j*cells+k][i]+thetaIncs[j*cells+k][i])
            }
            
            // スピログラフによって描画される軌跡
            graphics[j*cells+k].push();
            graphics[j*cells+k].translate(width/2, height/2);
            // let hue = map(abs(x), 0, width/8*7/2, 300, 360);
            // let c = color(hue, 70, 100, 100);
            graphics[j*cells+k].stroke('#202020')
            graphics[j*cells+k].strokeWeight(1);
            // console.log(x)
            // graphics[j*cells+k].ellipse(x[j*cells+k][0], y[j*cells+k][0], 100);
            // graphics[j*cells+k].line(x, y, cxs[j*cells+k][circles[j*cells+k]-1], cys[j*cells+k][circles[j*cells+k]-1]);
            graphics[j*cells+k].pop();
            // console.log(cxs[j*cells+k]);
            // console.log(cxs);
            // console.log(x[j*cells+k]);
            x[j*cells+k] = cxs[j*cells+k];
            y[j*cells+k] = cys[j*cells+k];
            graphics[j*cells+k].ellipse(x[j*cells+k][circles[j*cells+k]-1], y[j*cells+k][circles[j*cells+k]-1], 4);
        
            graphics[j*cells+k].pop();
            image(graphics[j*cells+k], 0, 0);
        }
    }
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