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
    } else if (ns_checkOneTurn(members,snakecol,snakerow,applecol,applerow,gridSize,direction) != "") {
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

function ns_checkTwoTurn(snakes,snakecol,snakerow,applecol,applerow) {
    
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

function checkCol(col,srow,erow){
    if (srow > erow){
        const temp = srow;
        srow = erow;
        erow = temp;
    }
    for (let index = srow + 1; index < erow; index++) {
        if (!ns_checkNull(col,index)){
            return false;
        }
    }
    return true    
}

function checkRow(row,scol,ecol){
    print("检查行",row,scol,ecol);
    if (scol > ecol){
        const temp = scol;
        scol = ecol;
        ecol = temp;
    }
    for (let index = scol + 1; index < ecol; index++) {
        if (ns_checkNull(index,row)===false){
            print("检查",index,row,"不行");
            return false
        }
    }
    return true    
}

function checkOneTurnRow(acol,arow,bcol,brow) {
    if ( checkRow(arow,acol,bcol) ){
        if (checkCol(bcol,arow,brow) ){
            if (ns_checkNull(bcol,arow)){
                return true
            }
        }
    }
    
    return false;
}

function checkOneTurnCol(acol,arow,bcol,brow) {
    if (checkCol(acol,arow,brow) ){
        if (checkRow(brow,acol,bcol) ){
            if (ns_checkNull(acol,brow)){
                return true
            }
        }
    }
    
    return false;
}

function checkRowTwoTurn(acol,arow,bcol,brow){
    if (arow > brow){
        const temprow = arow;
        arow = brow;
        brow = temprow;
        const tempcol = acol;
        acol = bcol;
        bcol = tempcol;
    }
    for (let icol = 0; icol <= gridSize; icol++) {
        if (icol !== acol && icol !== bcol) {
            if (checkOneTurn(acol,arow,icol,brow)) {
                if (checkRow(brow,icol,bcol)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function checkColTwoTurn(acol,arow,bcol,brow) {
    // 把col小的放在a里，大的放在b里
    if ( acol > bcol ){
        const tempcol = acol;
        acol = bcol;
        bcol = tempcol;
        const temprow = arow;
        arow = brow;
        brow = temprow;
    }
    for (let row = 0; row <= gridSize; row++) {
        if (row !== arow && row !== brow) {
            // 从A出发，到所有bcol和row的
            if(checkOneTurn(acol,arow,bcol,row)){
                if(checkCol(bcol,row,brow)){
                    return true;
                }
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
