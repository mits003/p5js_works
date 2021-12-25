// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];


let pal1 = ["#F2163E", "#0F2859", "#0ABFAD", "#F2A20C", "#F24F13"];
let pal2 = ["#025E73", "#6FBFBF", "#0D0C18", "#E9E8E8", "#F28379"];

setup = _ => {
    createCanvas((w = windowHeight / 1.2), w);
    // frameRate(1);
    pixelDensity(2);
   noLoop();
}
draw = _ => {
    let col1 = color(random(180, 250), random(10, 255), random(190,255));
    let col2 = color(random(150, 25), random(125, 20), random(100, 250));
    for (let w = 0; w < windowWidth; w += 1100) {
        let c = lerpColor(col1, col2, w / width);
        fill(c);
        noStroke();
        rect(w, 0, width, height);
    }

    noStroke();
    dr_steps = random(50, 110);
    for (let tate = 0; tate < height; tate += dr_steps) {
        for (let yoko = 0; yoko < width; yoko += dr_steps) {
            push();
            translate(yoko, tate);
            // pattern001();
            // pattern002();
            // pattern003();
            pop();
        }
    }
}
pattern001 = _ => {
    let a = 0.0;
    let step = 1.2;
    let ranA = random(100);
    let inc = TWO_PI / ranA;
    let mxr = width / 2;
    beginShape();
    for (let a = 0; a <= TWO_PI; a += step) {
        let vx = 100 * cos(a); let vy = 100 * sin(a);
        let xoff = map(cos(a), -1, 1, random(20211130), 2);
        let yoff = map(sin(a), -1, 1, random(20211130), 2);
        let vr = map(noise(xoff, yoff), 0, 1, mxr / 2, mxr);
        let gradient = drawingContext.createLinearGradient(0, 0, random(vx), vr);
        let gdPal1 = random(pal1);
        let gdPal2 = random(pal2);
        // blendMode(SOFT_LIGHT);
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(0.5, colors[1]);
        gradient.addColorStop(1, colors[2]);
        drawingContext.fillStyle = gradient;
        // vertex(vr / 1.5 * sin(a), vr / 1.5 * cos(a));
        // vertex(vr / 220.5 * sin(a), 2.5 * cos(a));
        rotate(PI / random(2));
    }
    endShape(CLOSE);
    a = a + inc;
}


function mouseClicked(){
    saveCanvas(canvas, 'myCanvas', 'png');
    window.location.reload();
}