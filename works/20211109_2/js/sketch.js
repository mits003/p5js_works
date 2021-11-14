// カラーパレット
let c0 = ['#ff7b00','#ff8800','#ff9500','#ffa200','#ffaa00','#ffb700','#ffc300','#ffd000','#ffdd00','#ffea00'];
let c1 = ['#cad2c5','#a7bea9','#96b49b','#84a98c','#6b917e','#52796f','#446461','#354f52','#32474c','#2f3e46'];
let c2 = ['#b7094c','#a01a58','#892b64','#723c70','#5c4d7d','#455e89','#2e6f95','#23789b','#1780a1','#0091ad'];

let dRad = 20;
let div = 100;
let theta = 0;

let x, y;

function setup() {
    frameRate(30);
    createCanvas(windowHeight - 10, windowHeight - 10);
    colorMode(HSB, 360, 100, 100, 100);
    let bgBaseH = floor(random(0, 360));
    bg1Cl = color(bgBaseH, 80, 25);
    bg2Cl = color(bgBaseH, 10, 90, 10);

    angleMode(DEGREES);
    translate(width/2, height/2);

    let dTheta = 360/div;
    for (let j = 0; j < c0.length; j++){
        let rad = dRad * j;
        console.log(rad);
        beginShape();
        for (let i = 0; i <= div; i ++){
            pNoise = noise(rad * cos(dTheta * i) * 0.3, rad * sin(dTheta * i) * 0.3);
            noiseRad = rad + rad * 0.5 * noise(pNoise);
            x = noiseRad * cos(dTheta * i);
            y = noiseRad * sin(dTheta * i);
            if(i == 0 || i == div){
                curveVertex(x, y);
                curveVertex(x, y);
            } else {
                curveVertex(x, y);
            }
        }
        endShape();
    }
}

function draw() {

}

function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}

