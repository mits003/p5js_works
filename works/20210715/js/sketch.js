// カラーパレット
// let colors = ['#4fa557', '#e7a9ca', '#f9f063', '#e6efc4', '#aace3f'];
let colors = ['#f7b749', '#fff170', '#bbcce2', '#78add0']

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    
    // 背景色を指定
    background('#FFFAF6');

    // 各種設定
    noSmooth()
    // translate(30, 0)
    //Settings for drawing(these are the default values)

    //Set Cell Stroke Weight
    voronoiCellStrokeWeight(5);
    //Set Site Stroke Weight
    voronoiSiteStrokeWeight(1);
    //Set Cell Stroke
    voronoiCellStroke('#ffffff');
    //Set Site Stroke
    voronoiSiteStroke(0);
    //Set flag to draw Site
    voronoiSiteFlag(false);

    // //Add custom site with coordinates
    for (var i = 0; i <= 20; i++) {
        for (var j = 0; j <= 20; j++){
            n = i % 2
            if(n === 0){
                voronoiSite(i * 30, j * 30 + 15, random(colors));
            }else{
                voronoiSite(i * 30 + 15, j * 30, random(colors));

            }
        }
    }

	//Compute voronoi diagram with size 700 by 500
	//With a prepared jitter structure (true)
	voronoi(600, 600, true);

	//Draw diagram in coordinates 0, 0
	//Filled and without jitter
	voronoiDraw(0, 0, true, false);

    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 3000);
}
