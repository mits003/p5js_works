// カラーパレット
let colors = ['#81b214', '#ffcc29', '#f58634'];

let boundary;
let city_limit;
let padding = 20;

function preload() {
    boundary = loadJSON("hokkaido.geojson");
}

function setup() {
    createCanvas(windowHeight, windowHeight);
    background(255, 233, 186);
    noLoop();

    city_limit = getBoundingBox(boundary);

}

// getBoundingBox adapted from http://mikefowler.me/journal/2014/06/10/drawing-geojson-in-a-canvas

function getBoundingBox (boundary) {
    let bounds = {};
    let coords,latitude, longitude;
    let data = boundary[0].features[0].geometry.coordinates[0];


    for (var i = 0; i < data.length; i++) {
        coords = data[i];

        for (var j = 0; j < coords.length; j++) {
        longitude = coords[0];
            latitude = coords[1];
            bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
            bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
            bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
            bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
        }
    }
    return bounds;
}


function draw() {

    let data = boundary[0].features[0].geometry.coordinates[0];
    noStroke();
    fill(175, 173, 168);
    beginShape();
    for (var i = 0; i < data.length; i++) {
    let lon = boundary[0].features[0].geometry.coordinates[0][i][0];
    let lat = boundary[0].features[0].geometry.coordinates[0][i][1];

    let x = map(lon, city_limit.xMin, city_limit.xMax, 0+padding, width-padding);
    let y = map(lat,city_limit.yMin, city_limit.yMax, height-padding, 0+padding);

    vertex(x,y);
    }
    endShape(CLOSE);
}