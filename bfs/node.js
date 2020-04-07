class Node {

    // init
    constructor(x, y, v) {
      this.x = x;
      this.y = y;
      this.v = v;
      this.edges = [];
      this.visited = false;
      this.mass = 10;
      this.seen = false
  }

    //Functions
    show() {
    if (this.searched){
      fill(0, 255, 0)}
    else{
      fill(255,255,255)
    }
    ellipse(this.x, this.y, this.mass, this.mass);
  }


    showEdges(){
      for(let u of this.edges){
        line(this.x,this.y,u.x,u.y)
        stroke(127)
      }
    }

}
