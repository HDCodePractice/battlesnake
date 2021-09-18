var CheckFlag = true;
let start = true
let resetPoint = false;
let startRow;
let resetSteps = [];
let steps = [];

function findNearestApple(gridSize,snake,apples,direction) {
    // let snakeCol = snake[0]%gridSize;
    let snakeRow = Math.floor(snake[0] % gridSize);
    let minAppleDiff = 99;
    let minApple = {};
    apples.forEach((apple) => { //查找行最近的苹果
    // console.log(apple);
    let appleRow = Math.floor(apple / gridSize);
    let appleCol = Math.floor(apple % gridSize);
    let tempMinAppleDiff = Math.abs(snakeRow - appleRow);
    if (minAppleDiff > tempMinAppleDiff) {
        minAppleDiff = tempMinAppleDiff
        minApple.row = appleRow;
        minApple.col = appleCol;
        minApple.minApple = apple;
        }
    });
    // console.log(minApple);
    return minApple;
}

function cicheng_getDirection(gridSize,snake,apples,direction){
    //检测最近的苹果
    let snakeRow = Math.floor(snake[0]/gridSize);
    let snakeCol = snake[0]%gridSize;
    minApple = findNearestApple(gridSize,snake,apples,direction);
    // console.log(snakeCol,snakeRow,gridSize);
    if(gridSize %2 ===1) {  //表格奇数行
        if(CheckFlag) {
            minApple = findNearestApple(gridSize,snake,apples,direction);
            if(start) {
            for(let i=snakeCol; i<gridSize-1; i++) resetSteps.push("r");
            start = false;
            }
            console.log(snakeRow,minApple.row)
            // if(snakeRow > minApple.row) { //蛇头在苹果下面
            //     for(let i=snakeRow; i=minApple.row; i--) resetSteps.push("u");                
            // }else if (snakeRow < minApple.row) { //蛇头在苹果下面
            //     for(let i=snakeRow; i=minApple.row; i++) resetSteps.push("d");
            // }
            // if(snakeCol > minAppleCol) { //蛇头在右侧,向左到头
            //         for(let i=snakeCol;i=0;i--) resetSteps.push("l");
            //     }else { //蛇头在左侧,向右到头
            //         for(let i=minAppleCol;i=gridSize-1;i++) resetSteps.push("r");
            // }
            CheckFlag = false;
        }
        if(resetSteps.length > 1) {
        // console.log(resetSteps);
            let newDirection = resetSteps.pop();
            return newDirection;
        }else if(resetSteps.length === 1){
            let newDirection = resetSteps.pop();
            CheckFlag = true;
            return newDirection;
        }        
    }
}


ais['cicheng'] = cicheng_getDirection;