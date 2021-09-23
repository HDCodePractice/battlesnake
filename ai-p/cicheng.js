// let map = localStorage['map'] ? JSON.parse(localStorage['map']) : Array(gridSize*gridSize).fill(0);
let appleX = [];
let appleY = [];
function cicheng_getDirection(gridSize,snake,apples,direction){
  let table = Object.create(map);
  let queue = new Sorted([start], (a, b) => distance(a) - distance(b));
  for(i=0;i<=apples.length;i++){
    appleX[i] = (apples[i]+1)%gridSize;
    appleY[i] = (apples[i]+1-appleX[i])/gridsize;
    print(appleX,appleY);
  }
}
ais['cicheng'] = {getDirection: cicheng_getDirection};