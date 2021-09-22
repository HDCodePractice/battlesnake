let ais = {};
ai = "";

function moreUpdate(){
    if (!gameOver){
        if (ai == ""){
            ai = 'hdcola';
        }
        d = ais[ai].getDirection(gridSize,snake,apples,direction);
        if (["r","l","u","d"].includes(d)){
            direction = d;
        }
    }
    fill(0,0,0);
    textSize(10);
    text("AI:", width - selectWidth + 10, height/2+125);
}

function moreSettings(){
    selectAi = createSelect();
    selectAi.position(width - selectWidth + 50, height/2+165);
    for(var key in ais){
        selectAi.option(key);
    }
    selectAi.changed(aiSelectEvent);
}

function moreNewGame(){
    if (ai != ""){
        ais[ai].newGame();
    }
    direction = "r"
}

function aiSelectEvent(){
    ai = selectAi.value();
    newGame();
}