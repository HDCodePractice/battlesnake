function positionToDirection(start,end) {
    let [x1,y1] = start;
    let [x2,y2] = end;
    // console.log([x2,y2]);
    let newDirection = "";
    if(x1===x2) 
    {
        newDirection = (y1>y2) ? "u": "d";
    }else if(y1===y2) {
        newDirection = (x1 > x2) ? "l": "r";
    }
    // console.log(newDirection);
    return newDirection;
}
     

let CheckFlag = true;
let steps= [];
var myApple;
  /**
   * 寻路方法 (异步)
   * @param {Array} map 地图数据
   * @param {Array} start 起点 例如：[0, 0]
   * @param {Array} end 终点 例如：[50, 50]
   * @return Boolean
   */
function cicheng_getDirection(gridSize,snake,apples,direction){
    //检测最近的苹果
    // console.log("aaaaaaaaaa");
    let x = snake[0]%gridSize;
    let y = Math.floor(snake[0]/gridSize);    
    let map =new Array(grid*grid).fill(0);
    let status = true;
    myApple = (snake[0] === apples[0])? apples[1] : apples[0];
    let end = [myApple%gridSize,Math.floor(myApple/gridSize)];
    console.log("目标:",end);
    snake.forEach((s) => {
        map[s] = 1;
    })
    let table = Object.create(map);
    // for(let i=0;i<map.length;i++) {
    //     table.push([i%gridSize,Math.floor(i/gridSize)],map[i]);
    // }    
    // console.log(table);
    let start = [x,y]
    let queue =[start];

    // console.log("queue",queue,queue.length);
         /**
     * 入队方法 (异步)
     * @param {Integer} x
     * @param {Integer} y
     * @param {Array} pre 上一个格子的坐标：[x,y]
     */
    async function insert(x, y, pre,gridSize) {
        // console.log(x, y, pre,gridSize);
        // 到达底盘边缘，直接停止
        if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) return;
        if (table[y * gridSize + x]) return;
        table[y * gridSize + x] = pre;
        // 把可走的路推入队列
        
        queue.push([x, y]);
        // console.log([x,y],pre);
    }
    function getBestPath(x,y,gridSize) {
        if (x < 1 || x >= gridSize-1 || y < 1 || y >= gridSize-1) return false;
        if (table[y * gridSize + x]) return false;
        return true;

    }   
    function getAnyPath(x,y,gridSize) {
        if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
            console.log("x,y:",x,y);
            return false;
        }
        if (table[y * gridSize + x]) {
            console.log("table[y * gridSize + x]",table[y * gridSize + x]);;
            return false;
        }
        return true;

    }
    if(CheckFlag) {
        console.log("开始计算:",end);
        while(queue.length) {
            let [x,y] = queue.shift();
            // console.log("start,ENd",start,end,queue);
            //遇到终点位置返回
            if(x === end[0] && y===end[1]) {
                // let path =[];
                while (x != start[0] || y != start[1]) {
                    // console.log([x,y]);
                    steps.push([x,y]);
                    [x, y] = table[y * gridSize + x];                    
                    // await sleep(1);
                    // console.log("找到路径");
                }
                break;
            }
            // console.log("pre insert:",x - 1, y, [x, y],queue);
            insert(x - 1, y, [x, y],gridSize);
            insert(x, y - 1, [x, y],gridSize);
            insert(x + 1, y, [x, y],gridSize);
            insert(x, y + 1, [x, y],gridSize);

        }

     
        CheckFlag = false;
    }
    if(steps.length === 1)
    {
        console.log("锁死了,进入随机寻路模式,寻找最优解");
        CheckFlag = true;
        if(getBestPath(x,y-1,gridSize)) return "u";
        if(getBestPath(x,y+1,gridSize)) return "d";
        if(getBestPath(x+1,y,gridSize)) return "r";
        if(getBestPath(x-1,y,gridSize)) return "l"; 
        console.log("锁死了,进入随机寻路模式,寻找可能出口"); 
        if(getAnyPath(x,y-1,gridSize)) return "u";
        if(getAnyPath(x,y+1,gridSize)) return "d";
        if(getAnyPath(x+1,y,gridSize)) return "r";
        if(getAnyPath(x-1,y,gridSize)) return "l";           
        return "r";
    }
    if(steps.length > 1) {   
        let newLoc = steps.pop();    
        // console.log(steps);        
        if(steps.length === 2)  {
            CheckFlag = true;
            myApple = apples[1];
            console.log("重新开始计算!",apples);
        };
        let newDirection = positionToDirection(start,newLoc);
        //console.log(newLoc,newDirection);
        return newDirection;  
    };
      
        
}


ais['cicheng'] = cicheng_getDirection;