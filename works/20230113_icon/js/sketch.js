let cp0 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp1 = ['#355070', '#6d597a', '#b56576', '#e56b6f', '#eaac8b'];
let cp2 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp5 = ['#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7'];
let cp6 = ['#5f0f40', '#9a031e', '#fb8b24', '#e36414', '#0f4c5c'];
let cp7 = ['#588b8b', '#f0f0f0', '#ffd5c2', '#f28f3b', '#c8553d'];
let colorPalette = [cp0, cp1, cp2, cp3, cp4, cp5, cp6, cp7];

let img;
let ctx;
let myFont;
function preload() {
    myFont = loadFont("./assets/Lora-Italic.ttf");
}

function setup() {
    // output gif
    // frameRate(5);
    // createLoop({duration:3, gif:true});
    let canvas = createCanvas(400/2, 400/2);
    background('#f7f7f7');
// }

// function draw() {
    voronoiSiteFlag(false);
    voronoiCellStroke('#f7f7f7');
    voronoiCellStrokeWeight(1);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = random(width);
            let y = random(height);
            voronoiSite(x, y);
        }
	}
    voronoi(width, height, false);
    let normal = voronoiGetCells();
    let colors = random(colorPalette)
    for (let l = 0; l < 2; l++){
        for (let j = 0; j < normal.length; j++){
            let coords = normal[j];
            let s = new Scribble();
            let xCoords = new Array();
            let yCoords = new Array();
            beginShape();
            for (let k = 0; k < coords.length; k++) {
                let x = coords[k][0];
                let y = coords[k][1];
                vertex(x,y);
                xCoords.push(x);
                yCoords.push(y);
            }
            endShape(CLOSE);
            stroke(random(colors));
            s.scribbleFilling(xCoords, yCoords, 4, random(0, 360));
        }
    }

    voronoiDraw(0, 0, false);

    let pg = createGraphics(width, height);
    pg.rectMode(CENTER);
    pg.translate(width/2, height/2);
    
	pg.fill(255);
	pg.noStroke();
    
    pg.ellipse(0, 0, width/6*5);

    pg.rotate(PI*3/180);
    pg.textFont(myFont)
    pg.textSize(280/2);
    pg.textAlign(CENTER, CENTER);
    pg.stroke(255);
    pg.erase();
    pg.text("3", 0, -50/2);
    pg.noErase();

    image(pg, 0, 0);
}

function mouseClicked(){
    window.location.reload();
}

