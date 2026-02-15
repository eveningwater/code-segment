| 标题                                    | 标签                      |
| --------------------------------------- | ------------------------- |
| randomIntArrayInRange(随机生成整数数组) | math,random(数学，随机数) |

生成指定范围内的 n 个随机整数的数组。

- 使用 Array.from() 创建一个特定长度的空数组。
- 使用 Math.random() 生成随机数并将它们映射到所需的范围，使用 Math.floor() 使它们成为整数。

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
```

<div class="code-editor" data-url="codes/javascript/ts/random-int-array-in-range.ts" data-language="typescript"></div>

> 调用方式:

```js
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/random-int-array-in-range.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/random-int-array-in-range.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/random-int-array-in-range.html"></iframe>