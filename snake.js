function keyPressed() {
    if (keyCode === LEFT_ARROW && snake[1] != snake[0] - 1) {
            direction = "l";
    } else if (keyCode === RIGHT_ARROW && snake[1] != snake[0] + 1) {
            direction = "r";
    } else if (keyCode === UP_ARROW && snake[1] != snake[0] - gridSize) {
        direction = "u";
    } else if (keyCode === DOWN_ARROW && snake[1] != snake[0] + gridSize) {
        direction = "d";
    }
}

function moreUpdate(){
    return
}

function moreSettings(){
    return
}

function moreNewGame(){
    return
}