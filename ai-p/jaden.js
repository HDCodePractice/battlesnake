function jaden_getDirection(gridSize,snake,apples,direction){

    let head = indexToColRow(snake[0])

    let headrow = head[0]
    let headcol = head[1]

    let apple = indexToColRow(apples[0])
   
    let applerow = apple[0]
    let applecol = apple[1]

    if (applerow < headrow){
        if ( snake.includes( snake[0] - gridSize) ){
            if (direction === "r"){
                return "r";
            }
            return "l";
        }
        return 'u';
    }else if (applerow > headrow){
        if ( snake.includes( snake[0] + gridSize) ){
            if (direction === "r"){
                return "r";
            }
            return "l";
        }
        return 'd';
    }else if (applecol < headcol){
        if ( snake.includes( snake[0] - 1) ){
            if (direction === "d"){
                return "d";
            }
            return "u";
        }
        return 'l';
    }else if (applecol > headcol){
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
function jaden_newGame(){

    return;
}
ais['jaden'] = {
    getDirection: jaden_getDirection,
    newGame: jaden_newGame
}