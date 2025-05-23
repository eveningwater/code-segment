| 标题                         | 标签                      |
| ---------------------------- | ------------------------- |
| distance(计算两点之间的距离) | math,algorithm(数学,算法) |

计算两点之间的距离。

- 使用 Math.hypot() 计算两点之间的欧几里得距离。

> 代码如下:

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/distance.ts" data-language="typescript"></div>

> 调用方式:

```js
distance(1, 1, 2, 3); // ~2.2361
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/distance.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/distance.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/distance.html"></iframe>
