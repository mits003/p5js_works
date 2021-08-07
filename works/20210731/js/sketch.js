// カラーパレット
let colors = ['#06AED5', '#086788', '#F0C808', '#E77211', '#DD1C1A'];
let colorsStroke = [
    '#ee59ae',
    '#d95fbe',
    '#c065cb',
    '#a26cd5',
    '#7f72da',
    '#617cdf',
    '#3e85df',
    '#008cdc',
    '#0098d6',
    '#00a1c8',
    '#00a7b6',
    '#22aca3',
];

let n = 5;
let oR = 240;
let flowers = 1000;
function setup() {
    // キャンバスサイズの設定
    // let canvas = createCanvas(600, 600);
    let canvas = createCanvas(7632, 6480);
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
    // }

    // background('#232323');
    // background('#F4FC94');
    // background('#F0C808');
    // background('#086788');
    // background('#E7ECF2');

    for (i = 0; i < flowers; i++) {
        push()
        let placeX = random(0, width);
        let placeY = random(0, height);
        translate(placeX, placeY);
        rotate(random(PI))
        stroke('#fff');
        strokeJoin(ROUND);
        strokeWeight(8);
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
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
}


function calcH(x) {
    if (x < 0.8) {
        return 0;
    } else {
        return 0.8 - x;
    }
}
