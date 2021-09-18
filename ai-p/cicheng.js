var CheckFlag = true;
let start = true
let resetPoint = false;
let startRow;
let resetSteps = [];
let steps = [];
function cicheng_getDirection(gridSize,snake,apples,direction){
    //检测最近的苹果
    snakeRow = Math.floor(snake[0]/gridSize);
    snakeCol = snake[0]%gridSize;
    // console.log(snakeCol,gridSize)
    if(gridSize %2 ===1) {  //表格奇数行
        if(CheckFlag) {
            for(let i=snakeCol;i<gridSize-1;i++) resetSteps.push("r");
            for(let i=snakeRow;i>1;i--) resetSteps.push("u");
            for(let i=gridSize-1;i>0;i--) resetSteps.push("l");
            resetSteps.push("u"); //重置成功
            resetSteps.push("r"); //重置成功
            for(let x =0; x< Math.floor(gridSize/2)-1;x++)
            {
                for(let i=0;i<gridSize-2;i++) resetSteps.push("r");
                resetSteps.push("d");
                for(let i=0;i<gridSize-2;i++) resetSteps.push("l");
                resetSteps.push("d"); 
            }
            
            resetSteps.reverse();
            CheckFlag = false;
        }
        if(resetSteps) {
        console.log(resetSteps);
            let newDirection = resetSteps.pop();
        
        return newDirection;
        }

        

        
    }
}


ais['cicheng'] = cicheng_getDirection;