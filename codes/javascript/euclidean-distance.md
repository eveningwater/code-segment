| 标题                                  | 标签                       |
| ------------------------------------- | -------------------------- |
| euclideanDistance(计算两点之间的距离) | math,algorithm(数学，算法) |

计算任意维数中两点之间的距离。

- 使用 `Object.keys()` 和 `Array.prototype.map()` 将每个坐标映射到两点之间的差异。
- 使用 `Math.hypot()` 计算两点之间的欧几里得距离。

> 代码如下:

```js
const euclideanDistance = (a, b) =>
  Math.hypot(...Object.keys(a).map((k) => b[k] - a[k]));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/euclidean-distance.ts" data-language="typescript"></div>

> 调用方式:

```js
euclideanDistance([1, 1], [2, 3]); // ~2.2361
euclideanDistance([1, 1, 1], [2, 3, 2]); // ~2.4495
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/euclidean-distance.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/euclidean-distance.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/euclidean-distance.html"></iframe>
