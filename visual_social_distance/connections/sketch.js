let population = [];
let person;

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 50; i++){
    let x = random(0,400);
    let y = random(0,400);
    let a = random(0,100);
    let h = random(0,200);

    population[i] = new Person(x,y,h,a);
  }

  for (u of population){
    let n = Math.floor(Math.random()*50)
    let o = Math.floor(Math.random()*50)
    let p = Math.floor(Math.random()*50)
    u.uv.push(population[n])
    u.uv.push(population[o])
    u.uv.push(population[p])
  }
}


function draw() {
  background(220);

  for(p of population){
    p.show()
    console.log(p.uv)
    p.show_connections()
    p.update()
    p.edges()
    for(pp of population){
      if (p != pp){
      pp.touch(p)
      }
    }

  }
}
