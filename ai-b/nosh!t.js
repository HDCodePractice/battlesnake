function ns_indexToColRow(index) {
    return [int(index/gridSize), index%gridSize];
}

function ns_checkNull(col,row,members){
    const idx = row * gridSize + col;
    for (each in members) {
        if (!each.snake.includes(idx)){
            return true
        }
    }
    
    return false
}

function ns_get_nearest_Apple(apples,snakehead) {
    let moves = [];
    let snakecol = ns_indexToColRow(snakehead)[0]
    let snakerow = ns_indexToColRow(snakehead)[1]
    for (let appleIndex = 0; appleIndex < apples.length; appleIndex++) {
        const apple = apples[appleIndex]
        let applecol = ns_indexToColRow(apple)[0]
        let applerow = ns_indexToColRow(apple)[1]
        // print(snakecol,applecol)
        // print(snakerow,applerow)
        moves.push(Math.abs(snakecol-applecol)+Math.abs(snakerow-applerow)-1)
    }
    finalindex = 0;
    for (let each = 0; each < moves.length; each++) {
        const move = moves[each]
        // print(ns_sort(moves),move)
        if (move == sort(moves)[0]) {
            finalindex = each
        } 
    }
    return finalindex;
}

function ns_getRoute(gridSize,membersnake,apples,direction,members) {
    let apple = apples[ns_get_nearest_Apple(apples,membersnake[0])]
    let applecol = ns_indexToColRow(apple)[0]
    let applerow = ns_indexToColRow(apple)[1]
    let snake = membersnake[0]
    let snakecol = ns_indexToColRow(snake)[0]
    let snakerow = ns_indexToColRow(snake)[1]
    if (ns_checkNoTurn(members,snakecol,snakerow,applecol,applerow,gridSize,direction) != "") {
        return ns_checkNoTurn(members,snakecol,snakerow,applecol,applerow,gridSize,direction)
    } else if (["u","d","r","l"].includes(ns_checkOneTurn(members,snakecol,snakerow,applecol,applerow,gridSize,direction))) {
        return ns_checkOneTurn(members,snakecol,snakerow,applecol,applerow,gridSize,direction)
    } else {
        if (snakecol == gridSize) {
            if (direction != "l") {
                return "l"
            } else {
                return "u"
            }
        } else if (snakecol == 1) {
            if (direction != "r") {
                return "r"
            } else {
                return "d"
            }
        }
        return "d"
    }
}

function ns_checkNoTurn(snakes,snakecol,snakerow,applecol,applerow,gridSize,direction) {
    let path_array = [];
    if (snakecol == applecol) {
        if (snakerow > applerow) {
            for (let index = applerow; index < snakerow; index++) {
                path_array.push(snakecol*gridSize+index)
            }
            if (!ns_snake_on_path(snakes,path_array)) {
                if (direction != "r") {
                    return "l";
                }
            }
        } else if (snakerow < applerow) {
            for (let index = snakerow; index > applerow; index++) {
                path_array.push(snakecol*gridSize+index)
            }
            if (!ns_snake_on_path(snakes,path_array)) {
                if (direction != "l") {
                    return "r";
                }
            }
        }
    } 
    if (snakerow == applerow) {
        if (snakecol > applecol) {
            for (let index = applecol; index < snakecol; index++) {
                path_array.push(index*gridSize+snakerow)
            }
            if (!ns_snake_on_path(snakes,path_array)) {
                if (direction != "d") {
                    return "u";
                }
            }
        } else if (applecol < snakecol) {
            for (let index = snakecol; index > applecol; index++) {
                path_array.push(index*gridSize+snakerow)
            }
            if (!ns_snake_on_path(snakes,path_array)) {
                if (direction != "u") {
                    return "d";
                }
            }
        }
    }
    return "";
} 

function ns_checkOneTurn(snakes,snakecol,snakerow,applecol,applerow,direction) {
    let path_array = []
    if (snakecol > applecol) {
        if (snakerow > applerow) {
            for (let index = applerow; index < snakerow; index++) {
                path_array.push(snakecol*gridSize+index)
            }
            if (!ns_snake_on_path(snakes,path_array)) {
                if (direction != "r") {
                    return "l";
                }
            } else {
                path_array = []
                for (let index = applecol; index < snakecol; index++) {
                    path_array.push(snakerow*gridSize+index)
                }
                if (!ns_snake_on_path(snakes,path_array)) {
                    if (direction != "d") {
                        return "u";
                    }
                }
            }
        } else if (snakerow < applerow) {
            for (let index = snakerow; index > applerow; index++) {
                path_array.push(snakecol*gridSize+index)
            }
            if (!ns_snake_on_path(snakes,path_array)) {
                if (direction != "l") {
                    return "r";
                }
            }
        }
    } 
    if (snakerow < applerow) {
        if (snakecol > applecol) {
            for (let index = applecol; index < snakecol; index++) {
                path_array.push(index*gridSize+snakerow)
            }
            if (!ns_snake_on_path(snakes,path_array)) {
                if (direction != "d") {
                    return "u";
                }
            }
        } else if (applecol < snakecol) {
            for (let index = snakecol; index > applecol; index++) {
                path_array.push(index*gridSize+snakerow)
            }
            if (!ns_snake_on_path(snakes,path_array)) {
                if (direction != "u") {
                    return "d";
                }
            }
        }
    } else {
        return ns_checkNoTurn(snakes,snakecol,snakerow,applecol,applerow,gridSize);
    }
}

function ns_snake_on_path(snakes,path_array) {
    for (let snakeIndex = 0; snakeIndex < snakes.length; snakeIndex++) {
        const snake = snakes[snakeIndex];
        for (let snakeElementIndex = 0; snakeElementIndex < snake.length; snakeElementIndex++) {
            const element = snake[snakeElementIndex];
            if (path_array.includes(element)) {
                return true;
            }
        }
    }
    return false;
}

function ns_newGame() {
    return;
}

ais['noshot'] = {
    getDirection: ns_getRoute,
    newGame: ns_newGame
};
