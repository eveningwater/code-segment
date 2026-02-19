| 标题              | 标签                   |
| ----------------- | ---------------------- |
| ranking(数组比较) | array,math(数组，数学) |

根据比较器函数计算数组的排名。

- 使用 Array.prototype.map() 和 Array.prototype.filter() 使用提供的比较函数将每个元素映射到一个等级。

```js
const ranking = (arr, compFn) =>
  arr.map(a => arr.filter(b => compFn(a, b)).length + 1);
```

<div class="code-editor" data-url="codes/javascript/ts/ranking.ts" data-language="typescript"></div>

> 调用方式:

```js
ranking([8, 6, 9, 5], (a, b) => a < b);
// [2, 3, 1, 4]
ranking(['c', 'a', 'b', 'd'], (a, b) => a.localeCompare(b) > 0);
// [3, 1, 2, 4]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/ranking.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/ranking.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/ranking.html"></iframe>