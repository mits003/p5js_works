function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    // 背景色を指定
    background('#cdca5a');

    // 縞模様を描画
    let numLines = 70;
    for (let i = 0; i <= numLines; i++) {
        strokeWeight(2);
        for (let j = 0; j < numLines; j++) {
            stroke('#008a82');
            // 左上からのライン
            line(0, 0, width, (height * j) / numLines);
            // line(0, 0, (width * i) / numLines, height);
            // 左下からのライン
            line(0, height, width, (height * j) / numLines);
            // line(0, height, (width * i) / numLines, 0);
            // 右上からのライン
            // line(width, 0, 0, (height * j) / numLines);
            // line(width, 0, (width * i) / numLines, height);
            // 右下からのライン
            // line(width, height, 0, (height * j) / numLines);
            // line(width, height, (width * i) / numLines, 0);

        }
    }

    let pg = createGraphics(width, height);
    pg.background('#cdca5a');


    let div = 9;
    let dSmall = 30;
    let offset = width / 10;
    let w = (width - offset * 2) / div;
    let h = (height - offset * 2) / div;
    for (let j = 0; j < div; j++) {
        for (let i = 0; i < div; i++) {
            let x = offset + i * w;
            let y = offset + j * h;
            let cx = x + w / 2;
            let cy = y + h / 2;

            pg.push();
            pg.erase();
            pg.translate(cx, cy);
            pg.ellipse(0, 0, dSmall);
            pg.noErase();
            pg.pop();
        }
    }
    image(pg, 0, 0);

    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
}
