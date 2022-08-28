// カラーパレット
let colors = ['#FF5F5F', '#F8907C', '#FFC2A7', '#FFEC57', '#9EF2BB', '#6CBAF4', '#4AD0E8'];

function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(920, 450);

    let gStripe = createGraphics(width, height);
    let stripeNum = colors.length * 4;
    let stripeW = width / stripeNum;
    for (let i = 0; i < stripeNum; i++){
            gStripe.fill(colors[Math.floor(i % colors.length)]);
            gStripe.noStroke();
            gStripe.rect(Math.floor(i * stripeW), 0, stripeW+10, height);
        }
        gStripe.erase();
        gStripe.triangle(width, 0, 0, height, width, height);
        gStripe.noErase();
    
        let gBorder = createGraphics(width, height);
        let borderNum = colors.length * 4;
        // let borderH = width / borderNum;
        let borderH = height / borderNum;
        for (let i = borderNum ; i >= 0; i--){
                gBorder.fill(colors[Math.floor(i % colors.length)]);
                gBorder.noStroke();
                gBorder.rect(0, Math.floor((borderNum - i) * borderH) - borderH, width, borderH+5);
                // console.log(Math.floor((borderNum - i) * borderH));
            }
            gBorder.erase();
            gBorder.triangle(0, 0, 0, height, width, 0);
            gBorder.noErase();
        
            image(gBorder, 0, 0);
            image(gStripe, 0, 0);
        }


function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png');
    // window.location.reload();
}