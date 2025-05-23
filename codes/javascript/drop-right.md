| 标题                | 标签        |
| ------------------- | ----------- |
| dropRight(截取数组) | array(数组) |

创建一个从右侧移除 n 个元素的新数组。

- 使用 `Array.prototype.slice()` 从右侧移除指定数量的元素。
- 省略最后一个参数 `n`，以使用默认值 `1`。

> 代码如下:

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/drop-right.ts" data-language="typescript"></div>

> 调用方式:

```js
dropRight([1, 2, 3]); // [1, 2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/drop-right.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/drop-right.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/drop-right.html"></iframe>
