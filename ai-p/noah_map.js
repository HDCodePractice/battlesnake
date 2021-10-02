let isOnTop = false;
let twirlMode = false;
let isAtEnd = true;
let twirl = 0;
let num = 0;
let dapples;


function noah_indexToColRow(index) {
    return [int(index/gridSize), index%gridSize];
}

function get_apples_in_row(row,array,gridSize) {
    num = 0;
    print("====")
    for (let i = row*gridSize; i < (row+1)*gridSize; i++) {
        print(i)
        if (array.includes(i)) {
            num += 1
        }
    }
    return num;
}

function noah_getDirection(gridSize,snake,apples,direction){
    
    let head = noah_indexToColRow(snake[0])
    let headidx = snake[0]
    let headrow = head[0]
    let headcol = head[1]

    let apple = noah_indexToColRow(apples[0])
    let appleidx = apples[0]
    let applerow = apple[0]
    let applecol = apple[1]


    if (get_apples_in_row(headrow,dapples,gridSize) >= 4 || twirlMode == true || isOnTop == true || isAtEnd == false) {
        isAtEnd = false;
        if (twirlMode == false) {
            if (direction == "l") {
                if (snake[0] == 0 || isOnTop == true) {
                    isOnTop = true;
                    return "d"
                } 
                if (snake[0] % gridSize == 1 && snake[0] > gridSize-1 && isOnTop == false){
                    isAtEnd = true;
                    return "u"; 
                } 
            }else if (direction == "d") {
                if (snake[0] === (gridSize * (gridSize-1))){
                    isOnTop = false;
                    return "r";
                } 
            }else if (direction == "r") {
                if (snake[0]%gridSize==gridSize-1 && isOnTop == false){
                    return "u";
                } 
            }else if (direction == "u") {
                if (snake[0]%gridSize==gridSize-1 && snake[0] != (gridSize * 2)-1){
                    return "l";
                } else if (snake[0]%gridSize==gridSize-1) {
                    twirlMode = true;
                    twirl = 0
                } else {
                    return "r"
                }
            }
        } else {
            if (snake[0] != 1) {
                if (twirl == 0) {
                    twirl = 1
                    return "l";
                } else if (twirl == 1) {
                    twirl = 2
                    return "d";
                } else if (twirl == 2) {
                    twirl = 3
                    return "l";
                } else if (twirl == 3) {
                    twirl = 0
                    return "u";
                }
            } else {
                twirlMode = false;
                return "l"
            }  
        }
    } else {
        if (headrow == 1) {
            twirlMode = true;
            isOnTop = true;
        } else {
            return "u"
        }
    }
        
        
}

function noah_newGame(){
    dapples = apples
    direction = "r"
    isOnTop = false;
    twirlMode = false;
    isAtEnd = true;
    twirl = 0
    num = 0
    return;
}

ais['noah'] = {
    getDirection: noah_getDirection,
    newGame: noah_newGame
};

