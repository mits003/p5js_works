let boundary;
let cities;
let pin;
let country_limit;
let padding = 20;

function preload() {
  boundary = loadJSON(
    "https://stat.neort.io/externalResource/c66q9nc3p9fe3sqpsj00.json"
    // Natural Earth, ne_110m_admin_0_countries_lakes
  );
  cities = loadTable("./cities.csv", "csv", "header");
  pin = loadImage("./location-pin_25.png");
}

function setup() {
  createCanvas(windowHeight * 1.9, windowHeight);
  noLoop();
}
function draw() {
  let geom;
  let polygons;
  let coords;
  let features = boundary[0].features;
  console.log(features.length);

  for (let i = 0; i < features.length; i++) {
    geom = features[i].geometry;
    polygons = geom.coordinates;

    stroke(50);

    for (let j = 0; j < polygons.length; j++) {
      coords = polygons[j][0];
      let s = new Scribble();
      let xCoords = new Array();
      let yCoords = new Array();
      let country = new Path2D();
      for (let k = 0; k < coords.length; k++) {
        let lon = coords[k][0];
        let lat = coords[k][1];
        let x = map(lon, -190, 190, 0 + padding, width - padding);
        let y = map(lat, -90, 90, height - padding, 0 + padding);
        xCoords.push(x);
        yCoords.push(y);
        if (k == 0) {
          country.moveTo(x, y);
        } else {
          country.lineTo(x, y);
        }
      }
      strokeWeight(0.5);
      s.scribbleFilling(xCoords, yCoords, 4.5, random(0, 360));
      country.lineTo(xCoords[0], yCoords[0]);
    }
  }
  for (let r = 0; r < cities.getRowCount(); r++) {
    let lat = float(cities.getString(r, "lat"));
    let lon = float(cities.getString(r, "lon"));
    let name = cities.getString(r, "Address");
    let x = map(lon, -190, 190, 0 + padding, width - padding);
    let y = map(lat, -90, 90, height - padding, 0 + padding);
    image(pin, x - 12.5, y - 25);
  }
}

function mouseClicked() {
  window.location.reload();
}
