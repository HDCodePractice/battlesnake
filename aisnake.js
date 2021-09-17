let ais = {};

function moreUpdate(){
    if (direction == ""){
        direction = "r"
    }
    if (!gameOver){
        direction = ais['cicheng'](gridSize,snake,apples,direction);
    }
}