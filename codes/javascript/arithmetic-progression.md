| 标题                                    | 标签                        |
| --------------------------------------- | --------------------------- |
| arithmeticProgression(倍数连续数字数组) | math,beginner(数学，初学者) |

从创建一个倍数连续数字数组，从给定的正整数开始，直至指定的限制。

- 使用`Array.from()`创建所需长度，`limit / n`的数组，并使用`map`函数在给定范围内填充所需值。

> 代码如下:

```js
const arithmeticProgression = (n, limit) =>
  Array.from({ length: Math.ceil(limit / n) }, (_, i) => (i + 1) * n);
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/arithmetic-progression.ts" data-language="typescript"></div>

> 调用方式:

```js
arithmeticProgression(5, 25); // [5, 10, 15, 20, 25]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/arithmetic-progression.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/arithmetic-progression.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/arithmetic-progression.html"></iframe>
