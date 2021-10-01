function sicheng_getDirection(gridSize,snake,apples,direction){
    rows = []
    cols = []
    for (let appleIndex = 0; appleIndex < apples.length; appleIndex++) {
        const apple = apples[appleIndex];
        rows.push(int(apple/gridSize))
        cols.push(apple%gridSize)
    }
    if (snake[0]%gridSize < cols[0]) {
        if (direction != 'l' && !snake.includes(snake[0]+1) && sicheng_checkIfStuck(direction,'r')) {
            return 'r';
        } else {
            if (int(snake[0]/gridSize) > rows[0] && !snake.includes(snake[0]-gridSize) && direction != 'd' && !int((snake[0]-gridSize)/gridSize) < gridSize && sicheng_checkIfStuck(direction,'u')) {
                return 'u';
            } else if (direction != 'u' && !snake.includes(snake[0]+gridSize) && !int((snake[0]+gridSize)/gridSize) < gridSize && sicheng_checkIfStuck(direction,'d')) {
                return 'd';
            } else {
                return 'l';
            }
        }
    } else if (snake[0]%gridSize > cols[0]) {
        if (direction != 'r' && !snake.includes(snake[0]-1) && sicheng_checkIfStuck(direction,'l')) {
            return 'l';
        } else {
            if (int(snake[0]/gridSize) > rows[0] && !snake.includes(snake[0]-gridSize) && direction != 'd' && !int((snake[0]-gridSize)/gridSize) < gridSize && sicheng_checkIfStuck(direction,'u')) {
                return 'u';
            } else if (direction != 'u' && !snake.includes(snake[0]+gridSize) && !int((snake[0]+gridSize)/gridSize) < gridSize && sicheng_checkIfStuck(direction,'d')) {
                return 'd';
            } else {
                return 'r';
            }
        }
    } else if (int(snake[0]/gridSize) > rows[0]) {
        if (direction != 'd' && !snake.includes(snake[0]-gridSize) && sicheng_checkIfStuck(direction,'u')) {
            return 'u';
        } else {
            if (snake[0]%gridSize < cols[0] && !snake.includes(snake[0]-1) && direction != 'r' && !(snake[0]-1)%gridSize < 1 && sicheng_checkIfStuck(direction,'l')) {
                return 'l';
            } else if (direction != 'l' && !snake.includes(snake[0]+1) && !(snake[0]+1)%gridSize < gridSize && sicheng_checkIfStuck(direction,'r')) {
                return 'r';
            } else {
                return 'd';
            }
        }
    } else if (int(snake[0]/gridSize) < rows[0]) {
        if (direction != 'u' && !snake.includes(snake[0]+gridSize) && sicheng_checkIfStuck(direction,'d')) {
            return 'd';
        } else {
            if (snake[0]%gridSize < cols[0] && !snake.includes(snake[0]-1) && direction != 'r' && !(snake[0]-1)%gridSize < gridSize && sicheng_checkIfStuck(direction,'l')) {
                return 'l';
            } else if (direction != 'l' && !snake.includes(snake[0]+1) && !(snake[0]+1)%gridSize < gridSize && sicheng_checkIfStuck(direction,'r')) {
                return 'r';
            } else {
                return 'u';
            }
        }
    }
}

function sicheng_checkIfStuck(direction,checkingDirection,gridSize) {
    if (direction === 'l') {
        if (checkingDirection === 'l') {
            for (let index = snake[0]-1; index > int(snake[0]/gridSize)*gridSize; index--) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true;
                }
            }
        } else if (checkingDirection === 'u') {
            for (let index = snake[0]-gridSize; index > snake[0]%gridSize+gridSize*gridSize-1; index-=gridSize) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true;
                }
            }
        }  else if (checkingDirection === 'd') {
            for (let index = snake[0]+gridSize; index < snake[0]%gridSize; index+=gridSize) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true;
                }
            }
        } 
    } else if (direction === 'r') {
        if (checkingDirection === 'r') {
            for (let index = snake[0]+1; index < (int(snake[0]/gridSize)+1)*gridSize-1; index++) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true;
                }
            }
        } else if (checkingDirection === 'u') {
            for (let index = snake[0]-gridSize; index > snake[0]%gridSize+gridSize*gridSize-1; index-=gridSize) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true;
                }
            }
        }  else if (checkingDirection === 'd') {
            for (let index = snake[0]+gridSize; index < snake[0]%gridSize; index+=gridSize) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true;
                }
            }
        } 
    } else if (direction === 'd') {
        if (checkingDirection === 'r') {
            for (let index = snake[0]+1; index < (int(snake[0]/gridSize)+1)*gridSize-1; index++) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true;
                }
            }
        } else if (checkingDirection === 'l') {
            for (let index = snake[0]-1; index > int(snake[0]/gridSize)*gridSize; index--) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true;
                }
            }
        } else if (checkingDirection === 'd') {
            for (let index = snake[0]+gridSize; index < snake[0]%gridSize; index+=gridSize) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true
                }
            }
        }
    } else if (direction === 'u') {
        if (checkingDirection === 'r') {
            for (let index = snake[0]+1; index < (int(snake[0]/gridSize)+1)*gridSize-1; index++) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true;
                }
            }
        } else if (checkingDirection === 'l') {
            for (let index = snake[0]-1; index > int(snake[0]/gridSize)*gridSize; index--) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true;
                }
            }
        } else if (checkingDirection === 'u') {
            for (let index = snake[0]-gridSize; index > snake[0]%gridSize+gridSize*gridSize-1; index-=gridSize) {
                if (snake.includes(index)) {
                    return false;
                } else {
                    return true;
                }
            }
        } 
    }
    return true;
}

function sicheng_newGame(){
    return;
}

ais['sicheng'] = {
    getDirection: sicheng_getDirection,
    newGame: sicheng_newGame
}