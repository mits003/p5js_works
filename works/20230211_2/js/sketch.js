// カラーパレット
let cp1 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp2 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let colorPalette = [cp1, cp2, cp3, cp4];

let agents;
let agentNum = 1000;

let seed = 2000;
let rSeed;

function setup() {
    let canvas = createCanvas(500, 500);
    // color setting
    background('#f7f7f7');

    rSeed = int(random(seed));
    console.log(rSeed);
    randomSeed(rSeed);
    noiseSeed(rSeed);
    let colors = random(colorPalette);

    agents = Array(agentNum);
    for (let i = 0; i < agents.length; i ++){
        agents[i] = new Agent(width, height, colors);
    }
    for (let i = 0; i < agents.length; i ++) {
        agents[i].display();
    }
}

function mouseClicked(){
    window.location.reload();
}

function keyPressed(){
    if(key == 's'){
        var scripts = document.getElementsByTagName("sketch").src
        console.log(scripts)
        saveCanvas(canvas, 'image_'+rSeed, 'png');
    }
}


