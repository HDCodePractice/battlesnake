function jaden_getDirection(gridSize,snake,apples,direction){
// Variable Defining
let head = indexToColRow(snake[0])
let headidx = snake[0]
let headrow = head[0]
let headcol = head[1]

let apple = indexToColRow(apples[0])
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

if (headrow > applerow){
    if (direction !== "d"){
        return("u")
    }else{
        return("r")
    }
}else if (headrow < applerow){
    if (direction !== "u"){
        return("d")
    }else{
        return("r")
    }
}else if (headrow === applerow){
    if (headcol > applecol){
        if (direction !== "r"){
            return("l")
        }else{
            return("u")
        }
    }else{
        if (direction !== "l"){
            return("r")
        }else{
            return("u")
        }
    }
}
return "r"
}


function jaden_newGame(){
    return;
}

ais['jaden'] = {
    getDirection: jaden_getDirection,
    newGame: jaden_newGame
};