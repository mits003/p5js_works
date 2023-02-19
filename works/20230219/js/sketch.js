// color palettes
let cp1 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp2 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let colorPalette = [cp1, cp2, cp3, cp4];

let seed = 2000;
let agentNum = 1000;

function setup() {
    let canvas = createCanvas(600, 600);
    background('#f7f7f7');

    rSeed = int(random(seed));
    
    for (let j = 0; j < 2; j++){
        for(let i = 0; i < 2; i++){
            let colors = colorPalette[i+j*2];
    
            // generate a p5.Graphics instance
            graphics = createGraphics(width/2, height/2);
    
            // generate a random seed 
            graphics_seed = random(1000);
    
            // initialize the p5.Graphic instance
            graphics.clear();
            
            // give the agents array to the p5.Graphic instance and draw them
            agents = Array(agentNum);
            drawGraphics(300*i, 300*j, graphics, graphics_seed, colors, agents);
    
            // put the p5.Graphics in the canvas
            image(graphics, 300*i, 300*j);
    
            // Removes a Graphics object from the page and frees any resources associated with it.
            graphics.remove();
        }
    }
}

// put agents in a p5.Graphics instance 
function drawGraphics(originX, originY, target, seed, colors, agents) {
    target.noiseSeed(seed);
    for (let i = 0; i < agents.length; i ++){
        agents[i] = new Agent(originX, originY, target.width, target.height, random(colors));
    }
    for (let i = 0; i < agents.length; i ++) {
        agents[i].display();
    }
}

// reload and generate the canvas
function mouseClicked(){
    window.location.reload();
}

// save the canvas
function keyPressed(){
    if(key == 's'){
        var scripts = document.getElementsByTagName("sketch").src
        console.log(scripts)
        saveCanvas(canvas, 'image_'+rSeed, 'png');
    }
}