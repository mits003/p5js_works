// カラーパレット
let colors = ['#06AED5', '#086788', '#F0C808','#E77211', '#DD1C1A'];
// let colors =['#ee59ae', '#d95fbe', '#c065cb', '#a26cd5', '#7f72da', '#617cdf', '#3e85df', '#008cdc', '#0098d6', '#00a1c8', '#00a7b6', '#22aca3'];

let particles = [];
let particleNum = 150;
function setup() {
    // キャンバスサイズの設定
    createCanvas(600, 600);
    // 背景色を指定
    angleMode(DEGREES);
    
    for (let i =0; i < particleNum; i++){
        particles.push(new Particle());
    }
    
    noStroke()
    layer = createGraphics(width, height);
    layer.rectMode(CENTER)
    
    // setTimeout('saveCanvas(canvas, "myCanvas", "png")', 1000);
}

function draw() {
    background('#ffffff');
    for (let i = 0; i < particles.length; i++){
        particles[i].move();
        particles[i].display_straight();
    }
    for (let i = 0; i < particles.length; i++){
        particles[i].move();
        particles[i].display_inclined();
    }
    layer.noStroke();
    layer.fill(255)
    layer.ellipse(layer.width / 2, layer.height / 2, 300, 300);
    image(layer, 0, 0);
}

class Particle {
    constructor() {
        this.t = random(360);
        this.tStep = random(0.25, 1);
        
        this.a = 70 + random(-10, 10);
        this.r = random([4, 6, 8, 10,15, 20]);
        this.fillColor = random(colors);
    }
    
    move() {
        this.t += this.tStep;
    }
    
    display_straight() {
        this.x = (width / 2 + cos(this.t) ** 3 * 3 * this.a);
        this.y = (height / 2 + sin(this.t + 45) ** 3 * 3 * this.a);
        fill(this.fillColor)
        circle(this.x, this.y, this.r);
    }
    display_inclined() {
        this.x = (width / 2 + cos(this.t + 45) ** 3 * 3 * this.a);
        this.y = (height / 2 + sin(this.t) ** 3 * 3 * this.a);
        fill(this.fillColor)
        circle(this.x, this.y, this.r);
    }
}