# battlesnake
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
function hdcola_getDirection(gridSize,snake,apple,direction){
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

脚本中需要有一个函数，名字为 youname_getDirection(gridSize,snake,apple,direction)，转入的参数分别为：

* gridSize: 为地图大小，地图为一个正方形，大小为 gridSize * gridSize
* snake: 是一个数组，snake[0]为蛇头的坐标，这个坐标为 row * gridSize + col, 其中 row 为行号, col 为列号
* apple: 是一个Int，表示苹果的坐标，与上面的坐标一样计算方式
* dirction: 是一个字符串，表示蛇头的方向，可能的值为："l","d","r","u"，分表代表左、下、右、上
* 这个函数应该返回一个字符串，表示接下来蛇头的方向，值的内容能见上面dirction的说明

脚本的最后，要有给 ais 字典加入你的名字，值为你的函数名。

#### 在html中加入自己的AI脚本

最后请在 [aisnake.html](https://github.com/HDCodePractice/battlesnake/blob/main/aisnake.html) 中加入你自己的AI代码脚本。

#### 运行你的AI蛇

如果要运行你的AI蛇，现在需要去手动修改 `aisnake.js` 的第83行

https://github.com/HDCodePractice/battlesnake/blob/eb9e4048a7cfd152aa09ea33b4af53bce4057596/aisnake.js#L83

把 `ais['sicheng']` 中的 `sicheng` 你在自己脚本里注册的名字即可。

晚些还会加入自动加载功能，函数接口也会发生一点变化，敬请参与 :) 