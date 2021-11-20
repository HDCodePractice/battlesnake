function indexToColRow(index) {
    return [ int(index / gridSize) , index % gridSize];
}

function colRowToIndex(col, row) {
    return row * gridSize + col;
}



function claire2_getDirection(gridSize,snake,apples,direction,snakes){
    let smallest = 0
    let appleDistance = gridSize * 2
    let apple = indexToColRow(apples[smallest]);
    let snakeHead = indexToColRow(snake[0]);
    let snakess = 0

    for (let index = 0; index > snakes.length; index++){
        if (snakes[index].length != 0){
            snakess += 1
        }
    }

    if (snakess > 3){
        if(direction === "r"){
            return "d";
        }else if(direction === "d"){
            return "l";
        }else if(direction === "l"){
            return "u";
        }else if(direction === "u"){
            return "r";
        }else{
            return "r";
        }
    } else if (snakess === 3){
        if (maxHp <= maxHp * 0.75){
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
        } else if (maxHp > maxHp * 0.75){
            if(direction === "r"){
                return "d";
            }else if(direction === "d"){
                return "l";
            }else if(direction === "l"){
                return "u";
            }else if(direction === "u"){
                return "r";
            }else{
                return "r";
            }
        }

    } else if (snakess < 3){
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

    for (let i = 0; i < apples.length; i++) {
        let applerow = int(apples[i] / gridSize)
        let applecol = apples[i] % gridSize
        let snakerow = int(snake[0] / gridSize)
        let snakecol = snake[0] % gridSize
        let tempAppleDistance = abs(snakerow - applerow) + abs(snakecol - applecol)
        if (tempAppleDistance< appleDistance){
            smallest = i
            appleDistance = tempAppleDistance
        }
    }  
}

function claire2_newGame(){
    return;
}

ais['claire2'] = {
    getDirection: claire2_getDirection,
    newGame: claire2_newGame
};