let cp0 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp1 = ['#355070', '#6d597a', '#b56576', '#e56b6f', '#eaac8b'];
let cp2 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp5 = ['#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7'];
let cp6 = ['#5f0f40', '#9a031e', '#fb8b24', '#e36414', '#0f4c5c'];
let cp7 = ['#588b8b', '#f0f0f0', '#ffd5c2', '#f28f3b', '#c8553d'];
let colorPalette = [cp0, cp1, cp2, cp3, cp4, cp5, cp6, cp7];

let s = `function setup() {
    let canvas = createCanvas(1500/2, 1500/2);

    background('#f7f7f7');
    voronoiSiteFlag(false);
    voronoiCellStroke('#f7f7f7');
    voronoiCellStrokeWeight(6);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = i * 130;
            let y = j * 130;
            let s = noise(x * 0.05, y * 0.05);
            voronoiSite(x * s, y * s);
        }
	}
    voronoi(width, height, false);
    let normal = voronoiGetCells();
    console.log(normal)
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
    saveCanvas(canvas, 'image0', 'png');
}
`


function setup() {
    let canvas = createCanvas(1500/2, 1500/2);

    background('#f7f7f7');
    voronoiSiteFlag(false);
    voronoiCellStroke('#f7f7f7');
    voronoiCellStrokeWeight(6);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = i * 130;
            let y = j * 130;
            let s = noise(x * 0.05, y * 0.05);
            voronoiSite(x * s, y * s);
        }
	}
    voronoi(width, height, false);
    let normal = voronoiGetCells();
    console.log(normal)
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

    fill('#222222');
    stroke('#f0f0f0');
    strokeWeight(4)
    textSize(9);
    text(s, 10, 20);
    saveCanvas(canvas, 'image0', 'png');
}

function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}

function keyPressed() {
    if (keyCode === 83) { // if "s" is pressed
        let name = "../img/image" + frameCount;
        saveCanvas(canvas, name, "png");
    }
}