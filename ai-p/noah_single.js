function sort_by_range(starting_point,array,gridSize) {
    var smallest = 69696969
    for (i in array) {
        if (((getRowCol(starting_point,gridSize)[0] - getRowCol(array[i],gridSize)[0]) + (getRowCol(starting_point,gridSize)[1] - getRowCol(array[i],gridSize)[1])) < smallest) {
            smallest = i
        } 
    }

    return array[getRowCol(smallest,gridSize)[0],getRowCol(smallest,gridSize)[1]]
}

function getRowCol(idx,gridSize) {
    let row = int(idx/gridSize)
    let col = idx % gridSize
    return [row,col]
}

function unoah_getDirection(gridSize,snake,apples,direction){
    let snakex = getRowCol(snake[0],gridSize)[0]
    let snakey = getRowCol(snake[0],gridSize)[1]
    let applex = sort_by_range(snake[0],apples,gridSize)[0]
    let appley = sort_by_range(snake[0],apples,gridSize)[1]
    if (applex < snakex) {
        return "l"
    } 
    if (snakex < applex) {
        return "r"
    }
    if (snakey < appley) {
        return "d"
    } 
    if (appley < snakey) {
        return "u"
    }

    if (direction == "l") { 
        return "l"
    }else if (direction == "d") {
        return "d"
    }else if (direction == "r") {
        return "r"
    }else if (direction == "u") {
        return "u"
    }
}

function unoah_newGame(){
    return;
}

ais['Unoah'] = {
    getDirection: unoah_getDirection,
    newGame: unoah_newGame
};

