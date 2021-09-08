function cicheng_getDirection(gridSize,snake,apple,direction){
    // console.log("snake:",snake[0])
    //检查可选方向
    directions = ["l", "r","u","d"];
    //检查是否可以向左
    if(snake.includes(snake[0]-1) || (snake[0]+ 1)%gridSize ==1)
    {
        directions.splice(directions.indexOf("l"),1);
    }
    //检查是否可以向右
    if(snake.includes(snake[0]+1) || (snake[0]+ 1)%gridSize ==0)
    {
        directions.splice(directions.indexOf("r"),1);
    }
    //检查是否可以向上
    if(snake.includes(snake[0]-gridSize) || (snake[0] < gridSize))
    {
        directions.splice(directions.indexOf("u"),1);
    }
    //检查是否可以向下
    if(snake.includes(snake[0]+gridSize) || (snake[0] > gridSize * (gridSize-1)))
    {
        directions.splice(directions.indexOf("d"),1);
    }
    // if(snake.length > 30)
    // {
    //     return directions[0]
    // }
    //检查苹果和蛇头的位置,尽可能朝向苹果方向,可以考虑继续优化
    distance = apple - snake[0];
    distanceX = distance % gridSize;
    distanceY = parseInt(distance/gridSize);
    if(distance > 0) {
        if(distanceX==0) {
            if(directions.includes("d")) {
                return "d";
            }
        }else if(distanceY == 0){
            if(directions.includes("r")) {
                return "r";
            }
        }
    } else {
        if(distanceX==0) {
            if(directions.includes("u")) {
                return "u";
            }
        }else if(distanceY == 0){
            if(directions.includes("l")) {
                return "l";
            }
        }
        }
    
    console.log(directions);
    if(directions.length > 0){
        return directions[0];
    }else {
        return direction;
    }
    
}

speed = 100;
ais['cicheng'] = cicheng_getDirection;