// カラーパレット
let colors = ['#436ea4', '#eed883', '#ea6157', '#cddbe4'];
// let colors = ['#d7d56f', '#d34358', '#556045', '#f08f68'];

let s = new Scribble();

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    angleMode(DEGREES)
    // 背景色を指定
    // background('#fff');
    background('#1f3a52');
    // background('#91ab47');

    let cells = 10;
    let offset = width / 10;
    let margin = offset / 5;

    let w = (width - offset * 2 - margin * (cells - 1)) / cells;
    let h = (height - offset * 2 - margin * (cells - 1)) / cells;

    for (let j = 0; j < cells; j++) {
        for (let i = 0; i < cells; i++) {
            let x = offset + (w + margin) * i;
            let y = offset + (h + margin) * j;

            let cx = x + w / 2;
            let cy = y + h / 2;

            push();
            translate(cx, cy);
            n = random(1);
            if (n > 0.6) {
                let c = random(colors);
                stroke(c);
                fillHachure(-20, -20, 20, 20);
            } else if (n > 0.2) {
                let c1 = random(colors);
                stroke(c1);
                fillHachure(-20, -20, 20, 20);
                let c2 = random(colors);
                stroke(c2);
                fillHachure(-20, -20, 20, 20);
            } else if (n > 0.1){
                rotate(45)
                let c = random(colors);
                stroke(c);
                fillHachure(-18, -18, 18, 18);
            }else{
                rotate(45)
                let c1 = random(colors);
                stroke(c1);
                fillHachure(-20, -20, 20, 20);
                let c2 = random(colors);
                stroke(c2);
                fillHachure(-20, -20, 20, 20);
            }
            pop();
        }
        // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
    }
}
function fillHachure(xleft, ybottom, xright, ytop) {
    // the x coordinates of the border points of the hachure
    let xCoords = [xleft, xright, xright, xleft];
    // the y coordinates of the border points of the hachure
    let yCoords = [ytop, ytop, ybottom, ybottom];
    // the gap between two hachure lines
    let gap = 3.5;
    // the angle of the hachure in degrees
    let angle = 315;
    s.scribbleFilling(xCoords, yCoords, gap, angle);
}
