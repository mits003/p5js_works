// カラーパレット
let c0 = ['#ff7b00','#ff8800','#ff9500','#ffa200','#ffaa00','#ffb700','#ffc300','#ffd000','#ffdd00','#ffea00'];
let c1 = ['#cad2c5','#a7bea9','#96b49b','#84a98c','#6b917e','#52796f','#446461','#354f52','#32474c','#2f3e46'];
let c2 = ['#b7094c','#a01a58','#892b64','#723c70','#5c4d7d','#455e89','#2e6f95','#23789b','#1780a1','#0091ad'];

let colors = [c0, c1, c2]

let bc = ['#e3e3e3', '#333333', '#1d3557', '#590d22']

let wstep = 10;
let layer_num = 10;
let woffset = 100;
let hoffset = 100;


function setup() {
    createCanvas(600,600);
    background(random(bc));
    let cp = random(colors)

    let w = width - woffset * 2;
    let h = height - hoffset * 2;

    noStroke()
    translate(woffset, hoffset * 1.5)
    for(n = 0; n<layer_num; n++){
        let y = h / layer_num * n;
        fill(cp[n])
        beginShape();
        curveVertex(0,y);
        for (i = 0; i < w; i+=w/wstep) {
            let d = dist(i,y,w/2,y);
            curveVertex(i,y-noise(y+i*0.08)*(w/2-d));
        }
    curveVertex(w,y);
    curveVertex(w,y);
    endShape();
    }
}


function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png')
}