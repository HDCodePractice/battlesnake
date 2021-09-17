function sicheng_getDirection(gridSize,snake,apple,direction){
    if (direction == '') {
        direction = "l"
    }
    if (direction == "l") {
        return "d";
    }else if (direction == "d") {
        return "r";
    }else if (direction == "r") {
        return "u";
    }else if (direction == "u") {
        return "l";
    }
}

ais['sicheng'] = sicheng_getDirection;