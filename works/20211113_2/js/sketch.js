let boundary;
let country_limit;
let padding = 20;

function preload() {
    boundary = loadJSON('ne_110m_land.json'); // Natural Earth, ne_110m_land
    // boundary = loadJSON(''); // Natural Earth, ne_110m_land
}

function setup() {
    createCanvas(windowHeight * 1.9, windowHeight);
    background('#194350');
    noLoop();

    colorMode(HSB, 360, 100, 100, 100);
    let gradient = drawingContext.createLinearGradient(0,0, width,height);
    // Add three color stops
    gradient.addColorStop(0, '#fff');
    gradient.addColorStop(1, '#d2d9e1');

    // Set the fill style and draw a rectangle
    drawingContext.fillStyle = gradient;
    drawingContext.fillRect(0, 0, width, height);

    stroke('#f0f0f0')
    let features = boundary[0].features;
    for (let i =0; i < features.length; i++){
        drawCountries(features[i]);
    }
}

function drawCountries(feature) {
    let geom;
    let polygons;
    let coords;

    let dcx = drawingContext
    let country = new Path2D();

    // Shadow
    dcx.shadowColor = color(0, 0, 0, 25);
    dcx.shadowOffsetX = 10;
    dcx.shadowOffsetY = 10;

    geom = feature.geometry;
    polygons = geom.coordinates;

    for (let j = 0; j < polygons.length; j++){
        coords = polygons[j][0];
        for (var k = 0; k < coords.length; k++) {
                let lon = coords[k][0];
                let lat = coords[k][1];
                let x = map(lon, -185, 190, 0+padding, width-padding);
                let y = map(lat, -90, 90, height-padding, 0+padding);
                if (k == 0){
                    country.moveTo(x, y);

                }else{
                    country.lineTo(x, y);
                }
            }
        country.closePath();
        }
    dcx.fillStyle = '#83a749';
    dcx.fill(country, 'evenodd');
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
        let segmentLength = random(2, 7);
        let x2 = cos(theta) * segmentLength + x1;
        let y2 = sin(theta) * segmentLength + y1;

        line(x1, y1, x2, y2);
    }
}