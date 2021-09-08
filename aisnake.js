const cellSize = 20;
const gridSize = 15;
const scoreHeight = 50;
const aiListWith = 100;
let speed = 2;

let grid = [];
let snake = [];
let direction = "r";  // l, r, u, d
let score;
let apple = 0;
let gameOver = false;
let appleCount = 3;
let ais = {};

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
    direction = "r";
    apple = colRowToIndex(int(gridSize* 3/4), int(gridSize/2));
}

function setup() {
    createCanvas(cellSize * gridSize + 2 + aiListWith, cellSize * gridSize + 2 + scoreHeight);
    newGame();
    gameOver = false;
    frameRate(speed);
}

function keyPressed() {
    if (key === 'Enter') {
        setup();
    }
}

function resetApple() {
    notsnake = [];
    for (let index = 0; index < gridSize*gridSize; index++) {
        if (!snake.includes(index)) {
            notsnake.push(index);
        }
    }
    apple = int(random(notsnake));
}

function checkOnApple() {
    if (snake[0] === apple){
        resetApple();
    } else {
        snake.splice(snake.length-1, 1)
    }
}

function updateSnake(){
    if (!gameOver){
        direction = ais['cicheng'](gridSize,snake,apple,direction);
        if (direction === "r"){
            if (snake[0] % gridSize === gridSize - 1){
                gameOver = true;
            }else{
                checkOnApple();
                snake.splice(0,0,snake[0]+1)
            }
        }else if (direction === "u"){
            if (snake[0] < gridSize){
                gameOver = true;
            }else{
                checkOnApple();
                snake.splice(0,0,snake[0]-gridSize);
            }
        }else if (direction === "d"){
            if (snake[0] >= gridSize * (gridSize-1)){
                gameOver = true;
            }else{
                checkOnApple();
                snake.splice(0,0,snake[0]+gridSize);
            }
        }else if (direction === "l"){
            if (snake[0] % gridSize === 0){
                gameOver = true;
            }else{
                checkOnApple();
                snake.splice(0,0,snake[0]-1);
            }
        }
        for (let s = 1; s < snake.length; s++) {
            if (snake[0] == snake[s]) {
                gameOver = true;
            }
        }
    }
}

function drawGameOver() {
    fill(255,0,0);
    textSize(int(width/10));
    text(
        'GAME OVER\nClick [Enter] to restart',
        5,
        height/2-10
    );
}


function draw() {
    if (gameOver){
        drawGameOver();
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
                } else if (idx == apple) {
                    drawApple(row,col);
                }
            }
        }
    }
}