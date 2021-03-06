function sichengevenbetter_check_snakes_on_path(snakes,path){
    for (var i = 0; i < snakes.length; i++) { 
        for (var j = 0; j < snakes[i].length; j++) {
            if (path.includes(snakes[i][j])){
                return true;
            }
        }
    }
    return false;
}

function sichengevenbetter_check_one_no_turn(snake_head_row,snake_head_col,apple_row,apple_col,direction,snakes,check_snake_head=false){
    let path = [];
    let step = 1;
    if (snake_head_row == apple_row ){
        if (apple_col < snake_head_col){
            step = -1;
        }
        if (check_snake_head){
            for (var j = snake_head_col ; j != apple_col; j+=step) {
                path.push(colRowToIndex(j,snake_head_row));
            }    
        }else{
            for (var j = snake_head_col+step ; j != apple_col; j+=step) {
                path.push(colRowToIndex(j,snake_head_row));
            }    
        }
        if (sichengevenbetter_check_snakes_on_path(snakes,path)){
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
        if (check_snake_head){
            for (var j = snake_head_row ; j != apple_row; j+=step) {
                path.push(colRowToIndex(snake_head_col,j));
            }
        }else{
            for (var j = snake_head_row+step ; j != apple_row; j+=step) {
                path.push(colRowToIndex(snake_head_col,j));
            }
        }
        if (sichengevenbetter_check_snakes_on_path(snakes,path)){
            return "";
        }
        if (step == -1 && direction != "d") {
            return "u";
        }else if (step == 1 && direction != "u") {
            return "d";
        }
    }
    return "";
}

function sichengevenbetter_check_one_turn(gridSize,snake,all_apples,direction,snakes){
    let snake_head = snake[0];
    let snake_head_row = indexToRowCol(snake_head)[0];
    let snake_head_col = indexToRowCol(snake_head)[1];

    for (var i = 0; i < all_apples.length; i++) {
        let apple = all_apples[i];
        let apple_row = indexToRowCol(apple)[0];
        let apple_col = indexToRowCol(apple)[1];
        let d1 = sichengevenbetter_check_one_no_turn(snake_head_row,snake_head_col,apple_row,snake_head_col,direction,snakes,check_snake_head=false);
        let d2 = sichengevenbetter_check_one_no_turn(apple_row,snake_head_col,apple_row,apple_col,"",snakes,check_snake_head=true);
        if (d1 != "" && d2 != ""){
            return d1;
        }
        d1 = sichengevenbetter_check_one_no_turn(snake_head_row,snake_head_col,snake_head_row,apple_col,direction,snakes,check_snake_head=false);
        d2 = sichengevenbetter_check_one_no_turn(snake_head_row,apple_col,apple_row,apple_col,"",snakes,check_snake_head=true);
        if (d1 != "" && d2 != ""){
            return d1;
        }
    }
    return "";
}

function sichengevenbetter_check_no_turn(gridSize,snake,all_apples,direction,snakes){
    let snake_head = snake[0];
    let snake_head_row = indexToRowCol(snake_head)[0];
    let snake_head_col = indexToRowCol(snake_head)[1];

    for (var i = 0; i < all_apples.length; i++) {
        let apple = all_apples[i];
        let apple_row = indexToRowCol(apple)[0];
        let apple_col = indexToRowCol(apple)[1];
        let d = sichengevenbetter_check_one_no_turn(snake_head_row,snake_head_col,apple_row,apple_col,direction,snakes);
        if (d != ""){
            return d;
        }
    }
    return "";
}

function sichengevenbetter_getDirection(gridSize,snake,all_all_apples,direction,snakes){
    if (direction == ""){
        direction = "r";
    }
    let d = sichengevenbetter_check_no_turn(gridSize,snake,all_all_apples,direction,snakes);
    if (d != ""){
        return d;
    }
    d = sichengevenbetter_check_one_turn(gridSize,snake,all_all_apples,direction,snakes)
    if (d != ""){
        return d;
    }
    return direction;
}

function sichengevenbetter_newGame(){
    return;
}

ais['sichengevenbetter'] = {
    getDirection: sichengevenbetter_getDirection,
    newGame: sichengevenbetter_newGame
};