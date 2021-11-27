function hdcola2_getDirection(gridSize,snake,apples,direction){
    let snakeHead = indexToColRow(snake[0]);
    let row = snakeHead[0];
    let col = snakeHead[1];
    if(row === 0 && row < 13){
        if (col%2 === 0 || col === 0){
            return "r";
        }else{
            return "d";
        }
    }else if(row > 0 && row < 13 && col < 13){
        if(col%2 === 0 || col === 0){
            return "u";
        }else{
            return "d";
        }
    }else if(row === 13 && col < 13){
        if(col === 15){
            return "d";
        }
        if (col%2 === 0 || col === 0){
            return "u";
        }else{
            return "r";
        }
    }else if(row === 14){
        if(col===0){
            return "u";
        }else{
            return "l";
        }
    }else if (col>12 && row < 13){
        if(col === 13 && row%2 === 0){
            return "r";
        }else if(col === 14 && row%2 === 1){
            return "l";
        }else{
            return "d";
        }
    }
}

function hdcola2_newGame(){
    return;
}

ais['hdcola2'] = {
    getDirection: hdcola2_getDirection,
    newGame: hdcola2_newGame
};