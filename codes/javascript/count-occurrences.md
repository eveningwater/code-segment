| 标题                                   | 标签                                 |
| -------------------------------------- | ------------------------------------ |
| countOccurrences(计算数组项出现的次数) | array,intermediate(数组，两者之间的) |

计算数组中某个值的出现次数。

- 每次在数组中遇到特定值时，使用 `Array.prototype.reduce()` 递增计数器。

> 代码如下:

```js
const countOccurrences = (arr, val) =>
  arr.reduce((r, v) => (v === val ? r + 1 : r), 0);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/count-occurrences.ts" data-language="typescript"></div>

> 调用方式:

```js
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/count-occurrences.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/count-occurrences.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/count-occurrences.html"></iframe>
