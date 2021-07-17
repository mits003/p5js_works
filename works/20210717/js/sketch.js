// color pallete
let colors_m = ['#BDE798', '#D1EEB7', '#A0D372'];
let colors_c = ['#B2A2CD', '#775EA1', '#927EB6'];
let colors_o = ['#557E97', '#9BB6C6', '#7497AC'];
// let colors_m = ['#f7b749', '#fff170', '#ffe56d'];
// let colors_c = ['#f9f063', '#fff170', '#ffe56d'];
// let colors_o = ['#bbcce2', '#78add0', '#6a9fd5'];

let r; //radius
let angle;
let step; //distance between steps in radians

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);

    //initialize variables
    r_m = 180;
    r_o = r_m + 30;
    r_c = r_m - 80;
    angle = 0;
    steps = 10;
    // r_m = 200;
    // r_o = r_m + 30;
    // r_c = r_m - 80;
    // angle = 0;
    // steps = 20;
    step = TWO_PI / steps; //in radians equivalent of 360/6 in degrees
    background('#FFFAF6');

    for (let i = 0; i < steps; i++) {
        //increase angle by step size
        angle = i * step;
        let x_m = r_m * sin(angle) + width / 2;
        let y_m = r_m * cos(angle) + height / 2;
        let x_o = r_o * sin(angle + step / 2) + width / 2;
        let y_o = r_o * cos(angle + step / 2) + height / 2;
        let x_c = r_c * sin(angle + step / 2) + width / 2;
        let y_c = r_c * cos(angle + step / 2) + height / 2;
        voronoiSite(x_m, y_m, random(colors_m));
        voronoiSite(x_o, y_o, random(colors_o));
        voronoiSite(x_c, y_c, random(colors_c));
    }

    //Set Cell Stroke Weight
    voronoiCellStrokeWeight(3);
    //Set Site Stroke Weight
    voronoiSiteStrokeWeight();
    //Set Cell Stroke
    voronoiCellStroke('#ffffff');
    //Set Site Stroke
    voronoiSiteStroke(0);
    //Set flag to draw Site
    voronoiSiteFlag(false);
    voronoi(width, height, true);

    //Draw diagram in coordinates 0, 0
    // voronoiDraw(-width / 2, -height / 2, true, false);
    voronoiDraw(0, 0, true, false);

    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 3000);
}
