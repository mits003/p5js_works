// カラーパレット
let cp1 = ['#5f0f40','#9a031e','#fb8b24','#e36414','#0f4c5c'];
let cp2 = ['#ff9f1c','#ffbf69','#f1f1f1','#cbf3f0','#2ec4b6'];
let cp3 = ['#001524','#15616d','#ffecd1','#ff7d00','#78290f'];
let cp4 = ['#353535','#3c6e71','#f1f1f1','#d9d9d9','#284b63'];
let cp5 = ['#edae49','#d1495b','#00798c','#30638e','#003d5b'];
let colorPalette = [cp1, cp2, cp3, cp4, cp5];


function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    let colors = random(colorPalette)
    angleMode(DEGREES);
    background('#fdfdfd');
    stroke('#fdfdfd');
    let w = width/random(20, 50);
    let lines = random([24, 32, 48]);
    for (let j = 0; j < lines; j++){
        let sx = width/2;
        let sy = height/2;
        let reps = floor(random(2, 5));
        let mx = 0;
        let my = 0;
        let ex = 0;
        let ey = 0;
        for (let i = 0; i < reps; i++){
            let length = random([-1, 1])*floor(random(1, 5))*w;
            let bent1 = random([0, 1, 2, 3, 4, 5])
            let bent2 = bent1-1
            mx = sx+length*cos(60*bent1);
            my = sy+length*sin(60*bent1);
            ex = mx+length*cos(60*bent2);
            ey = my+length*sin(60*bent2);
            fill(random(colors))
            triangle(mx, my, mx+length*cos(60*bent1), my+length*sin(60*bent1), mx+length*cos(60*bent2), my+length*sin(60*bent2));
            sx = ex;
            sy = ey;
        }
    }
}


function mouseClicked(){
    window.location.reload();
}