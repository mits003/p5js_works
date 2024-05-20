// カラーパレット
let cp1 = ["#395f85", "#45a17f", "#8996ac", "#8aaea9", "#3f8b92"];
let cp2 = ["#004f7a", "#7a8a92", "#423a57", "#dce5ec", "#9a7fb8"];
let cp3 = ["#5690c7", "#f1f8f7", "#7d7f7f", "#fdde83", "#649f44"];
let cp4 = ["#e2515a", "#5ba6b5", "#edce57", "#878f93", "#814336"];
let cp5 = ["#cacda5", "#ccb68c", "#8599b3", "#90972e", "#b7cccf", "#008a82"];
let colorPalette = [cp1, cp2, cp3, cp4, cp5];

let boundary;
let country_limit;
let padding = 20;

function preload() {
  // boundary = loadJSON("ne_110m_admin_0_countries_lakes.json"); // Natural Earth, ne_110m_admin_0_countries_lakes
  //   boundary = loadJSON("./../ne_110m_admin_0_countries_lakes.json");
  boundary = loadJSON(
    "https://stat.neort.io/externalResource/c66q9nc3p9fe3sqpsj00.json"
  );
  // Natural Earth, ne_110m_admin_0_countries_lakes
}

function setup() {
  createCanvas(windowHeight * 1.9, windowHeight);
  noLoop();
  //   fill("#efd7a3");
  //   text(boundary[0].name, 130, 200);

  //   let gradient = drawingContext.createLinearGradient(0, 0, width, height);
  //   gradient.addColorStop(0, "#efd7a3");
  //   gradient.addColorStop(0.5, "#e1ddc3");
  //   gradient.addColorStop(1, "#efd7a3");
  //   drawingContext.fillStyle = gradient;
  //   drawingContext.fillRect(0, 0, width, height);

  //   colorMode(HSB, 360, 100, 100, 100);
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
      drawingContext.beginPath();
      for (let k = 0; k < coords.length; k++) {
        let lon = coords[k][0];
        let lat = coords[k][1];
        let x = map(lon, -190, 190, 0 + padding, width - padding);
        let y = map(lat, -90, 90, height - padding, 0 + padding);
        xCoords.push(x);
        yCoords.push(y);
        if (k == 0) {
          drawingContext.moveTo(x, y);
          console.log(x);
          console.log("==========================");
        } else {
          drawingContext.lineTo(x, y);
          console.log(x);
        }
      }
      drawingContext.closePath();
      drawingContext.stroke();
      drawingContext.restore();
      s.scribbleFilling(xCoords, yCoords, random(2, 5), random(0, 360));
      drawingContext.clip();
    }
  }
}

function mouseClicked() {
  window.location.reload();
}
