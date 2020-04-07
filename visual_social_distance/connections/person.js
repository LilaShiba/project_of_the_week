class Person {

    // init
    constructor(x, y, a, h) { //pulser has 4 arguments
    this.pos = createVector(x,y);
    this.age = a;
    this.health = h;
    this.speed = 1;
    this.vel = p5.Vector.random2D()
    this.acc = createVector(0,0);
    this.mass = random(7,12);
    this.searched = false;
    this.uv = [];
  }

    //Functions
    show() {
    if (this.health > 20){
      fill(0, 255, 0)}

    else{
      fill(255,0,0)
      if (this.age < 30){
        fill(255,255,0)
      }
    }
    ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
  }

    update() {
    // add vel to postion
    this.pos.add(this.vel);
    // add acc to vel
    this.vel.add(this.acc);
    this.acc.mult(0)
  }

    move() {
    this.pos.x += random(-this.speed, this.speed);
    this.pos.y += random(-this.speed, this.speed);
  }

    edges(){
    // left / right
    if (this.pos.x > width + this.mass){
      this.pos.x = -this.mass;
    } else if (this.pos.x < -this.mass){
      this.pos.x = width + this.mass;
    }
    // up / down
    if (this.pos.y > height + this.mass){
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.mass){
      this.pos.y = height + this.mass;
    }
  }

    touch(other){
    let d = dist(this.pos.x, this.pos.y, other.pos.x,   other.pos.y);
    if (d < 10){
      let sick = random(0,100)
      if (sick > 75){
       this.health -= 10;
      }
    }
  }

    show_connections(){
      for(let u of this.uv){
        console.log(u.pos.x)
        line(this.pos.x, this.pos.y, u.pos.x, u.pos.y);
        stroke(126);
      }
    }
}
