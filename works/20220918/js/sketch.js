let cp0 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp1 = ['#355070', '#6d597a', '#b56576', '#e56b6f', '#eaac8b'];
let cp2 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp5 = ['#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7'];
let cp6 = ['#5f0f40', '#9a031e', '#fb8b24', '#e36414', '#0f4c5c'];
let cp7 = ['#588b8b', '#f0f0f0', '#ffd5c2', '#f28f3b', '#c8553d'];
let colorPalette = [cp0, cp1, cp2, cp3, cp4, cp5, cp6, cp7];

let points = new Array;
let numSeedPoints = 1000;

let strokeWidth = 3;

function setup() {
    let canvas = createCanvas(600, 600);

    let cp = random(colorPalette);
    background(255);

    /* Initialize empty points array and colors/visited arrays */
    points = new Array();
    visited = new Array(width * height);
    colors = new Array(width * height);
    for (let i = 0; i < width * height; i++) {
        colors[i] = 0;
        visited[i] = false;
    }

    let seeds = new Array();

    for (let i = 0; i < numSeedPoints; i++) {
        x = floor(random(width));
        y = floor(random(height));
        seeds.push(createVector(x, y));
    }

    for (let i = 0; i < seeds.length; i++) {
        /* Generate color for seed point */
        let c = floor(random(cp.length));
        /* Seed it! */
        seed(seeds[i].x, seeds[i].y, c);
    }
    
    let condition = true;
    while (condition){
        /* If there are no points left in our 'points' array, we're done. */
        if (points.length == 0){
            condition = false;
            break;
        }

        /* Get a random point to process from the list, and get its color */
        let idx = floor(random(points.length));
        let p = points[idx];
        points.splice(idx, 1);

        let original = colors[p.y * width + p.x];
        
        /* Iterate over a 3x3-pixel grid around the original point */
        for (let i = p.x -1; i <= p.x + 1; i++) {
            for (let j = p.y -1; j <= p.y + 1; j++) {
                /* Ignore original point (center of 3x3-pixel grid) */
                if (i == p.x && j == p.y){
                    continue;
                }
                /* Ignore points that are outside the canvas. */
                if (i < 0 || i >= width || j < 0 || j >= height){
                    continue;
                }
                /* Ignore points that have already been visited */
                if (visited[j * width + i]){
                    continue;
                }
                else {
                    /* Mutate the color, save it, and mark point as visited */
                    colors[j * width + i] = original;
                    visited[j * width + i] = true;
                    points.push(createVector(i, j));
                    
                    /* Now just draw line from original point to neighbor */
                    stroke(cp[original]);
                    strokeWeight(strokeWidth);
                    line(p.x, p.y, i, j);
                }
            }
        }
        condition = true;
    }
}

function seed(x, y, c) {
    colors[y * width + x] = c;
    visited[y * width + x] = true;
    points.push(createVector(x, y, c));
}

function mouseClicked(){
    window.location.reload();
}

function keyPressed(){
    if (key == 's') {
    saveCanvas(canvas, 'image0', 'png')
    }
}