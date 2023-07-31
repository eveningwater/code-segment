| 标题             | 标签                                          |
| ---------------- | --------------------------------------------- |
| accumulate(累加) | math,array,intermediate(数学，数组，两者之间) |

将数组每一项与该项的前面项累加，得到每一项的结果。

- 使用`Array.prototype.reduce()`（使用空数组累加器进行初始化）并遍历每一数组项。
- 使用`Array.prototype.slice(-1)`，扩展运算符（`...`）和一元`+`运算符将每个值添加到包含先前总和的累加器数组中。

> 代码如下:

```js
const accumulate = (...args) =>
  args.reduce((acc, n) => [...acc, n + +acc.slice(-1)], []);
```

> 调用方式:

```js
accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/accumulate.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/accumulate.html"></iframe>
