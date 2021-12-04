function parkermultiplayer_getDirection(gridSize,snake,apples,direction,memberssnakes){
    let headrowcol = indexToRowCol(snake[0])
    let headrow = headrowcol[0]
    let headcol = headrowcol[1]
    // print("Headrowcol:",headrowcol)
    // print("Headrow:",headrow)
    // print("Headcol:",headcol)

    let applerowcols = []
    for (let index = 0; index < apples.length; index++) {
        applerowcols.push(indexToRowCol(apples[index]))
    }

    let appledistances = []
    for (let index = 0; index < applerowcols.length; index++) {
        let head = headrowcol
        print("Head:",head)
        let apple = applerowcols[index]
        distance = abs(headrow-applerowcols[index][0])+abs(headcol-applerowcols[index][1])
        appledistances.push([apple,distance])
        print("Appledistances",appledistances)
    }
    let smallestdistance = 1000
    let chosenapple = []
    for (let index = 0; index < appledistances.length; index++) {
        let currentapple = appledistances[index];
        if(currentapple[1] < smallestdistance){
            smallestdistance = currentapple[1]
            chosenapple = currentapple[0]
        }
    }
    print("smallestdistance:",smallestdistance)
    print("Chosen Apple:",chosenapple)
    papplerow = chosenapple[0]
    papplecol = chosenapple[1]
    pheadrow = headrow
    pheadcol = headcol

    belowhead = false
    rightofhead = false
    // if(papplerow > pheadrow){
    //     belowhead = true
    // }
    // if(papplecol > pheadcol){
    //     rightofhead = true
    // }
    if(papplecol > pheadcol){
        if (direction !== "l"){
            return "r"
        }else{
            return "u"
        }
    }else if(papplecol < pheadcol){
        if (direction !== "r"){
            return "l"
        }else{
            return "d"
        }
    }else if(papplecol === pheadcol){
        if(papplecol > headcol){
            if(direction !== "u"){
                return "d"
            }else{
                return "r"
            }
        }else{
            if(direction !== "d"){
                return "u"
            }else{
                return "r"
            }f 
        }
    }
}

function parkermultiplayer_newGame(){
    return;
}

ais['parkerm3'] = {
    getDirection: parkermultiplayer_getDirection,
    newGame: parkermultiplayer_newGame
};