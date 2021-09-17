var CheckFlag = true;
var steps = ["l"];
function cicheng_getDirection(gridSize,snake,apples,direction){
    //检测最近的苹果
    if(CheckFlag === true){
        snakeTail = snake.slice(1);
        let minSteps = 999;
        let minApple ;
        let stepsV = [];
        let stepsH = [];
        console.log(apples);
        for(let i=0;i<apples.length;i++)
        {
            //检查是否在一条线上
            let appleCol = apples[i]% gridSize;
            let appleRow = Math.floor(apples[i] / gridSize);
            let snakeCol = snake[0]% gridSize;
            let snakeRow = Math.floor(snake[0] / gridSize);
            let stepH = Math.abs(appleCol - snakeCol)
            let stepV = Math.abs(appleRow - snakeRow);            
            // console.log("steps required:",apples[i], stepH, stepV);    
            let tempStepsV = [];
            let directV = (appleRow > snakeRow) ? "d":"u";
            for(let j =0; j < stepV; j++){
                tempStepsV.push(directV);
            }
            let tempStepsH = [];
            let directH = (appleCol > snakeCol) ? "r":"l";
            for(let j =0;j < stepH; j++){
                tempStepsH.push(directH);
            }
            let totalSteps = stepV + stepH;
            if(minSteps > totalSteps) 
            {
                minSteps = totalSteps;
                minApple = apples[i];
                stepsV = tempStepsV.slice();
                stepsH = tempStepsH.slice();
            }
        }
        CheckFlag = false;
        steps = checkObstacle(snake,snakeTail,stepsH,stepsV);

    }
    console.log(steps);
    if(!steps||steps.length <= 0) 
    {
        CheckFlag = true;
        // console.log("走完步骤了:",CheckFlag);
    }else{
         direction = steps.pop();
    }
    return direction;
    
   
}
function checkObstacle(snake,snakeTail,stepsH,stepsV) {
    let snakeHeader = {};
    snakeHeader.snakeRight = snake[0]+1;
    snakeHeader.snakeLeft = snake[0]-1;
    snakeHeader.snakeDown = snake[0]+gridSize;
    snakeHeader.snakeUp = snake[0]-gridSize;
    if(stepsH.length>0 && stepsH[0]==="r"){
        return (snakeTail.includes(snakeHeader.snakeRight))?stepsV.concat(stepsH):stepsH.concat(stepsV);
    }
    if(stepsV.length>0 && stepsV[0] ==="u") {
        return (snakeTail.includes(snakeHeader.snakeDown))?stepsV.concat(stepsH):stepsH.concat(stepsV);
    }
}


ais['cicheng'] = cicheng_getDirection;