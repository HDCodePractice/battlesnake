function indexToColRow(index) {
    return [ int(index / gridSize) , index % gridSize];
}

function colRowToIndex(col, row) {
    return row * gridSize + col;
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

function predict_next_move(direction,phead,gridSize){
    let nextphead
    if(direction === "r"){
        nextphead = phead+1
    }else if(direction === "l"){
        nextphead = phead-1
    }else if(direction === "u"){
        nextphead = phead-gridSize
    }else if(direction === "d"){
        nextphead = phead+gridSize
    }
    return(nextphead)
}

function move(darray, snake, cdirection, gridSize, phead){
    if (containsObject(predict_next_move(cdirection,phead,darray[0],gridSize ),snake)){
        if (containsObject(predict_next_move(cdirection,phead,darray[1],gridSize),snake)){
            return darray[2]
        }else{
            return darray[1]
        }
    }else{
        return darray[0]
    }
}

function parker_getDirection(gridSize,snake,papples,direction){   
    // Variable Defining
    let phead = indexToColRow(snake[0])
    let pheadidx = snake[0]
    let pheadrow = phead[0] 
    let pheadcol = phead[1]

    
    let papples2 = []

    for (var i = 0; i < papples.length; i++) {
        papples2.push(indexToColRow(papples[i]))
    }
    
    let papple = indexToColRow(papples[0])
    let pappleidx = papples[0]
    let papplerow = papple[0]
    let papplecol = papple[1]
    

    // Variable Print Debugging
    // print(`phead: ${phead}`)
    // print(`pheadidx: ${pheadidx}`)
    // print(`pheadcol: ${pheadcol}`)
    // print(`pheadrow: ${pheadrow}`)

    // print(`papple: ${papple}`)
    // print(`pappleidx: ${pappleidx}`)
    // print(`papplecol: ${papplecol}`)
    // print(`papplerow: ${papplerow}`)

    // Logic


    // Find papple and don't hit neck
    // if (pheadrow > papplerow){
    //     if (direction !== "d"){
    //         return move(["u","l","l"],snake,direction,gridSize,pheadidx)
    //     }else{
    //         return move(["r","u","d"],snake,direction,gridSize,pheadidx)
    //     }
    // }else if (pheadrow < papplerow){
    //     if (direction !== "u"){
    //         return move(["d","l","r"],snake,direction,gridSize,pheadidx)
    //     }else{
    //         return move(["r","u","d"],snake,direction,gridSize,pheadidx)
    //     }
    // }else if (pheadrow === papplerow){
    //     if (pheadcol > papplecol){
    //         if (direction !== "r"){
    //             return move(["l","u","d"],snake,direction,gridSize,pheadidx)
    //         }else{
    //             return move(["u","l","r"],snake,direction,gridSize,pheadidx)
    //         }
    //     }else{
    //         if (direction !== "l"){
    //             return move(["r","u","d"],snake,direction,gridSize,pheadidx)
    //         }else{
    //             return move(["u","l","r"],snake,direction,gridSize,pheadidx)
    //         }
    //     }
    // }
    if (pheadrow > papplerow){
        if (direction !== "d"){
            return "u"
        }else{
            return "r"
        }
    }else if (pheadrow < papplerow){
        if (direction !== "u"){
            return "d"
        }else{
            return "r"
        }
    }else if (pheadrow === papplerow){
        if (pheadcol > papplecol){
            if (direction !== "r"){
                return "l"
            }else{
                return "u"
            }
        }else{
            if (direction !== "l"){
                return "r"
            }else{
                return "u"
            }
        }
    }

    // Don't hit body
    let nextphead = predict_next_move(direction, pheadidx,gridSize)
    if (containsObject(nextphead, snake)){

    }
}

function parker_newGame(){
    return;
}

ais['parker'] = {
    getDirection: parker_getDirection,
    newGame: parker_newGame
};