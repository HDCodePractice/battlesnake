let ais = {};

function moreUpdate(){
    if (direction == ""){
        direction = "r"
    }
    if (!gameOver){
        direction = ais['hdcola'](gridSize,snake,apples,direction);
    }
}