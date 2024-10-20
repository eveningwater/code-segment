| 标题                   | 标签                                 |
| ---------------------- | ------------------------------------ |
| aperture(创建连续数组) | array,intermediate(数组，两者之间的) |

创建连续元素的`n`元组数组。

- 使用`Array.prototype.slice()`和`Array.prototype.map()`创建适当长度的数组。
- 使用`arr`中连续元素的`n`元组填充数组。
- 如果`n`大于`arr`的长度，则返回一个空数组。

> 代码如下:

```js
const aperture = (arr, n) =>
  n > arr.length ? [] : arr.slice(n - 1).map((v, i) => arr.slice(i, i + n));
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/aperture.ts" data-language="typescript"></div>

> 调用方式:

```js
aperture([1, 2, 3, 4], 2); // [[1, 2], [2, 3], [3, 4]]
aperture([1, 2, 3, 4], 3); // [[1, 2, 3], [2, 3, 4]]
aperture([1, 2, 3, 4], 5); // []
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/aperture.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/aperture.html"></iframe>
