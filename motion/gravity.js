class Gravity {

  constructor(){
    this.pos = createVector(width/2, height/2);
    this.mass = 20;
    this.G = 6.687;
  }

  calculateAttraction(m){
    // direction of force
    let force = p5.Vector.sub(this.pos, m.pos);
    // distance between objects
    let distance = force.mag();
    distance = constrain(distance, 5,100)
    // remove extremes
    force.normalize();
    // gravitional force
    let strength = (this.G * this.mass * m.mass)/(distance*distance)
    force.mult(strength);
    return force;
  }

  display(){
    ellipseMode(CENTER);
    fill(0)
    ellipse(this.pos.x, this.pos.y, this.mass*2,this.mass*2);
  }

}
