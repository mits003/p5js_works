let boundary;
let country_limit;
let padding = 20;

function preload() {
    // boundary = loadJSON("ne_110m_admin_0_countries_lakes.json"); // Natural Earth, ne_110m_admin_0_countries_lakes
    boundary = loadJSON("https://stat.neort.io/externalResource/c66q9nc3p9fe3sqpsj00.json"); // Natural Earth, ne_110m_admin_0_countries_lakes
}

function setup() {
    createCanvas(windowHeight * 1.9, windowHeight);
    background('#194350');
    noLoop();

    colorMode(HSB);

    let gradient = drawingContext.createLinearGradient(0,0, width,height);
    // Add three color stops
    gradient.addColorStop(0, '#8996ac');
    gradient.addColorStop(1, '#d2d9e1');

    // Set the fill style and draw a rectangle
    drawingContext.fillStyle = gradient;
    drawingContext.fillRect(0, 0, width, height);

    stroke('#f0f0f0')
    let features = boundary[0].features;
    for (let i =0; i < features.length; i++){
        fill(floor(random(0, 360)), 35, 75);
        drawCountries(features[i]);
    }
}

function drawCountries(feature) {
    let geom;
    let polygons;
    let coords;

    geom = feature.geometry;
    polygons = geom.coordinates;


    for (let j = 0; j < polygons.length; j++){
        coords = polygons[j][0];
        beginShape();
        for (var k = 0; k < coords.length; k++) {
            let lon = coords[k][0];
            let lat = coords[k][1];
            let x = map(lon, -185, 190, 0+padding, width-padding);
            let y = map(lat, -90, 90, height-padding, 0+padding);
            vertex(x,y);
        }
        endShape(CLOSE);
    }
}
