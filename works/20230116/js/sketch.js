// カラーパレット
let colors = ["#023e8a","#0077b6","#00b4d8","#90e0ef", "#CAF0F8"];

function setup() {
    let canvas = createCanvas(600, 600);

    background('#03045E');
    ni1 = random(0.1, 0.5)
    nj1 = random(0.1, 0.5)

    for (let j = 4; j < 6; j++){
        let radiusFirst = width/12*j;
        for(let i = 0; i < 360; i +=3){
            let angle = i / 180 * PI;
            let radiusBase = 30;
            let radiusSecond = radiusBase * sin(angle*8) + radiusBase;
            let x = radiusFirst * cos(angle) + width/2;
            let y = radiusFirst * sin(angle-15) + height/2;
    
            noFill();
            let n = floor(map(noise(i*ni1, j*nj1), 0, 1, 0, colors.length));
            stroke(colors[n]);
            ellipse(x, y, radiusSecond);
        }
    }
}


function mouseClicked(){
    window.location.reload();
}