| 标题                                         | 标签                        |
| -------------------------------------------- | --------------------------- |
| approximatelyEqual(检查两个数字是否近似相等) | math,beginner(数学，初学者) |

检查两个数字是否近似相等。

- 使用`Math.abs()`将两个值的绝对差与`epsilon`进行比较。
- 如果不传第二个参数，`epsilon`,则默认为`0.001`。

> 代码如下:

```js
const approximatelyEqual = (a, b, epsilon = 0.001) => Math.abs(a - b) < epsilon;
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/approximatelyEqual.ts" data-language="typescript"></div>

> 调用方式:

```js
approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/approximatelyEqual.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/approximatelyEqual.html"></iframe>
