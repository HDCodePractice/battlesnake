function indexToColRow(index) {
    return [ int(index / gridSize) , index % gridSize];
}

function colRowToIndex(col, row) {
    return row * gridSize + col;
}

function claire3_getDirection(gridSize,snake,apples,direction){
    return;
}

function claire3_newGame(){
    return;
}

ais['claire3'] = {
    getDirection: claire3_getDirection,
    newGame: claire3_newGame
};