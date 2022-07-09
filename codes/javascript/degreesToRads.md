|  标题   | 标签  |
|  ----  | ----  |
| degreesToRads(角度转弧度) | math(数学) |

将角度从度数转换为弧度。

* 使用 `Math.PI` 和度数到弧度公式将角度从度数转换为弧度。

> 代码如下:

```js
const degreesToRads = deg => (Math.PI * deg) / 180.0;
```

> 调用方式:

```js
degreesToRads(90.0); // ~1.5708
```

> 应用场景