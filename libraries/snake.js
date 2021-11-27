const cellSize = 20;
const gridSize = 15;
const scoreHeight = 50;
const selectWidth = 200;

let grid = [];
let snake = [];
let direction = "r";  // l, r, u, d
let score;
let apples = [];
let gameOver = false;
let speed = 25;
let appleCount = 3;
let maxHp = 100;
let hp = 0;
let turn = 0;
let maxTurn = 0;

function colRowToIndex(col, row) {
  return row * gridSize + col;
}

function indexToColRow(index) {
  return [ int(index / gridSize) , index % gridSize];
}

function drawCircle(row,col) {
    fill(0,250,0)
    circle(col*cellSize+1+cellSize/2, row*cellSize+1+scoreHeight+cellSize/2, cellSize*4/5)
}

function drawSquare(row, col) {
    fill(0,0,250)
    square(col*cellSize+1+cellSize/5,row*cellSize+1+scoreHeight+cellSize/5, cellSize*3/5)
}

function drawApple(row, col) {
    fill(0, 102, 153);
    textSize(cellSize*3/4);
    text("🍎",col*cellSize+cellSize/7,scoreHeight+row*cellSize+cellSize/1.3);
}

function newGame(){
    snake = [
        colRowToIndex(3,int(gridSize/2)),
        colRowToIndex(2,int(gridSize/2)),
        colRowToIndex(1,int(gridSize/2))
    ];
    direction = "";
    apples = [];
    apples.push(colRowToIndex(int(gridSize* 3/4), int(gridSize/2)));
    for (let index = 1; index < appleCount; index++) {
        apples.push(newApple());
    }
    hp = maxHp;
    score = 0;
    turn = 0;
    gameOver = false;
    moreNewGame();
}

function settings() {
    let speedInput = createInput(speed);
    speedInput.position(width - selectWidth + 60, 80);
    speedInput.size(selectWidth - 100, 20);
    speedInput.input(inputSpeed);
    let appleCountInput = createInput(appleCount);
    appleCountInput.position(width - selectWidth + 60, 110);
    appleCountInput.size(selectWidth - 100,20);
    appleCountInput.input(inputAppleCount);
    let maxhpInput = createInput(maxHp);
    maxhpInput.position(width - selectWidth + 60, 140);
    maxhpInput.size(selectWidth - 100, 20);
    maxhpInput.input(inputMaxhp);
    let maxTurnInput = createInput(maxTurn);
    maxTurnInput.position(width - selectWidth + 60, 170);
    maxTurnInput.size(selectWidth - 100, 20);
    maxTurnInput.input(inputmaxTurn);
    startButton = createButton("");
    startButton.position(width - selectWidth + 50, height/2+195);
    startButton.size(selectWidth - 100,20);
    startButton.mousePressed(newGame);
    moreSettings();
}

function drawLables() {
    fill(0,0,0);
    textSize(10);
    text("Speed:",width - selectWidth + 10, 40);
    text("Apples:",width - selectWidth + 10, 70);
    text("MaxHP:",width - selectWidth + 10, 100);
    text("MaxTurn:",width - selectWidth + 10, 130);
    text("HP:"+hp,width - selectWidth + 10, 160);
    textSize(15);
    text("Score:"+score,10, 20);
    text("Turn:"+turn,50 + 130, 20);
    fill(255,0,0);
    rect(width - selectWidth + 10, 170, 160 * hp/maxHp,10);
}

function inputmaxTurn(){
    val = this.value();
    if (val === "" || val == null || isNaN(val)){
        return;
    }
    maxTurn = int(val);
}

function inputMaxhp(){
    val = this.value();
    if (val === "" || val == null || isNaN(val)){
        return;
    }
    maxHp = int(val);
    hp = maxHp;
}

function inputSpeed(){
    val = this.value();
    if (val === "" || val == null || isNaN(val)){
        return;
    }
    speed = int(val);
    frameRate(speed);
}

function inputAppleCount(){
    val = this.value();
    if (val === "" || val == null || isNaN(val)){
        return;
    }
    appleCount = int(val);
    if (appleCount < apples.length){
        while (apples.length != appleCount){
            apples.pop();
        }
    }else if(appleCount > apples.length){
        while (apples.length != appleCount){
            apples.push(newApple());
        }
    }
}

function setup() {
    createCanvas(cellSize * gridSize + 2 + selectWidth, cellSize * gridSize + 2 + scoreHeight);
    newGame();
    settings();
    frameRate(speed);
    moreSetup();
}


function newApple() {
    notsnake = [];
    for (let index = 0; index < gridSize*gridSize; index++) {
        if (!snake.includes(index) && !apples.includes(index)){
            notsnake.push(index);
        }
    }
    return int(random(notsnake));
}

function drawGameOver() {
    fill(255,0,0);
    textSize(int(width/10));
    text(
        'GAME OVER',
        5,
        height/2-10
    );
}

function draw() {
    if (gameOver){
        drawGameOver();
        startButton.html("Start Game");
    }else{
        background(220);
        updateSnake();
        for (let col = 0; col < gridSize; col++) {
            for (let row = 0; row < gridSize; row++) {
                const idx = colRowToIndex(col, row);
                fill(255,248,220);
                rect(col * cellSize + 1, row * cellSize + 1 + scoreHeight, cellSize, cellSize, 1);
                if (snake.includes(idx)){
                    if (idx == snake[0]){
                        drawCircle(row,col);
                    } else {
                        drawSquare(row,col);
                    }
                } else if (apples.includes(idx)) {
                    drawApple(row,col);
                }
            }
        }
        startButton.html("Restart Game");
    }
    drawLables();
}

function checkOnApple() {
    hp -= 1;
    turn += 1;
    if (apples.includes(snake[0])){
        idx = apples.indexOf(snake[0]);
        apples[idx] = newApple();
        hp = maxHp;
        score += 1;
        moreUpdate();
    } else {
        moreUpdate();
        snake.splice(snake.length-1, 1)
    }
}

function updateSnake(){
    if (!gameOver){
        if (direction != ""){
            checkOnApple();
        }
        if (direction === "r"){
            if (snake[0] % gridSize === gridSize - 1){
                gameOver = true;
            }else{                
                snake.splice(0,0,snake[0]+1)
            }
        }else if (direction === "u"){
            if (snake[0] < gridSize){
                gameOver = true;
            }else{
                snake.splice(0,0,snake[0]-gridSize);
            }
        }else if (direction === "d"){
            if (snake[0] >= gridSize * (gridSize-1)){
                gameOver = true;
            }else{
                snake.splice(0,0,snake[0]+gridSize);
            }
        }else if (direction === "l"){
            if (snake[0] % gridSize === 0){
                gameOver = true;
            }else{
                snake.splice(0,0,snake[0]-1);
            }
        }
        for (let s = 1; s < snake.length; s++) {
            if (snake[0] == snake[s]) {
                gameOver = true;
            }
        }
        if (hp <= 0 || (turn >= maxTurn && maxTurn != 0)){
            gameOver = true;
        }
    }
}