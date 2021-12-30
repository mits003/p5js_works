let thetaIncs = [];
let rads;
let thetas = [];
let cxs = [];
let cys = [];

let x;
let y;

let circles;
let sum;

function setup() {
    frameRate(10);
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100);
    background('#3f3f5f');

    angleMode(DEGREES);
    let angleCase1 = [-13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 41]; // 180 deg
    let angleCase2 = [-11, -8, -5, -2, 1, 4, 7, 10, 13, 37]; // 120 deg
    let angleCase3 = [-15, -11, -7, -3, 1, 5, 9, 13, 45]; // 90 deg
    let angleCase4 = [-13, -9, -4, 1, 6, 11, 16, 51]; // 72 deg
    let angleCase5 = [-17, -11, -5, 1, 7, 13, 49]; // 60 deg
    let angleCase6 = [-15, -7, 1, 9, 17, 41]; // 45 deg
    let angleCase = random([angleCase1, angleCase2, angleCase3, angleCase4, angleCase5, angleCase6]);
    circles = floor(random(3, 7));

    sum = 0;
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

    push();

    translate(width/2, height/2);
    rotate(-90);
    stroke('#fff');
    for(let j = 0; j <= 360; j++){
        cxs.splice(0, 1, rads[0]/2 * cos(j));
        cys.splice(0, 1, rads[0]/2 * sin(j));
        for(let i = 1; i <= circles; i++){
            cxs.splice(i, 1, cxs[i-1] + rads[i]/2 * cos(thetas[i]));
            cys.splice(i, 1, cys[i-1] + rads[i]/2 * sin(thetas[i]));
        }
        
        for(let i = 0; i <= circles; i++){
            thetas.splice(i, 1, thetas[i]+thetaIncs[i])
        }

        line(x, y, cxs[circles], cys[circles]);

        x = cxs[circles];
        y = cys[circles];

    }
    pop();
}
function mouseClicked(){
    window.location.reload();
}

