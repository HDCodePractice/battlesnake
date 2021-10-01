// function sort_by_range(starting_point,array,gridSize) {
//     var smallest = 69696969
//     for (i in array) {
//         if (((getRowCol(starting_point,gridSize)[0] - getRowCol(array[i],gridSize)[0]) + (getRowCol(starting_point,gridSize)[1] - getRowCol(array[i],gridSize)[1])) < smallest) {
//             smallest = i
//         } 
//     }

//     return array[getRowCol(smallest,gridSize)[0],getRowCol(smallest,gridSize)[1]]
// }

// function getRowCol(idx,gridSize) {
//     let row = int(idx/gridSize)
//     let col = idx % gridSize
//     return [row,col]
// }

// function indexToColRow(index) {
//     return [ int(index / gridSize) , index % gridSize];
// }

// function colRowToIndex(col, row) {
//     return row * gridSize + col;
// }

// function predict_next_move(direction,head){
//     print("Direction:",direction)
//     print("Current Head:",head)
//     let nexthead = head+1
//     print("Next Head:",nexthead)
// }

// function unoah_getDirection(gridSize,snake,apples,direction){
//     // let snakex = getRowCol(snake[0],gridSize)[0]
//     // let snakey = getRowCol(snake[0],gridSize)[1]
//     // let applex = sort_by_range(snake[0],apples,gridSize)[0]
//     // let appley = sort_by_range(snake[0],apples,gridSize)[1]
//     // if (applex < snakex) {
//     //     return "l"
//     // } 
//     // if (snakex < applex) {
//     //     return "r"
//     // }
//     // if (snakey < appley) {
//     //     return "d"
//     // } 
//     // if (appley < snakey) {
//     //     return "u"
//     // }

//     // if (direction == "l") { 
//     //     return "l"
//     // }else if (direction == "d") {
//     //     return "d"
//     // }else if (direction == "r") {
//     //     return "r"
//     // }else if (direction == "u") {
//     //     return "u"
//     // }
//     let head = indexToColRow(snake[0])
//     let headidx = snake[0]
//     let headrow = head[0]
//     let headcol = head[1]

//     let apple = [sort_by_range(snake[0],apples,gridSize)[0],sort_by_range(snake[0],apples,gridSize)[1]]
//     let appleidx = colRowToIndex(sort_by_range(snake[0],apples,gridSize)[0],sort_by_range(snake[0],apples,gridSize)[1])
//     let applerow = sort_by_range(snake[0],apples,gridSize)[0]
//     let applecol = sort_by_range(snake[0],apples,gridSize)[1]
    

//     // Variable Print Debugging
//     // print(`head: ${head}`)
//     // print(`headidx: ${headidx}`)
//     // print(`headcol: ${headcol}`)
//     // print(`headrow: ${headrow}`)

//     // print(`apple: ${apple}`)
//     // print(`appleidx: ${appleidx}`)
//     // print(`applecol: ${applecol}`)
//     // print(`applerow: ${applerow}`)

//     // Logic


//     // Find apple and don't hit neck
//     predict_next_move(direction, headidx)
//     if (headrow > applerow){
//         if (direction !== "d"){
//             return "u"
//         }else{
//             return "r"
//         }
//     }else if (headrow < applerow){
//         if (direction !== "u"){
//             return "d"
//         }else{
//             return "r"
//         }
//     }else if (headrow === applerow){
//         if (headcol > applecol){
//             if (direction !== "r"){
//                 return "l"
//             }else{
//                 return "u"
//             }
//         }else{
//             if (direction !== "l"){
//                 return "r"
//             }else{
//                 return "u"
//             }
//         }
//     }

//     // Don't hit body
//     return "r"
// }

// function unoah_newGame(){
//     return;
// }

// ais['Unoah'] = {
//     getDirection: unoah_getDirection,
//     newGame: unoah_newGame
// };


function noah_indexToColRow(index) {
    return [int(index/gridSize), index%gridSize];
}

let lastapple = [0,0]
let resetMode = false;
let mapMode = false;

// function colRowToIndex(col, row) {
//     return row * gridSize + col;
// }

function noah1_getDirection(gridSize,snake,apples,direction){   
    // Variable Defining
    let head = noah_indexToColRow(snake[0])
    let headidx = snake[0]
    let headrow = head[0]
    let headcol = head[1]

    let apple = noah_indexToColRow(apples[0])
    let appleidx = apples[0]
    let applerow = apple[0]
    let applecol = apple[1]
    

    // Variable Print Debugging
    // print(`head: ${head}`)
    // print(`headidx: ${headidx}`)
    // print(`headcol: ${headcol}`)
    // print(`headrow: ${headrow}`)

    // print(`apple: ${apple}`)
    // print(`appleidx: ${appleidx}`)
    // print(`applecol: ${applecol}`)
    // print(`applerow: ${applerow}`)

    // Logic
    print(lastapple)
    if (lastapple == apple) {
        if (headrow > applerow){
            if (direction !== "d"){
                return "u"
            }else{
                return("r")
            }
        }else if (headrow < applerow){
            if (direction !== "u"){
                return "d"
            }else{
                return("r")
            }
        }else if (headrow === applerow){
                if (headcol > applecol){
                    if (direction !== "r"){
                        return "l"
                    }else{
                        return("u")
                    }
                }else{
                    if (direction !== "l"){
                        return "r"
                    }else{
                        return("u")
                    }
                }
            
        }
        return "r"
    } else {
        return "u"
    }
            
}

function noah1_newGame(){
    lastapple = noah_indexToColRow(apples[0])
    resetMode = false;
    mapMode = false;
    return;
}

ais['noah1'] = {
    getDirection: noah1_getDirection,
    newGame: noah1_newGame
};