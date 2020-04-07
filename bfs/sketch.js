let graph = [];
let node;

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 20; i++){
    let x = random(0,400);
    let y = random(0,400);
    let v = Math.floor(random(0,20));
    graph[i] = new Node(x,y,v);
  }

  for (u of graph){
    let n = Math.floor(Math.random()*20)
    u.edges.push(graph[n])
  }
}

//dfs
function dfs(graph,node,end){
  if (node.v == end){
    return true
  }
  if (!node.searched){
    node.searched = true
    for(edge of node.edges){
      dfs(graph,edge)
    }
  }
}

//bfs
function bfs(graph, start,end){
  let queue = [[start]]

  while(queue.length){
    let path = queue.shift()
    let node = path[path.length-1]

    // found condition
    if(node.v == end){
      console.log('path', path)
      return path
    }

    if (!node.searched){
      node.searched = true
      for(edge of node.edges){
        if(!edge.searched){
          let new_path = path.map(x => x)
          new_path.push(edge)
          queue.push(new_path)
        }
      }
    }
  }
}

function draw() {
  background(220);
  for(v of graph){
    v.show()
    v.showEdges()
    bfs(graph,v,2)
    //dfs(graph,v, 2)
  }

}
