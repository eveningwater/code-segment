|  标题   | 标签  |
|  ----  | ----  |
| maxBy(通过回调函数查找数组的最大值) | math,array(数学，数组) |

在使用提供的函数将每个元素映射到一个值后，返回数组的最大值。

* 使用 Array.prototype.map() 将每个元素映射到 fn 返回的值。
* 使用 Math.max() 获取最大值。

```js
const maxBy = (arr,fn) => Math.max(...arr.map(typeof fn === "function" ? fn : val => val[fn]));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/max-by.ts" data-language="typescript"></div>

> 调用方式:

```js
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n); // 8
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 8
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/max-by.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/max-by.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/max-by.html"></iframe>