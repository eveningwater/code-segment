| 标题                            | 标签        |
| ------------------------------- | ----------- |
| everyNth(返回数组的第 n 个元素) | array(数组) |

返回数组中的每个第 `n` 个元素。

- 使用 `Array.prototype.filter()` 创建一个包含给定数组的每个第 `n` 个元素的新数组。

> 代码如下:

```js
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/every-nth.ts" data-language="typescript"></div>

> 调用方式:

```js
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/every-nth.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/every-nth.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/every-nth.html"></iframe>
