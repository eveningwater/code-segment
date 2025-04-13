| 标题                     | 标签       |
| ------------------------ | ---------- |
| divMod(求两个数的商和模) | math(数学) |

返回由给定数字的商和余数组成的数组。

- 使用 `Math.floor()` 获得除法 `x / y` 的商。
- 使用模运算符 (`%`) 获得除法 `x / y` 的余数。

> 代码如下:

```js
const divMod = (x, y) => [Math.floor(x / y), x % y];
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/div-mod.ts" data-language="typescript"></div>

> 调用方式:

```js
divMod(8, 3); // [2, 2]
divMod(3, 8); // [0, 3]
divMod(5, 5); // [1, 0]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/div-mod.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/div-mod.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/div-mod.html"></iframe>
