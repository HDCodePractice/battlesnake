let onTop = false;
let spinMode = false;
let besideawall = true;
let spin = 0;
let p2num = 0;
let p2dapples;


function p2_indexToColRow(index) {
    return [int(index/gridSize), index%gridSize];
}

function p2get_apples_in_row(row,array,gridSize) {
    p2num = 0;
    for (let j = row*gridSize; j < (row+1)*gridSize; j++) {
        if (array.includes(j)) {
            p2num += 1
        }
    }
    return p2num;
}

function parker2_getDirection(gridSize,snake,apples,direction){
    
    let p2head = p2_indexToColRow(snake[0])
    let p2headrow = p2head[0]

    if (p2get_apples_in_row(p2headrow,p2dapples,gridSize) >= 4 || spinMode == true || onTop == true || besideawall == false) {
        besideawall = false;
        if (spinMode == false) {
            if (direction == "l") {
                if (snake[0] == 0 || onTop == true) {
                    onTop = true;
                    return "d"
                } 
                if (snake[0] % gridSize == 1 && snake[0] > gridSize-1 && onTop == false){
                    besideawall = true;
                    return "u"; 
                } 
            }else if (direction == "d") {
                if (snake[0] === (gridSize * (gridSize-1))){
                    onTop = false;
                    return "r";
                } 
            }else if (direction == "r") {
                if (snake[0]%gridSize==gridSize-1 && onTop == false){
                    return "u";
                } 
            }else if (direction == "u") {
                if (snake[0]%gridSize==gridSize-1 && snake[0] != (gridSize * 2)-1){
                    return "l";
                } else if (snake[0]%gridSize==gridSize-1) {
                    spinMode = true;
                    spin = 0
                } else {
                    return "r"
                }
            }
        } else {
            if (snake[0] != 1) {
                if (spin == 0) {
                    spin = 1
                    return "l";
                } else if (spin == 1) {
                    spin = 2
                    return "d";
                } else if (spin == 2) {
                    spin = 3
                    return "l";
                } else if (spin == 3) {
                    spin = 0
                    return "u";
                }
            } else {
                spinMode = false;
                return "l"
            }  
        }
    } else {
        if (p2headrow == 1) {
            spinMode = true;
            onTop = true;
        } else {
            return "u"
        }
    }
        
        
}

function parker2_newGame(){
    p2dapples = apples
    direction = "r"
    onTop = false;
    spinMode = false;
    besideawall = true;
    spin = 0
    p2num = 0
    return;                
}

ais['parker2'] = {
    getDirection: parker2_getDirection,
    newGame: parker2_newGame
};
