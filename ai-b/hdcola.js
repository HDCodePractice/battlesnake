
function hdcola_check_snakes_on_path(snakes,path){
    for (var i = 0; i < snakes.length; i++) { 
        for (var j = 0; j < snakes[i].length; j++) {
            if (path.includes(snakes[i][j])){
                return true;
            }
        }
    }
    return false;
}

function hdcola_check_no_turn(gridSize,snake,apples,direction,snakes){
    let snake_head = snake[0];
    let snake_head_row = indexToRowCol(snake_head)[0];
    let snake_head_col = indexToRowCol(snake_head)[1];

    for (var i = 0; i < apples.length; i++) {
        let apple = apples[i];
        let apple_row = indexToRowCol(apple)[0];
        let apple_col = indexToRowCol(apple)[1];
        let path = [];
        let step = 1;
        if (snake_head_row == apple_row ){
            if (apple_col < snake_head_col){
                step = -1;
            }
            for (var j = snake_head_col+step ; j != apple_col; j+=step) {
                path.push(colRowToIndex(j,snake_head_row));
            }
            if (hdcola_check_snakes_on_path(snakes,path)){
                return "";
            }
            if (step == -1 && direction != "r") {
                return "l";
            }else if (step == 1 && direction != "l") {
                return "r";
            }
        }else if (snake_head_col == apple_col){
            if (apple_row < snake_head_row){
                step = -1;
            }
            for (var j = snake_head_row+step ; j != apple_row; j+=step) {
                path.push(colRowToIndex(snake_head_col,j));
            }
            if (step == -1 && direction != "d") {
                return "u";
            }else if (step == 1 && direction != "u") {
                return "d";
            }
        }
    }
    return "";
}

function hdcola_getDirection(gridSize,snake,apples,direction,snakes){
    if (direction == ""){
        direction = "r";
    }
    let d = hdcola_check_no_turn(gridSize,snake,apples,direction,snakes);
    print("d: "+d);
    if (d != ""){
        return d;
    }
    return direction;
}

function hdcola_newGame(){
    return;
}

ais['hdcola'] = {
    getDirection: hdcola_getDirection,
    newGame: hdcola_newGame
};