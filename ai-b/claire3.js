function indexToColRow(index) {
    return [ int(index / gridSize) , index % gridSize];
}

function colRowToIndex(col, row) {
    return row * gridSize + col;
}

function claire3_getDirection(gridSize,snake,apples,direction){
    let row = int(snake[0] / gridSize);
    int(snake[0] / gridSize);
    let col = snake[0] % gridSize;

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
    }
    if(col===13&&row === 0){
        return "r"
    }
    if(col === 14&& row ===0){
        return "d"
    }
    if(col ===14&& row ===1){
        return "l"
    }
}

function claire3_newGame(){
    return;
}

ais['claire3'] = {
    getDirection: claire3_getDirection,
    newGame: claire3_newGame
};