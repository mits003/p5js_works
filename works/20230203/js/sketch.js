// カラーパレット
let cp0 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp2 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp6 = ['#5f0f40', '#9a031e', '#fb8b24', '#e36414', '#0f4c5c'];
let colorPalette = [cp0, cp2, cp3, cp4, cp6];

let circles = [];


function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    // 背景色を指定
    background('#f7f7f7');
    let colors = random(colorPalette);

    let protect = 0;
    while (circles.length < 100){
        let valueA = random() * random();
        let r = map(1 - valueA, 0, 1, 10, 150);
        let circle = {
            'x':random(20, width-20),
            'y':random(20, height-20),
            'r' : r
        }
        
        let overlapping = false;
        for(let j = 0; j < circles.length; j++){
            let other = circles[j];
            let d = dist(circle.x, circle.y, other.x, other.y);
            if(d < (circle.r + other.r)/10){
                overlapping = true;
                break;
            }
        }
        
        if(!overlapping){
            circles.push(circle);
        }

        protect++;
        if(protect > 100000){
            break
        }
    }
    
    for(let i = 0; i < circles.length; i++){
        let c = random(colors);
        // ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
        fill(c);
        noStroke();
        if (random() < 0.05){
            noFill();
            stroke(c)
        }
        push();
        let pointNum = int(random(4, 7));
        translate(circles[i].x, circles[i].y);
        rotate(-PI/random());
        let pointR;
        if(circles[i].r < 30){
            pointR = 2;
        } else if (circles[i].r < 50){
            pointR = 3;
        } else if (circles[i].r < 80){
            pointR = 5;
        } else {
            pointR = 8;
        }
        for(let k = 0; k < 50; k++){
            rotate(-PI/pointNum/2);
            for(let j = 0; j < pointNum; j++){
                ellipse(circles[i].r*2/15*(k+3) * cos(TWO_PI/pointNum*j), circles[i].r*2/15*(k+3) * sin(TWO_PI/pointNum*j), (k+pointR));
            }
        }
        pop();
    }
}    


function mouseClicked(){
    window.location.reload();
}