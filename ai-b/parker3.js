function parkermultiplayer_getDirection(gridSize,snake,apples,direction,memberssnakes){
    print(indexToRowCol(snake[0]))
}

function parkermultiplayer_newGame(){
    return;
}

ais['parkerm3'] = {
    getDirection: parkermultiplayer_getDirection,
    newGame: parkermultiplayer_newGame
};