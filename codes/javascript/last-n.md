| 标题                 | 标签        |
| -------------------- | ----------- |
| lastN(最后 n 个元素) | array(数组) |

获取数组的最后 n 个元素。

- 使用起始值为 -n 的 `Array.prototype.slice()` 来获取 arr 的最后 n 个元素。

```js
const lastN = (arr, n) => arr.slice(-n);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/last-n.ts" data-language="typescript"></div>

> 调用方式:

```js
lastN(["a", "b", "c", "d"], 2); // ['c', 'd']
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/last-n.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/last-n.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/last-n.html"></iframe>
