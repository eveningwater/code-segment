| 标题                                    | 标签        |
| --------------------------------------- | ----------- |
| findConsecutive(查找所有连续元素的数组) | array(数组) |

查找所有连续元素的数组。

使用 `Array.prototype.slice()` 创建一个数组，从一开始就删除了 `n - 1` 个元素。
使用 `Array.prototype.map()` 和 `Array.prototype.slice()` 将每个元素映射到一个包含 `n` 个连续元素的数组。

> 代码如下:

```js
const findConsecutive = (arr, n) =>
  arr.slice(n - 1).map((v, i) => arr.slice(i, i + n));
```

> 调用方式:

```js
findConsecutive([1, 2, 3, 4, 5], 2);
// [[1, 2], [2, 3], [3, 4], [4, 5]]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/findConsecutive.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/findConsecutive.html"></iframe>
