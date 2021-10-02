// let needFindPath = true;
// let path = [];
// let cruise = false;
// let actionPath = [];
function Junyan_getDirection(gridSize,snake,apples,direction){

    
    let [x,y] = getLocByIndex(snake[0],gridSize);
    // console.log([x,y])
    let [minSteps, apple] = findNearestApple([x,y],apples,gridSize);
    let [x1,y1] = getLocByIndex(apple,gridSize);
    let availableDirection = tryDirection(x,y,snake,gridSize);
    let bestDirection = getBestDirection(x,y,x1,y1);
    let isBestDirection = false;
    console.log(minSteps, [x,y],apple,"bestDirection",bestDirection,"availableDirection",availableDirection);    
    bestDirection.forEach((e) => {

        if(availableDirection.includes(e)) {
            console.log([x,y],"找到最佳路径:",e);
            isBestDirection = e
            // return e;
        }
    })
    if(isBestDirection) {
        return isBestDirection;
    }else
   { 
       console.log([x,y],"无法找到最佳路径,考虑首选路径:",availableDirection);
    return availableDirection[0];
}
};

function getBestDirection(x,y,x1,y1) {
    let bestDirection = [];
    if(x > x1) bestDirection.push("l");
    if(y > y1) bestDirection.push("u");
    if(x < x1) bestDirection.push("r");
    if(y < y1) bestDirection.push("d");
    return bestDirection;
}
function tryDirection(x,y,snake,gridSize) {
    let availableDirection = [];
    if(checkWall(x,y+1,gridSize) && checkSnake(x,y+1,snake,gridSize)) availableDirection.push("d");
    if(checkWall(x,y-1,gridSize) && checkSnake(x,y-1,snake,gridSize)) availableDirection.push("u");
    if(checkWall(x+1,y,gridSize) && checkSnake(x+1,y,snake,gridSize)) availableDirection.push("r");
    if(checkWall(x-1,y,gridSize) && checkSnake(x-1,y,snake,gridSize)) availableDirection.push("l");
    return availableDirection;

    
}
function checkWall(x,y,gridSize) {
    if(x<0 || x >= gridSize) return false;
    if(y<0 || y >= gridSize) return false;
    return true;

}
function checkSnake(x,y,snake,gridSize) {
    let index = y*gridSize + x;
    if(snake.includes(index)) return false;
    return true;
}
function findNearestApple([x,y],apples,gridSize) {
    let min = 999;
    let minApple = 999;
    apples.forEach((end) => {
        let [x1,y1] = getLocByIndex(end,gridSize);
        distance = Math.abs(x1-x) + Math.abs(y1-y);
        if(distance < min) {
            min = distance;
            minApple = end;
        }
    });
    return [min,minApple];
}


function xLog(...text) {
    // console.log(...text);
}

function Junyan_newGame(){
 needFindPath = true;
 path = [];
 cruise = false;
 actionPath = [];
    xLog("Junyan_newGame");
    return;
}

ais['junyan'] = {
    getDirection: Junyan_getDirection,
    newGame: Junyan_newGame
}

function getLocByIndex(index,gridSize) {
    return [index % gridSize,Math.floor(index / gridSize)];
}




