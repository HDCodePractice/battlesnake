let isOnTop = false;
let twirlMode = false;
let twirl = 0;

function noah_getDirection(gridSize,snake,apples,direction){
    if (twirlMode == false) {
        if (direction == "l") {
            if (snake[0] == 0 || isOnTop == true) {
                isOnTop = true;
                return "d"
            } 
            if (snake[0] % gridSize == 1 && snake[0] > gridSize-1 && isOnTop == false){
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
            direction = "l"
        }  
    }
        
}

function noah_newGame(){
    isOnTop = false;
    twirlMode = false;
    twirl = 0
    return;
}

ais['noah'] = {
    getDirection: noah_getDirection,
    newGame: noah_newGame
};

