let ais = {};
ai = "";


function moreUpdate(){
    if (!gameOver){
        if (ai == ""){
            if(getItem("ai") === null){
                ai = 'hdcola';
            }else{
                ai = getItem("ai")
            }
            selectAi.selected(ai)
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
    selectAi = createSelect(ai);
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
    direction = "r";
}

function moreSetup(){
}

function aiSelectEvent(){
    ai = selectAi.value();
    storeItem("ai",ai);
    print(getItem("ai"))
    newGame();
}