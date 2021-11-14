// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

let boundary;
let city_limit;
let padding = 20;

function preload() {
    boundary = loadJSON("https://stat.neort.io/externalResource/c65jj0s3p9fe3sqps730.json"); // 国土数値情報
    // boundary = loadJSON("N03-21_01_210101.json"); // 国土数値情報
}

function setup() {
    createCanvas(600, 600);
    background('#81b214');
    noLoop();

    city_limit = getBoundingBox(boundary);
}

// getBoundingBox adapted from http://mikefowler.me/journal/2014/06/10/drawing-geojson-in-a-canvas

function getBoundingBox (boundary) {
    let bounds = {};
    let coords,latitude, longitude;
    let features = boundary[0].features;

    for (var i = 0; i < 10; i++) {
        geom = features[i].geometry;

        for (let k = 0; k < features.length; k++){
            coords = geom.coordinates[0];
    
            for (var j = 0; j < coords.length; j++) {
                longitude = coords[j][0];
                latitude = coords[j][1];
                bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
                bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
                bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
                bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
            }
        }
    }
    return bounds;
}


function draw() {
    let coords
    let features = boundary[0].features;

    for (var i = 0; i < 10; i++) {
        geom = features[i].geometry;
        coords = geom.coordinates[0];

        stroke('#f0f0f0')
        fill('#cccdcf');

        beginShape();
        for (var j = 0; j < coords.length; j++) {
            let lon = coords[j][0];
            let lat = coords[j][1];

            let x = map(lon, city_limit.xMin, city_limit.xMax, 0+padding, width-padding);
            let y = map(lat,city_limit.yMin, city_limit.yMax, height-padding, 0+padding);

            vertex(x,y);
            }
        endShape(CLOSE);
    }
}