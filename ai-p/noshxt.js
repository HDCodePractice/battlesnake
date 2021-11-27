function ns_indexToColRow(index) {
    return [int(index/gridSize), index%gridSize];
}

function ns_checkNull(col,row,snake){
    const idx = row * gridSize + col;
    if (!snake.includes(idx)){
        return true
    }
    return false
}

function ns_getRoute() {
    
}

function ns_getDirection(gridSize,membersnake,apples,direction,members) {
    for (let memberIndex1 = 0; memberIndex1 < members.length; memberIndex1++) {
        if (members[memberIndex1] == membersnake) {
            memberIndex = memberIndex1
        }
    }
    rows = []
    cols = []
    for (let appleIndex = 0; appleIndex < apples.length; appleIndex++) {
        const apple = apples[appleIndex];
        rows.push(int(apple/gridSize))
        cols.push(apple%gridSize)
    }
    if (members[memberIndex][0]%gridSize < cols[0]) {
        if (ns_checkDirection(gridSize,members,memberIndex,apples,'r',direction)) {
            return 'r'
        } else {
            if (int(members[memberIndex][0]/gridSize) > rows[0]) {
                if (ns_checkDirection(gridSize,members,memberIndex,apples,'u',direction)) {
                    return 'u'
                }
            } else if (int(members[memberIndex][0]/gridSize) < rows[0]) {
                if (ns_checkDirection(gridSize,members,memberIndex,apples,'u',direction)) {
                    return 'd'
                }
            }
        }
    } else if (int(members[memberIndex][0]/gridSize) > rows[0]) {
        if (ns_checkDirection(gridSize,members,memberIndex,apples,'u',direction)) {
            return 'u'
        }else {
            if (int(members[memberIndex][0]/gridSize) > cols[0]) {
                if (ns_checkDirection(gridSize,members,memberIndex,apples,'l',direction)) {
                    return 'l'
                }
            } else if (int(members[memberIndex][0]/gridSize) < cols[0]) {
                if (ns_checkDirection(gridSize,members,memberIndex,apples,'r',direction)) {
                    return 'r'
                }
            }
        }
    } else if (int(members[memberIndex][0]/gridSize) < rows[0]) {
        if (ns_checkDirection(gridSize,members,memberIndex,apples,'d',direction)) {
            return 'd'
        }else {
            if (int(members[memberIndex][0]/gridSize) > cols[0]) {
                if (ns_checkDirection(gridSize,members,memberIndex,apples,'l',direction)) {
                    return 'l'
                }
            } else if (int(members[memberIndex][0]/gridSize) < cols[0]) {
                if (ns_checkDirection(gridSize,members,memberIndex,apples,'r',direction)) {
                    return 'r'
                }
            }
        }
    } else if (members[memberIndex][0]%gridSize > cols[0]) {
        if (ns_checkDirection(gridSize,members,memberIndex,apples,'l',direction)) {
            return 'l'
        } else {
            if (int(members[memberIndex][0]/gridSize) > rows[0]) {
                if (ns_checkDirection(gridSize,members,memberIndex,apples,'u',direction)) {
                    return 'u'
                }
            } else if (int(members[memberIndex][0]/gridSize) < rows[0]) {
                if (ns_checkDirection(gridSize,members,memberIndex,apples,'u',direction)) {
                    return 'd'
                }
            }
        }
    }
    return direction;
}

function ns_newGame() {
    return;
}

ais['ns'] = {
    getDirection: ns_getDirection(),
    newGame: ns_newGame()
};

function checkPass(clickindex,lastindex) {
    // [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    // 0,1,2,3
    // 4,5,6,7
    // 8,9,10,11
    // 12,13,14,15
    clickrow = int(clickindex / gridSize);
    clickcol = clickindex - clickrow * gridSize;
    lastrow = int(lastindex / gridSize);
    lastcol = lastindex - lastrow * gridSize;
    if (checkRowTwoTurn(clickcol,clickrow,lastcol,lastrow) || checkColTwoTurn(clickcol,clickrow,lastcol,lastrow)) {
        return true;
    }
    if (clickcol === lastcol){
        // 同一列
        // 两行之间是空的
        return checkCol(clickcol,clickrow,lastrow);
    }else if(clickrow === lastrow){
        // 同一行
        // 在边儿上
        if (clickrow === 0  || clickrow === gridSize - 1) {
            return true;
        }
        // 两列之间是空的
        return checkRow(clickrow,clickcol,lastcol);
    }else{
        if (clickindex < lastindex){
            return checkOneTurn(clickcol,clickrow,lastcol,lastrow);
        }else{
            return checkOneTurn(lastcol,lastrow,clickcol,clickrow);
        }
    }
}

function checkNull(col,row){
    const idx = row * gridSize + col;
    if (grid[idx] === "n"){
        return true
    }
    return false
}

function checkCol(col,srow,erow){
    if (srow > erow){
        const temp = srow;
        srow = erow;
        erow = temp;
    }
    for (let index = srow + 1; index < erow; index++) {
        if (!checkNull(col,index)){
            return false;
        }
    }
    return true    
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
    return true    
}

