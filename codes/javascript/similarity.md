| 标题                   | 标签                   |
| ---------------------- | ---------------------- |
| similarity(求数组交集) | array,math(数组，数学) |

返回出现在两个数组中的元素数组。

- 使用 Array.prototype.includes() 来确定不属于值的值。
- 使用 Array.prototype.filter() 删除它们。

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v));
```

<div class="code-editor" data-url="codes/javascript/ts/similarity.ts" data-language="typescript"></div>

> 调用方式:

```js
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/similarity.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/similarity.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/similarity.html"></iframe>