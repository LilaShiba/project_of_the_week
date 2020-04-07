class Movement {


    constructor(x, y, a, h) { //pulser has 4 arguments
    this.pos = createVector(x,y);
    this.vel = createVector(0,random(1,2));
    this.acc = createVector(0,0);
    this.mass = 5;
  }

    //Functions
    show(){
      this.vel.add(this.acc)
      // vel is change of pos over time
      this.pos.add(this.vel)
      this.acc.mult(0);



      fill(random(0,255), random(0,255), random(0,255), random(0,255));
      ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
      stroke(0);
  }

  edges(){
    if (this.pos.x > width + this.mass){
      this.pos.x = -this.mass
    } else if (this.pos.x < -this.mass){
      this.pos.x = width + this.mass
    }

    if (this.pos.y > height + this.mass){
      this.pos.y = -this.mass
    } else if (this.pos.y < -this.mass){
      this.pos.y = height + this.mass
    }
  }

  applyForce(force){
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f)
  }

}
