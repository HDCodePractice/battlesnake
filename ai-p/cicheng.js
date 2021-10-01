var j = -1

function cicheng_newGame(){
    j = -1
}

function cicheng_getDirection(gridSize,snake,apples,direction){
    if(apples.includes(210)){
        map = ["u","l","l","l","u","u","u","u","u","u",
                "r","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r", 
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","d","l","u","l","d","l","u","l","d","l","u","l","d",
                "l","u","l","d","l","u","l","d","l","u","l","d","l","l",
                "u","u","u","u","u","u","u","u","u","u","u","u","u","u"]  
    }
    else{
        map = ["u","l","l","l","u","u","u","u","u","u",
                "r","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r", 
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","l","l","l","l","l","l","l","l","l","l","l","l","l",
                "d","r","r","r","r","r","r","r","r","r","r","r","r","r",
                "d","d","l","u","l","d","l","u","l","d","l","u","l","d",
                "l","u","l","d","l","u","l","d","l","u","l","d","l","u",
                "l","u","u","u","u","u","u","u","u","u","u","u","u","u"] 
    }
    if (j>=233){
        j = 9
    }
    j+=1
    return map[j]    
}


ais['cicheng'] = {
    getDirection: cicheng_getDirection,
    newGame: cicheng_newGame
};