// カラーパレット
let cp0 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp1 = ['#355070', '#6d597a', '#b56576', '#e56b6f', '#eaac8b'];
let cp2 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];

let colorPalette = [cp0, cp1, cp2, cp3];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    // let canvas = createCanvas(windowWidth, windowHeight);

    // 背景色を指定
    background('#f7f7f7');
    voronoiSiteFlag(false);
    voronoiCellStroke('#f7f7f7');
    voronoiCellStrokeWeight(6);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let x = i * 100;
            let y = j * 100;
            let s = noise(x * 0.005, y * 0.005);
            voronoiSite(x * s, y * s);
        }
	}
    voronoi(width, height, false);
    
    let normal = voronoiGetCells();
    
    let colors = random(colorPalette)

    for (let l = 0; l < 2; l++){
        for (let j = 0; j < normal.length; j++){
            stroke(random(colors));
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
            s.scribbleFilling(xCoords, yCoords, 5, random(0, 360));
        }
    }

    voronoiDraw(0, 0, false);
}


function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}