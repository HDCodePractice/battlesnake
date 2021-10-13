function noah_indexToColRow(index) {
    return [int(index/gridSize), index%gridSize];
}

function noah1_getDirection(gridSize,snake,apples,direction){   
    let head = noah_indexToColRow(snake[0])
    let headidx = snake[0]
    let headrow = head[0]
    let headcol = head[1]

    let apple = noah_indexToColRow(apples[0])
    let appleidx = apples[0]
    let applerow = apple[0]
    let applecol = apple[1]

    if (headcol == applecol){
        if (checkCol(headcol,headrow,applerow) != false) {
            if (headrow < checkCol(headcol,headrow,applerow)) {
                if (direction != "u") {
                    return "d";
                }
            } else if (headrow > checkCol(headcol,headrow,applerow)) {
                if (direction != "d") {
                    return "u";
                }   
            }
        } 
    } else if (headrow == applerow) {
        // 两列之间是空的
        if (checkRow(headrow,headcol,applecol) != false) {
            if (headcol < checkRow(headrow,headcol,applecol)) {
                if (direction != "l") {
                    return "r";
                }   
            } else if (headcol > checkRow(headrow,headcol,applecol)) {
                if (direction != "r") {
                    return "l";
                }
            }
        } 
    } else {
        if (checkOneTurn(headcol,headrow,applecol,applerow) != false) {
            if (checkOneTurn(headcol,headrow,applecol,applerow)[0] == applecol) {
                if (headrow < checkOneTurn(headcol,headrow,applecol,applerow)[0]) {
                    if (direction != "u") {
                        return "d";
                    }
                } else if (headrow > checkOneTurn(headcol,headrow,applecol,applerow)[0]) {
                    if (direction != "d") {
                        return "u"
                    }
                } else if (headcol < checkOneTurn(headcol,headrow,applecol,applerow)[1]) {
                    if (direction != "l") {
                        return "r"
                    }
                } else if (headcol > checkOneTurn(headcol,headrow,applecol,applerow)[1]) {
                    if (direction != "r") {
                        return "l"
                    }
                }
            } else {
                if (headcol < checkOneTurn(headcol,headrow,applecol,applerow)[0]) {
                    if (direction != "u") {
                        return "d";
                    }
                } else if (headcol > checkOneTurn(headcol,headrow,applecol,applerow)[0]) {
                    if (direction != "d") {
                        return "u"
                    }
                } else if (headrow < checkOneTurn(headcol,headrow,applecol,applerow)[1]) {
                    if (direction != "l") {
                        return "r"
                    }
                } else if (headrow > checkOneTurn(headcol,headrow,applecol,applerow)[1]) {
                    if (direction != "r") {
                        return "l"
                    }
                }
            }
        } 
    }

    if (headcol < applecol) {
        if (direction != "l") {
            return "r"
        }
    } else if (headcol > applecol) {
        if (direction != "r") {
            return "l"
        }
    } else if (headrow < applerow) {
        if (direction != "u") {
            return "d";
        }
    } else if (headrow > applerow) { 
        if (direction != "d") {
            return "u"
        }
    }
}



function checkNull(col,row){
    const idx = row * gridSize + col;
    if (!snake.includes(idx)){
        return true
    }
    return false
}

function checkCol(col,srow,erow){
    print("检查列",col,srow,erow);
    if (srow > erow){
        const temp = srow;
        srow = erow;
        erow = temp;
    }
    for (let index = srow + 1; index < erow; index++) {
        if (checkNull(col,index)===false){
            print("检查",col,index,"不行");
            return false
        }
    }
    return erow    
}

function checkRow(row,scol,ecol){
    print("检查行",row,scol,ecol);
    if (scol > ecol){
        const temp = scol;
        scol = ecol;
        ecol = temp;
    }
    for (let index = scol + 1; index < ecol; index++) {
        if (checkNull(index,row)===false){
            print("检查",index,row,"不行");
            return false
        }
    }
    return ecol    
}

function checkOneTurn(acol,arow,bcol,brow) {
    if ( checkRow(arow,acol,bcol) ){
        if (checkCol(bcol,arow,brow) ){
            if (checkNull(bcol,arow)){
                return [brow,bcol]
            }
        }
    }
    if ( checkCol(acol,arow,brow) ){
        if (checkRow(brow,acol,bcol) ){
            if (checkNull(acol,brow)){
                return [bcol,brow]
            }
        }
    }
    
    return false;
}


function checkTwoTurn(acol,arow,bcol,brow){
    if (acol > bcol) {
        const temp = acol;
        acol = bcol
        bcol = temp
    }
    if (arow > brow) {
        const temp = arow;
        arow = brow
        brow = temp
    }
    for (let i = 0; i < gridSize; i++) {
        if (i != acol && i != bcol) {
            if (checkCol(i,(i-arow),brow)) {
                if (checkRow(brow,i,bcol)) { 
                    if (checkCol(i,arow,brow)) {
                        if (checkNull(i,arow)) {
                            if (checkNull(i,brow)) {
                                return [i,brow]
                            }
                        }
                    }
                }
            }
        }
    }
    for (let i = 0; i < gridSize; i++) {
        if (i != arow && i != brow) {
            if (checkRow(i,(i-acol),brow)) {
                if (checkCol(bcol,i,brow)) {
                    if (checkRow(i,arow,brow)) {
                        if (checkNull(i,acol)) {
                            if (checkNull(i,bcol)) {
                                return [bcol,i]
                            }
                        }
                    } 
                }
            }
        }
    }
    return false
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