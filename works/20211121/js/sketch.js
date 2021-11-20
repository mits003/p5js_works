// カラーパレット
let cp1 = ['#395f85', '#45a17f', '#8996ac','#8aaea9', '#3f8b92'];
let cp2 = ['#004f7a', '#7a8a92', '#423a57', '#dce5ec', '#9a7fb8'];
let cp3 = ['#5690c7', '#f1f8f7', '#7d7f7f', '#fdde83', '#649f44'];
let cp4 = ['#e2515a', '#5ba6b5', '#edce57', '#878f93', '#814336'];
let cp5 = ['#cacda5', '#ccb68c', '#8599b3', '#90972e', '#b7cccf', '#008a82'];
let colorPalette = [cp1, cp2, cp3, cp4, cp5];

let BASE_H = 45;
let BASE_S = 20;
let BASE_B = 100;

let boundary;
let country_limit;
let padding = 20;

function preload() {
    // boundary = loadJSON("ne_110m_admin_0_countries_lakes.json"); // Natural Earth, ne_110m_admin_0_countries_lakes
    boundary = loadJSON("https://stat.neort.io/externalResource/c66q9nc3p9fe3sqpsj00.json"); // Natural Earth, ne_110m_admin_0_countries_lakes
}

function setup() {
    createCanvas(windowHeight * 1.9, windowHeight);
    noLoop();

    let gradient = drawingContext.createLinearGradient(0,0, width,height);
    gradient.addColorStop(0, '#efd7a3');
    gradient.addColorStop(0.5, '#e1ddc3');
    gradient.addColorStop(1, '#efd7a3');
    drawingContext.fillStyle = gradient;
    drawingContext.fillRect(0, 0, width, height);

    colorMode(HSB, 360, 100, 100, 100);
    texturize(BASE_H, 5000);

    let geom;
    let polygons;
    let coords;
    let features = boundary[0].features;

    for (var i = 0; i < features.length; i++) {
        geom = features[i].geometry;
        polygons = geom.coordinates;

        stroke(random(random(colorPalette)));

        for (let j = 0; j < polygons.length; j++){
            coords = polygons[j][0];
            let s = new Scribble();
            let xCoords = new Array();
            let yCoords = new Array();
            beginShape();
            for (var k = 0; k < coords.length; k++) {
                let lon = coords[k][0];
                let lat = coords[k][1];
                let x = map(lon, -190, 190, 0+padding, width-padding);
                let y = map(lat, -90, 90, height-padding, 0+padding);
                vertex(x,y);
                xCoords.push(x);
                yCoords.push(y);
            }
            endShape(CLOSE);
            s.scribbleFilling(xCoords, yCoords, random(5, 8), random(0, 360));
        }
    }
}

function texturize(base_h, density){
    for(let i = 0; i < density; i++) {
        stroke(base_h,
            BASE_S - random(-5, 8),
            BASE_B - random(8),
            random(75, 85));

        let x1 = random(width);
        let y1 = random(height);
        let theta = random(360);
        let segmentLength = random(10, 15);
        let x2 = cos(theta) * segmentLength + x1;
        let y2 = sin(theta) * segmentLength + y1;

        line(x1, y1, x2, y2);
    }
}

function mouseClicked(){
    window.location.reload();
}