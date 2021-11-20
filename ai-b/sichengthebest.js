function sichengthebest_getDirection(gridSize,membersnake,apples,direction,members){
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
        if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'r',direction)) {
            return 'r'
        } else {
            if (int(members[memberIndex][0]/gridSize) > rows[0]) {
                if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'u',direction)) {
                    return 'u'
                }
            } else if (int(members[memberIndex][0]/gridSize) < rows[0]) {
                if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'u',direction)) {
                    return 'd'
                }
            }
        }
    } else if (int(members[memberIndex][0]/gridSize) > rows[0]) {
        if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'u',direction)) {
            return 'u'
        }else {
            if (int(members[memberIndex][0]/gridSize) > cols[0]) {
                if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'l',direction)) {
                    return 'l'
                }
            } else if (int(members[memberIndex][0]/gridSize) < cols[0]) {
                if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'r',direction)) {
                    return 'r'
                }
            }
        }
    } else if (int(members[memberIndex][0]/gridSize) < rows[0]) {
        if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'d',direction)) {
            return 'd'
        }else {
            if (int(members[memberIndex][0]/gridSize) > cols[0]) {
                if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'l',direction)) {
                    return 'l'
                }
            } else if (int(members[memberIndex][0]/gridSize) < cols[0]) {
                if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'r',direction)) {
                    return 'r'
                }
            }
        }
    } else if (members[memberIndex][0]%gridSize > cols[0]) {
        if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'l',direction)) {
            return 'l'
        } else {
            if (int(members[memberIndex][0]/gridSize) > rows[0]) {
                if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'u',direction)) {
                    return 'u'
                }
            } else if (int(members[memberIndex][0]/gridSize) < rows[0]) {
                if (sicheng_checkDirection(gridSize,members,memberIndex,apples,'u',direction)) {
                    return 'd'
                }
            }
        }
    }
    return direction;
}

function sicheng_checkDirection(gridSize,members,memberIndex,apples,direction,old_direction) {
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

ais['sichengthebest'] = {
    getDirection: sichengthebest_getDirection,
    newGame: sichengthebest_newGame
}

function sichengthebest_newGame(){
    return;
}