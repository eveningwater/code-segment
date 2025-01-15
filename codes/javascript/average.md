| 标题              | 标签                                    |
| ----------------- | --------------------------------------- |
| average(求平均数) | math,array,beginner(数学，数组，初学者) |

计算两个或多个数字的平均数。

- 使用 `Array.prototype.reduce()` 将每个值添加到累加器中，初始化值为 `0`。
- 将结果数组除以其长度。

> 代码如下:

```js
const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/average.ts" data-language="typescript"></div>

> 调用方式:

```js
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/average.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/average.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/average.html"></iframe>
