function indexToColRow(index) {
    return [ int(index / gridSize) , index % gridSize];
}

function colRowToIndex(col, row) {
    return row * gridSize + col;
}

function claire2_getDirection(gridSize,snake,apples,direction){ 
    let small = 0;
    let distance = gridSize * 2
    for (let count = 0; count < apples.length; count++){
        let appleRow = int(apples[count] / gridSize);
        let appleCol = apples[count] % gridSize;
        let snakeRow = int(snake[0] / gridSize);
        let snakeCol = snake[0] % gridSize
        let distance2 = abs(snakeRow - appleRow) + abs(snakeCol - appleCol);
        if (distance2 < distance){
            small = count;
            distance = distance2;
        }
    }  

    let apple = indexToColRow(apples[small]);
    let snakeHead = indexToColRow(snake[0]);

    if (apple[0] < snakeHead[0]){
        if ( snake.includes( snake[0] - gridSize) ){
            if (direction === "r"){
                return "r";
            }
            return "l";
        }
        return 'u';
    }else if (apple[0] > snakeHead[0]){
        if ( snake.includes( snake[0] + gridSize) ){
            if (direction === "r"){
                return "r";
            }
            return "l";
        }
        return 'd';
    }else if (apple[1] < snakeHead[1]){
        if ( snake.includes( snake[0] - 1) ){
            if (direction === "d"){
                return "d";
            }
            return "u";
        }
        return 'l';
    }else if (apple[1] > snakeHead[1]){
        if ( snake.includes( snake[0] + 1) ){
            if (direction === "d"){
                return "d";
            }
            return "u";
        }
        return 'r';
    }else{
        return direction;
    }
}

function claire2_newGame(){
    return;
}

ais['claire2'] = {
    getDirection: claire2_getDirection,
    newGame: claire2_newGame
};