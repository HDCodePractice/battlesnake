function sicheng_getDirection(gridSize,snake,apples,direction,snakes){
    if (direction == "l") {
        if (snake[0]%gridSize==0){
            return (snake[0] === 0)?"d":"u"
        }else{
            return "l"
        }
    } else if (snake[0]%gridSize > cols[0]) {
        if (direction != 'r' && !snake.includes(snake[0]-1)) {
            return 'l';
        } else {
            if (int(snake[0]/gridSize) > rows[0] && !snake.includes(snake[0]-gridSize) && direction != 'd' && !snake.includes(snake[0]-gridSize)) {
                return 'u';
            } else if (int(snake[0]/gridSize) < rows[0] && direction != 'u' && !snake.includes(snake[0]+gridSize)) {
                return 'd';
            } else if (snake[0]%gridSize+1 >= gridSize && direction != 'l' && !snake.includes(snake[0]+1)) {
                return 'r';
            }
        }
    } else if (int(snake[0]/gridSize) > rows[0]) {
        if (direction != 'd' && !snake.includes(snake[0]-gridSize)) {
            return 'u';
        } else {
            if (snake[0]%gridSize < cols[0] && direction != 'r' && !snake.includes(snake[0]-1)) {
                return 'l';
            } else if (snake[0]%gridSize > cols[0] && direction != 'l' && !snake.includes(snake[0]+1)) {
                return 'r';
            }  else if (int(snake[0]/gridSize)+1 >= gridSize && direction != 'u' && !snake.includes(snake[0]+gridSize)) {
                return 'd';
            }
        }
    } else if (int(snake[0]/gridSize) < rows[0]) {
        if (direction != 'u' && !snake.includes(snake[0]+gridSize)) {
            return 'd';
        } else {
            if (snake[0]%gridSize < cols[0] && direction != 'r' && !snake.includes(snake[0]-1)) {
                return 'l';
            } else if (snake[0]%gridSize > cols[0] && direction != 'l' && !snake.includes(snake[0]+1)) {
                return 'r';
            } else if (int(snake[0]/gridSize)-1 < 0 && direction != 'd' && !snake.includes(snake[0]-gridSize)) {
                return 'u';
            }
        }
    }
    return direction;
}

function sicheng_newGame(){
    return;
}

ais['sicheng'] = {
    getDirection: sicheng_getDirection,
    newGame: sicheng_newGame
}