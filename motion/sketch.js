let population = [];
let blackhole;
let movement;
let gravity;

function setup() {
  createCanvas(800, 800);
  blackhole = new Gravity()
  for(let i = 0; i < 220; i++){
    population[i] = new Movement(random(100,150), random(100,150));
  }
}

function draw() {
  background(0);
  blackhole.display()
  for (m of population){
    let force = blackhole.calculateAttraction(m)
    m.applyForce(force)
    m.show()
    //m.edges()


  }
}
