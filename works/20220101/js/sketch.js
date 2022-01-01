let cp1 = ['#03071e','#370617','#6a040f','#9d0208','#d00000','#dc2f02','#e85d04','#f48c06','#faa307','#ffba08'];
let cp2 = ['#590d22','#800f2f','#a4133c','#c9184a','#ff4d6d','#ff758f','#ff8fa3','#ffb3c1','#ffccd5','#fff0f3'];
let cp3 = ['#f72585','#b5179e','#7209b7','#560bad','#480ca8','#3a0ca3','#3f37c9','#4361ee','#4895ef','#4cc9f0'];
let cp4 = ['#d9ed92','#b5e48c','#99d98c','#76c893','#52b69a','#34a0a4','#168aad','#1a759f','#1e6091','#184e77'];


let colorPalette = [cp1, cp2, cp3, cp4];
let colors;

function setup() {
    canvasSize = min(windowWidth, windowHeight)
    let canvas = createCanvas(canvasSize, canvasSize);

    background('#f0f0f0');
    colors = random(colorPalette);
    noStroke();

    let cells = 200;
    let offset = canvasSize/100;
    let w = (canvasSize - offset * 2) / cells;
    let h = (canvasSize - offset * 2) / cells;

    for (let i = 0; i < cells; i++){
        for  (let j = 0; j < cells; j++){
            let ratioH = random();
            let ratioV = random();
            fill(random(colors));
            if (ratioH > i/cells && ratioV > j/cells){
                let x = offset+i*w;
                let y = offset+j*h;
                ellipse(x+w/2, y+h/2, w);
            }
        }
    }
}


function mouseClicked(){
    window.location.reload();
}