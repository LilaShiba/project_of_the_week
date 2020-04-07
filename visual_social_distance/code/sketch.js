let population = [];
let person;
let social_distance = false;

function setup(){
  createCanvas(400, 400);
 // jumbo-canvas is a string

  //createCanvas(400, 400);
  for(let i = 0; i < 350; i++){
    let x = random(0,400);
    let y = random(0,400);
    let a = random(0,100);
    let h = random(0,200);
    population[i] = new Person(x,y,h,a);
  }
}

function draw() {

  // social distance vs. none
  var btnN = document.getElementById("myButton1");
  const btn = document.querySelector('button');
  btn.onclick = () => {
    if (social_distance == false){
      btn.innerHTML  = 'turn off social distancing'
      btnN.value = "turn off social distancing"
      for(let p of population){
        p.acc = createVector(0,0)
        p.speed = 0
        p.vel = createVector(0,0)
      }

      social_distance = true
      console.log(social_distance)
    } else if(social_distance == true) {
      btn.innerHTML  = 'turn on social distancing'
      for(let p of population){
        p.acc = createVector(0,0)
        p.speed = 1
        p.vel = p5.Vector.random2D()
      }

      social_distance = false
      console.log(social_distance)
    }
  }


  // restart button
  document.getElementById("myBtn2").addEventListener("click",
// btn.onclick =
() => {
  for(p of population){
    p.health = 200;
  }
});


  background(220);
  for(p of population){
    p.show()
    p.update()
    p.edges()

    for(pp of population){
      if (p != pp){
      pp.touch(p)
      }
    }

  }
}
