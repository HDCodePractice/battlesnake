function parkermultiplayer_getDirection(gridSize,snake,apples,direction,memberssnakes){
    if(direction === "r"){
        return "d"
    }else if(direction === "d"){
        return "l"
    }else if(direction === "l"){
        return "u"
    }else if(direction === "u"){
        return "r"
    }else{
        return "r"
    }
}

function parkermultiplayer_newGame(){
    return;
}

ais['parkerm'] = {
    getDirection: parkermultiplayer_getDirection,
    newGame: parkermultiplayer_newGame
};