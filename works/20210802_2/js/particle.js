function Particle(left, right, top, bottom) {
    this.pos = createVector(random(width), random(height));
    // this.pos = createVector(random(left, right), random(top, bottom));
    // this.pos = createVector(right, top);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 4;
    this.prevPos = this.pos.copy();

    this.alpha_v = 30;

    this.left_x = int(-width * 0);
    this.right_x = int(width * 1);
    this.top_y = int(-height * 0);
    this.bottom_y = int(height * 1);

    this.update = function () {
        // this.vel.add(this.center);
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };

    this.follow = function (vectors) {
        let x = floor(this.pos.x / scl);
        let y = floor(this.pos.y / scl);
        let index = x + y * cols;
        let force = vectors[index];
        this.applyForce(force);
    };

    this.applyForce = function (force) {
        this.acc.add(force);
    };

    this.show = function () {
        // stroke(c.r, c.g, c.b, this.alpha_v)
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    };

    this.updatePrev = function(){
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;

    }

    this.edges = function () {
        if (this.pos.x > this.right_x) {
            this.pos.x = this.left_x;
            this.updatePrev();
        }
        if (this.pos.x < this.left_x){
            this.pos.x = this.right_x;
            this.updatePrev();
        }
        if (this.pos.y > this.bottom_y){
            this.pos.y = this.top_y;
            this.updatePrev();
        }
        if (this.pos.y < this.top_y){
            this.pos.y = this.bottom_y;
            this.updatePrev();
        }
    };
}
