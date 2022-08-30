// カラーパレット
let colors = ['#FF5F5F', '#F8907C', '#FFC2A7', '#FFEC57', '#9EF2BB', '#6CBAF4', '#4AD0E8'];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    // let canvas = createCanvas(windowWidth, windowHeight);

    // 背景色を指定
    background('#206a5d');

    // voronoiRndSites(30, 50, random(colors));
    // voronoiSites([[5, 5, colors[0]], [10, 5, colors[1]], [15, 5, colors[2]]]);
    voronoiSiteFlag(false);
    voronoiCellStroke('#fff');
    voronoiCellStrokeWeight(6);

    // let cx = random(0, width);
    let cy = random([0, width/random(5)]);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
		voronoiSite(i * 10, j * 10 + cy, random(colors));
        }
	}
    voronoi(width, height, false);

    voronoiDraw(0, 0)

}


function mouseClicked(){
    // saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}