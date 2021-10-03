function sicheng_getDirection(gridSize,snake,apples,direction){
    if (direction == "l") {
        if (snake[0]%gridSize==0){
            return (snake[0] === 0)?"d":"u"
        }else{
            return "l"
        }
    }else if (direction == "d") {
        if ((snake[0]+1)%gridSize==0){            
             return (snake[0]===gridSize*gridSize-1)?"l":"d";
        }
        // return "d";
    }else if (direction == "r") {
        if (snake[0]%gridSize==gridSize-1){
            return (snake[0]>=gridSize*gridSize-1)?"u":"d";
        }else{
            return "r";
        }
    }else if (direction == "u") {
        if (snake[0]%gridSize==gridSize-1){
            return "l";
        }else {
            return "r";
        }
    }
}

function sicheng_newGame(){
    return;
}

ais['sicheng'] = {
    getDirection: sicheng_getDirection,
    newGame: sicheng_newGame
};