function checkOneTurn(acol,arow,bcol,brow) {
    if ( checkRow(arow,acol,bcol) ){
        if (checkCol(bcol,arow,brow) ){
            if (checkNull(bcol,arow)){
                return true
            }
        }
    }
    if (checkCol(acol,arow,brow) ){
        if (checkRow(brow,acol,bcol) ){
            if (checkNull(acol,brow)){
                return true
            }
        }
    }
    
    return false;
}


function checkRowTwoTurn(acol,arow,bcol,brow){
    if (arow > brow){
        const temprow = arow;
        arow = brow;
        brow = temprow;
        const tempcol = acol;
        acol = bcol;
        bcol = tempcol;
    }
    for (let icol = 0; icol <= gridSize; icol++) {
        if (icol !== acol && icol !== bcol) {
            if (checkOneTurn(acol,arow,icol,brow)) {
                if (checkRow(brow,icol,bcol)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function checkColTwoTurn(acol,arow,bcol,brow) {
    // 把col小的放在a里，大的放在b里
    if ( acol > bcol ){
        const tempcol = acol;
        acol = bcol;
        bcol = tempcol;
        const temprow = arow;
        arow = brow;
        brow = temprow;
    }
    for (let row = 0; row <= gridSize; row++) {
        if (row !== arow && row !== brow) {
            // 从A出发，到所有bcol和row的
            if(checkOneTurn(acol,arow,bcol,row)){
                if(checkCol(bcol,row,brow)){
                    return true;
                }
            }
        }        
    }
    return false;
}

// ===============================
// ns code

function ns_checkDirection(gridSize,members,memberIndex,apples,direction,old_direction) {
    let row = int(members[memberIndex][0]/gridSize);
    let col = members[memberIndex][0]%gridSize;
    if (old_direction == 'r') {
        if (direction == 'l') {
            check = false;
        } else if (direction == 'u') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]-gridSize) || members[memberIndex2].includes(members[memberIndex][0]-gridSize)) {
                    check = false;
                }
            } 
            if (row-1 < 0) {
                check = false;
            }
        } else if (direction == 'd') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]+gridSize) || members[memberIndex2].includes(members[memberIndex][0]+gridSize)) {
                    check = false;
                }
            } 
            if (row+1 > gridSize-1) {
                check = false;
            }
        } else if (direction == 'r') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]+1 || members[memberIndex2].includes(members[memberIndex][0]+1))) {
                    check = false;
                }
            } 
            if (col+1 > gridSize-1) {
                check = false;
            }
        }
    } else if (old_direction == 'l') {
        if (direction == 'r') {
            check = false;
        } else if (direction == 'u') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]-gridSize) || members[memberIndex2].includes(members[memberIndex][0]-gridSize)) {
                    check = false;
                }
            } 
            if (row-1 < 0) {
                check = false;
            } 
        } else if (direction == 'd') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]+gridSize) || members[memberIndex2].includes(members[memberIndex][0]+gridSize)) {
                    check = false;
                }
            } 
            if (row+1 > gridSize-1) {
                check = false;
            }
        } else if (direction == 'l') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]-1 || members[memberIndex2].includes(members[memberIndex][0]-1))) {
                    check = false;
                }
            } 
            if (col-1 < 0) {
                check = false;
            }
        }
    } else if (old_direction == 'u') {
        if (direction == 'd') {
            check = false;
        } else if (direction == 'u') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]-gridSize) || members[memberIndex2].includes(members[memberIndex][0]-gridSize)) {
                    check = false;
                }
            } 
            if (row-1 < 0) {
                check = false;
            } 
        } else if (direction == 'l') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]-1 || members[memberIndex2].includes(members[memberIndex][0]-1))) {
                    check = false;
                }
            } 
            if (col-1 < 0) {
                check = false;
            }
        } else if (direction == 'r') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]+1 || members[memberIndex2].includes(members[memberIndex][0]+1))) {
                    check = false;
                }
            } 
            if (col+1 > gridSize-1) {
                check = false;
            }
        }
    } else if (old_direction == 'd') {
        if (direction == 'u') {
            check = false;
        } else if (direction == 'l') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]-1 || members[memberIndex2].includes(members[memberIndex][0]-1))) {
                    check = false;
                }
            } 
            if (col-1 < 0) {
                check = false;
            }
        } else if (direction == 'r') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]+1 || members[memberIndex2].includes(members[memberIndex][0]+1))) {
                    check = false;
                }
            }  
            if (col+1 > gridSize-1) {
                check = false;
            }
        } else if (direction == 'd') {
            check = true;
            for (let memberIndex2 = 0; memberIndex2 < members.length; memberIndex2++) {
                if (members[memberIndex].includes(members[memberIndex][0]+gridSize) || members[memberIndex2].includes(members[memberIndex][0]+gridSize)) {
                    check = false;
                }
            } 
            if (row+1 > gridSize-1) {
                check = false;
            }
        } 
    } else {
        check = true;
    }
    return check;
}

