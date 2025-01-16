| 标题                | 标签                                            |
| ------------------- | ----------------------------------------------- |
| averageBy(求平均数) | math,array,intermediate(数学，数组，两者之间的) |

使用提供的函数将每个元素映射到一个值后，计算数组的平均值。

- 使用 `Array.prototype.map()` 将每个元素映射到 `handler` 返回的值。
- 将结果数组除以其长度。

> 代码如下:

```js
//参数应该是一个回调函数或者字符串
const averageBy = (arr, handler) =>
  arr
    .map(typeof handler === 'function' ? handler : val => val[handler])
    .reduce((acc, val) => acc + val, 0) / arr.length;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/average-by.ts" data-language="typescript"></div>

> 调用方式:

```js
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/average-by.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/average-by.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/average-by.html"></iframe>
