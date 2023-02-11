// カラーパレット
let cp1 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let cp2 = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
let cp3 = ['#390099', '#9e0059', '#ff0054', '#ff5400', '#ffbd00'];
let cp4 = ['#a31621', '#bfdbf7', '#053c5e', '#1f7a8c', '#db222a'];
let colorPalette = [cp1, cp2, cp3, cp4];

let circles = [];


function setup() {
    // キャンバスサイズの設定
    let canvas = createCanvas(600, 600);
    // 背景色を指定
    background('#f7f7f7');
    let colors = random(colorPalette);

    let protect = 0;
    while (circles.length < 20){
        let valueA = random() * random();
        let r = map(1 - valueA, 0, 1, 30, 60);
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
        if(protect > 1000){
            break
        }
    }
    
    for(let i = 0; i < circles.length; i++){
        let c = random(colors);
        fill(c);
        noStroke();
        if (random() < 0.05){
            noFill();
            stroke(c)
        }
        push();
        let pointNum = int(random(5, 15));
        translate(circles[i].x, circles[i].y);
        rotate(-PI/random());
        let pointR;
        if(circles[i].r < 80){
            pointR = 2;
        } else {
            pointR = 3;
        }
        for(let k = 0; k < 15; k++){
            rotate(-PI/pointNum/2);
            for(let j = 0; j < pointNum; j++){
                ellipse(circles[i].r*2/8*(k) * cos(TWO_PI/pointNum*j), circles[i].r*2/8*(k) * sin(TWO_PI/pointNum*j), (k+pointR));
            }
        }
        pop();
    }
}    


function mouseClicked(){
    window.location.reload();
}