let ais = {};

function updateSnake(){
    if (!gameOver){
        turn += 1;
        direction = ais['sicheng'](gridSize,snake,apple,direction);
        if (direction === "r"){
            if (snake[0] % gridSize === gridSize - 1){
                gameOver = true;
            }else{
                if (!checkOnApple()) {
                    snake.splice(snake.length-1, 1)
                }
                snake.splice(0,0,snake[0]+1)
            }
        }else if (direction === "u"){
            if (snake[0] < gridSize){
                gameOver = true;
            }else{
                if (!checkOnApple()) {
                    snake.splice(snake.length-1, 1)
                }
                snake.splice(0,0,snake[0]-gridSize);
            }
        }else if (direction === "d"){
            if (snake[0] >= gridSize * (gridSize-1)){
                gameOver = true;
            }else{
                if (!checkOnApple()) {
                    snake.splice(snake.length-1, 1)
                }
                snake.splice(0,0,snake[0]+gridSize);
            }
        }else if (direction === "l"){
            if (snake[0] % gridSize === 0){
                gameOver = true;
            }else{
                if (!checkOnApple()) {
                    snake.splice(snake.length-1, 1)
                }
                snake.splice(0,0,snake[0]-1);
            }
        }
        for (let s = 1; s < snake.length; s++) {
            if (snake[0] == snake[s]) {
                gameOver = true;
            }
        }
        hp -= 1;
        if (hp < 0) {
            gameOver = true;
        }
        if (turn > turnMax) {
            gameOver = true;
        }
    }
}
