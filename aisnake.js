let ais = {};
ai = "";

function moreUpdate(){
    if (direction == ""){
        direction = "r"
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

function aiSelectEvent(){
    ai = selectAi.value();
    newGame();
}