|  标题   | 标签  |
|  ----  | ----  |
| geometricProgression(几何级数) | math,algorithm(数学，算法) |

初始化一个数组，该数组包含指定范围内的数字，其中 start 和 end 包含在内，并且两项之间的比率为 step。 如果 step 等于 1，则返回错误。

* 使用 Array.from()、Math.log() 和 Math.floor() 创建所需长度的数组，使用 Array.prototype.map() 填充范围内的所需值。
* 省略第二个参数 start 以使用默认值 1。
* 省略第三个参数 step 以使用默认值 2。


```js
//Math.log(end / start) / Math.log(step) 表示以step为底数，end / start的对数
const geometricProgression = (end,start = 1,step = 2) => Array.from(
    { 
        length:Math.floor(Math.log(end / start) / Math.log(step)) + 1
    }
).map((_,i) => start * step ** i);
```

> 调用方式:

```js
geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]
geometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]
geometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]
```


> 应用场景







