function notSelf(){

}

function stephen_getDirection(gridSize,snake,apples,direction){
    let apple = indexToColRow(apples[0])
    let snakeHead = indexToColRow(snake[0])
    if (apple[0] < snakeHead[0]){
        if (snake.includes(snake[0] - gridSize)){
            if (direction === "r"){
                if (snakeHead[1] === 0 || snakeHead[1] != (gridSize - 1)){
                    return "l"
                }
                return "r"
            }
            return "l";
        }    
        return "u"
    }else if (apple[0] > snakeHead[0]){
        if (snake.includes(snake[0] + gridSize)){
            if (direction === "r"){
                if (snakeHead[1] === 0 || snakeHead[1] != (gridSize - 1)){
                    return "l"
                }
                return "r"
            }
            return "l";
        }
        return "d"
    }else if (apple[1] < snakeHead[1]){
        if (snake.includes(snake[0] - 1)){
            if (direction === "u"){
                if (snakeHead[0] === 0 || snakeHead[0] != (gridSize - 1)){
                    return "d"
                }
                return "u"
            }
                return "d"
        }
        return "l"
    }else if (apple[1] > snakeHead[1]){
        if (snake.includes(snake[0] + 1)){
            if (direction === "u"){
                if (snakeHead[0] === 0 || snakeHead[0] != (gridSize - 1)){
                    return "d"
                }
                return "u"
            }
                return "d"
        }
        return "r"
    }
}

    function stephen_newGame(){
    return;
}

ais['stephen'] = {
    getDirection: stephen_getDirection,
    newGame: stephen_newGame
};