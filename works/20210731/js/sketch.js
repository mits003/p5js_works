// カラーパレット
let colors = ['#06AED5', '#086788', '#F0C808', '#E77211', '#DD1C1A'];
let bgColors = ['#232323', '#F4FC94', '#F0C808', '#086788', '#E7ECF2']

let n = 5;
let oR = 40;
let flowers = 100;
function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    background(random(bgColors))
    for (i = 0; i < flowers; i++) {
        push()
        let placeX = random(0, width);
        let placeY = random(0, height);
        translate(placeX, placeY);
        rotate(random(PI))
        stroke('#fff');
        strokeJoin(ROUND);
        strokeWeight(2);
        fill(random(colors));
        // fill(random(colorsStroke));
        beginShape();
        for (let t = 0; t < 360; t++) {
            let A = (n / PI) * radians(t);
            let md = floor(A) % 2;
            let r = pow(-1, md) * (A - floor(A)) + md;
            let R = r + 2 * calcH(r);

            let x = oR * R * cos(radians(t));
            let y = oR * R * sin(radians(t));

            vertex(x, y);
        }
        endShape(CLOSE);
        pop()
    }
}


function calcH(x) {
    if (x < 0.8) {
        return 0;
    } else {
        return 0.8 - x;
    }
}
