let points = new Array;
let numSeedPoints = 50;

let perturbation = 1;
let redBias = 0;
let greenBias = 0;
let blueBias = 0;
let whiteBias = 0;
let blackBias = 0;
let hueBias = 0;
let saturationBias = 0;
let brightnessBias = 0;

let strokeWidth = 3;

function setup() {
    let canvas = createCanvas(600, 600);
    // let canvas = createCanvas(200, 200);
    background('#206a5d');

    colorMode(HSB, 360, 100, 100, 100);
    background(255);

    /* Initialize empty points array and colors/visited arrays */
    points = new Array();
    visited = new Array(width * height);
    colors = new Array(width * height);
    for (let i = 0; i < width * height; i++) {
        colors[i] = color(255);
        visited[i] = false;
    }

    let seeds = new Array();

    seeds.push(createVector(0, 0));
    // for (let i = 0; i < numSeedPoints; i++) {
    //     x = floor(random(width));
    //     y = floor(random(height));
    //     seeds.push(createVector(x, y));
    // }

    for (let i = 0; i < seeds.length; i++) {
        /* Generate color for seed point */
        let c = floor(random(360));
        /* Seed it! */
        seed(seeds[i].x, seeds[i].y, c);
    }
    
    let condition = true;
    while (condition){
        /* If there are no points left in our 'points' array, we're done. */
        if (points.length == 0){
            condition = false;
            console.log(condition);
            break;
        }

        /* Get a random point to process from the list, and get its color */
        let idx = floor(random(points.length));
        let p = points[idx];
        points.splice(idx, 1);

        let original = colors[p.y * width + p.x];
        
        /* Iterate over a 3x3-pixel grid around the original point */
        for (let i = p.x; i <= p.x + 1; i++) {
            for (let j = p.y; j <= p.y + 1; j++) {
                /* Ignore original point (center of 3x3-pixel grid) */
                if (i == p.x && j == p.y)
                continue;
                /* Ignore points that are outside the canvas. */
                if (i < 0 || i >= width || j < 0 || j >= height)
                continue;
                /* Ignore points that have already been visited */
                if (visited[j * width + i])
                continue;
                
                /* Mutate the color, save it, and mark point as visited */
                let col = mutate(original);
                colors[j * width + i] = col;
                visited[j * width + i] = true;
                points.push(createVector(i, j));
                
                /* Now just draw line from original point to neighbor */
                stroke(col);
                strokeWeight(strokeWidth);
                ellipse(p.x, p.y, 1);
            }
        }
        condition = true;
    }
}

function seed(x, y, c) {
    colors[y * width + x] = color(c, 80,75, 20);
    visited[y * width + x] = true;
    points.push(createVector(x, y, c));
}

function mutate(c){
    let h = randomGaussian() * perturbation +  hue(c) + hueBias;
    h = h % 360;
    let ret = color(
        h, 
        randomGaussian() * perturbation +  saturation(c) + saturationBias - whiteBias + blackBias, 
        randomGaussian() * perturbation +  brightness(c) + brightnessBias + whiteBias - blackBias);
    return ret;
}

function mouseClicked(){
    window.location.reload();
}

function keyPressed(){
    if (key == 's') {
    saveCanvas(canvas, 'image0', 'png')
    }
}