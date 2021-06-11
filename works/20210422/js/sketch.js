// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    colorMode(HSB, 360, 100, 100, 100);
    // 背景色を指定
    background('#206a5d');

    stroke('#ffcc29');
    strokeWeight(5);
    noFill()

    let lines = 3;
    let steps = 16;
    let w = min(width, height) *0.5 / steps ;
    translate(width * 0.5, height * 0.5);
    point(0,0)
    for (let l = 0; l < lines; l++) {
        rotate(TWO_PI) / l;
        push();
        for (let s = 0; s < steps; s++) {
            let theta = map(noise(l,s*0.1), 0, 1, -0.5, 0.5) * PI;
            // let theta = noise(1, 1) * PI;
            // let theta = noise(s * 0.1, l) * PI;
            console.log(theta)
            translate(0, w)
            rotate(theta)
            ellipse(0, 0, w)
        }
        pop()
    }

    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
}
