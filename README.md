# battlesnake
# 中文 (English [below](https://github.com/HDCodePractice/battlesnake#ENGLISH))
贪吃蛇大战，从人玩、AI玩到人人对战、人机对战、AI与AI对战的疯狂贪吃蛇

游戏可以访问 [这里](https://hdcodepractice.github.io/battlesnake/)

## 单人独自玩

可以去 [单人游戏](https://hdcodepractice.github.io/battlesnake/snake.html) 按上下左右即可玩起来

## 单个AI

可以去 [单AI游戏](https://hdcodepractice.github.io/battlesnake/aisnake.html) 选择你想要运行的AI

### 如何加入自己的AI

#### 建立自己的AI脚本

请在 [ai-p](https://github.com/HDCodePractice/battlesnake/tree/main/ai-p) 目录中加入你自己的AI脚本文件，文件名为你的名字后缀.js。
这是一个模板代码：

```
function hdcola_getDirection(gridSize,snake,apples,direction){
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

ais['hdcola'] = hdcola_getDirection;
```

脚本中需要有一个函数，名字为 `yourname_getDirection(gridSize,snake,apple,direction)`，转入的参数分别为：

* gridSize: 为地图大小，地图为一个正方形，大小为 gridSize * gridSize
* snake: 是一个数组，snake[0]为蛇头的坐标，这个坐标为 row * gridSize + col, 其中 row 为行号, col 为列号
* apples: 是一个Int Array，包含所有苹果的坐标，与上面的坐标一样计算方式
* direction: 是一个字符串，表示蛇头的方向，可能的值为："l","d","r","u"，分表代表左、下、右、上
* 这个函数应该返回一个字符串，表示接下来蛇头的方向，值的内容能见上面direction的说明

脚本的最后，要有给 ais 字典加入你的名字，值为你的函数名。

#### 在html中加入自己的AI脚本

最后请在 [aisnake.html](https://github.com/HDCodePractice/battlesnake/blob/main/aisnake.html) 中加入你自己的AI代码脚本。

#### 运行你的AI蛇

如果要运行你的AI蛇，现在需要去手动修改 `aisnake.js` 的第83行

https://github.com/HDCodePractice/battlesnake/blob/eb9e4048a7cfd152aa09ea33b4af53bce4057596/aisnake.js#L83

把 `ais['sicheng']` 中的 `sicheng` 改成你在自己脚本里注册的名字即可。

晚些还会加入自动加载功能，函数接口也会发生一点变化，敬请参与 :) 

## 相关资源

* [我们的Telegram频道](https://t.me/ChildPrograming) 这里有最新的进展，欢迎在评论里讨论
* [VS Code](https://code.visualstudio.com/)  编写代码的IDE
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 在VS Code中运行一个HTTP服务器，方便调试你的代码

=========================================
ENGLISH
=========================================
Snake game battle: we have currently written the single-playera and single AI play versions; multiplayer battle, human-machine battle and AI *VS* AI battle on their way!

The game can be accessed [here](https://hdcodepractice.github.io/battlesnake/).

## Single-player

You can go to [play alone](https://hdcodepractice.github.io/battlesnake/snake.html). Press up, down, left, and right buttons to play.

## Single AI (code it yourself)

You can go [here](https://hdcodepractice.github.io/battlesnake/aisnake.html) to code the AI you want to run.

### How to make your own AI

#### Build your own AI script

Please add your own AI script file in the [ai-p](https://github.com/HDCodePractice/battlesnake/tree/main/ai-p) directory, the file name is your name + the suffix `.js`, i.e. `sicheng.js`.

This is a template code:

```
function hdcola_getDirection(gridSize,snake,apples,direction){
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

ais['hdcola'] = hdcola_getDirection;
```

There needs to be a function in the script, the name is `yourname_getDirection(gridSize,snake,apple,direction)`, the transferred parameters are:

* gridSize: the sides of the square map, the area of the map is gridSize * gridSize
* snake: an array, snake[0] is the coordinates of the snake head, this coordinate is row * gridSize + col, where row is the row number and col is the column number
* apple: an array, representing the coordinates of the apple, which is calculated in the same way as the coordinates above
* direction: a string representing the direction of the snake head, possible values are: "l", "d", "r", "u", representing left, down, right, and up respectively
* This function should return a string indicating the direction of the next snake head. The content of the value can be seen in the description of direction above ("l", "d", "r", "u")

At the end of the script, you must add your function name to the ais dictionary.

#### Add your own AI script in html

Finally, please add your own AI code script in [aisnake.html](https://github.com/HDCodePractice/battlesnake/blob/main/aisnake.html).

#### Run your AI snake

If you want to run your AI snake, manually modify line 83 of `aisnake.js`

https://github.com/HDCodePractice/battlesnake/blob/eb9e4048a7cfd152aa09ea33b4af53bce4057596/aisnake.js#L83

Just change the name of `sicheng` in `ais['sicheng']` to the one that you registered in your script.

The automatic loading function will be added later, and the function interface will also undergo a little change, so please participate :)

## Related Resources

     * [Our Telegram Channel](https://t.me/ChildPrograming) Here are the latest developments, welcome to discuss in the comments
     * [VS Code](https://code.visualstudio.com/) IDE for writing code
     * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) Run an HTTP server in VS Code to facilitate debugging of your code
=========================================
作者/Written by: [hdcola](https://github.com/hdcola), [Sichengthebest](https://github.com/Sichengthebest)