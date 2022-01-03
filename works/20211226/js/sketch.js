// カラーパレット
let cp1 = ['#FFD922', '#FFC34B', '#FFB522', '#FFB522', '#FF8622'];
let cp2 = ['#06AED5', '#086788', '#F0C808', '#E77211', '#DD1C1A'];
let cp3 = [ '#ee59ae', '#d95fbe', '#c065cb', '#a26cd5', '#7f72da', '#617cdf', '#3e85df', '#008cdc', '#0098d6', '#00a1c8', '#00a7b6', '#22aca3',];
let cp4 = [ '#d87834ff', '#ee9739ff', '#ffc425ff', '#ffdd4fff', '#9dcd4fff', '#76ba4fff', '#095339ff'];
let cp5 = ['#461220','#69212d','#8c2f39','#9f3541','#b23a48','#d77a7d','#fcb9b2','#fdc5b7','#fed0bb'];
let cp6 = ['#7400b8','#6930c3','#5e60ce','#5390d9','#4ea8de','#48bfe3','#56cfe1','#64dfdf','#72efdd','#80ffdb'];
let cp7 = ['#ff5400','#ff6d00','#ff8500','#ff9100','#ff9e00','#00b4d8','#0096c7','#0077b6','#023e8a','#03045e'];


let cp = [cp1, cp2, cp3, cp4, cp5, cp6, cp7]

let r;
let figures = [];

let R = 300;
let A = 5;

function setup() {
    let canvas = createCanvas(800, 800);
    background('#232323');

    let colors = random(cp)
    let div = 360/colors.length/2;

    pgL = createGraphics(width, width);
    pgL.clear();
    pgL.translate(pgL.width/2, pgL.width/2);
    pgL.noStroke();
    ctxL = pgL.drawingContext;
    ctxL.beginPath();
    ctxL.arc(0, 0, width, 0, Math.PI);
    ctxL.clip();
    
    let cIndexL = 0;
    for (let i = 360/div/4*3; i < 360/div/4*7; i++) {
        pgL.fill(colors[cIndexL%colors.length]);
        pgL.push();
        pgL.rotate(radians(div * i));
        drawDrop(pgL);
        pgL.pop();
        cIndexL += 1;
    }


    pgU = createGraphics(width, width);
    pgU.clear();
    pgU.translate(pgU.width/2, pgU.width/2);
    pgU.noStroke();
    
    ctxU = pgU.drawingContext;
    ctxU.beginPath();
    ctxU.arc(0, 0, width, Math.PI, 0);
    ctxU.clip();
    
    let cIndexU = 0;
    for (let i = 360/div/4; i <= 360/div/4*5; i ++) {
        pgU.fill(colors[cIndexU%colors.length]);
        pgU.push();
        pgU.rotate(radians(div * i));
        drawDrop(pgU);
        pgU.pop();
        cIndexU += 1;
    }

    push();
    image(pgU, 0, 0);
    image(pgL, 0, 0);
    pop();
}

function drawDrop(pg){
    pg.push();
    pg.beginShape()
    pg.translate(60, 0);
    for (let t = 0; t < TWO_PI; t += 0.1) {
        r = 1 / (A * sin(t / 2) + 1);
        pg.vertex(R * r * cos(t), R * r * sin(t));
    }
    pg.endShape(CLOSE);
    pg.pop();
}

function mouseClicked(){
    window.location.reload();
}
