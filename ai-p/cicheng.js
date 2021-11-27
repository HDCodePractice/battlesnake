// let end = []
// let start = []
// let head = []
// let find = 0
// let path = []
// let storeTable = []

function cicheng_getDirection(gridSize,snake,apples,direction){
  head = getXY(snake[0], gridSize)
  if(head[0] == end[0] && head[1] == end[1]){
    start = head
    console.log("吃到了",find)
    game()
    
  }
  if(find == true){
    return move()
  }
}

function cicheng_newGame() {
  end = []
  head = []
  find = 0
  path = []
  start = [4,8]
  game()
}

function game() {
  let map = []
  // storeTable = []
  path = []
  find = false
  initMap(snake, map)
  console.log(map)
  let min = 999
  let minapple = 999
  apples.forEach(function(apples){
    let [x,y] = getXY(snake[0], gridSize)
    let [x1,y1] = getXY(apples, gridSize)
    let distance = Math.abs(x - x1) + Math.abs(y - y1)
    if(min >= distance && distance > 0){
      minapple = apples
      min = distance
    }
  })
  end = getXY(minapple, gridSize)
  console.log("before find path",find, min)
  findPath(map, start, end)
  console.log("after find path",find)
}

function findPath(map, start, end){
  var queue = [start]
  function insert(x, y, pre){
    if (x < 0 || x >= gridSize  || y < 0 || y >= gridSize) return
    if (map[y*gridSize+x] != 0) return
    // if(storeTable[y * gridSize + x]) return
    map[y * gridSize + x] = pre
    queue.push([x,y])
  }
  while(queue.length){
    let [x,y] = queue.shift()
    console.log("寻找中",[x,y],queue.length)
    if(x == end[0] && y == end[1] && find == 0){
      find = true
      getSteps(map,start,end)
      console.log("找到了",find)
      return
    }
    insert(x - 1, y, [x, y])
    insert(x, y - 1, [x, y])
    insert(x + 1, y, [x, y])
    insert(x, y + 1, [x, y])
  }
}

function getSteps(map,start,end){
  let lastStep = end
  while(lastStep){
    console.log(lastStep)
    path.unshift(lastStep)
    lastStep = map[(lastStep[1]) * gridSize + lastStep[0]]
    if(lastStep[0] == start[0] && lastStep[1] == start[1]){
      break
    }
  }
}

function getXY(index, gridSize){
  return [index%gridSize, Math.floor(index / gridSize)]
}

function move(){
  let [x,y] = path.shift()
  // console.log("path", path)
  // console.log("head",head)
  // console.log("end",end)
  console.log(head,"==>",[x,y],path);
  if(x>head[0]){
    console.log("向右")
    return "r"
  }
  else if(y>head[1]){
    console.log("向下")
    return "d"
  }
  else if(x<head[0]){
    console.log("向左")
    return "l"
  }
  else if(y<head[1]){
    console.log("向上")
    return "u"
  }
  
}

function initMap(snake, map){
  for(j=0;map.length<gridSize*gridSize;j++){
    for(i=0;i<snake.length;i++){
      map[j] = 0
      map[snake[i]] = 1
    }
  }
}


ais['cicheng'] = {
    getDirection: cicheng_getDirection,
    newGame: cicheng_newGame
};