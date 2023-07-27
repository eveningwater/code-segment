| 标题                      | 标签       |
| ------------------------- | ---------- |
| rangeNumber(映射数值范围) | math(数学) |

映射数值范围。

- 将当前数值减去要映射的范围最小值与原始映射范围值之差相乘，然后除以要映射的范围值之差，并加上原始范围最小值。

> 代码如下:

```js
const rangeNumber = (num, in_min, in_max, out_min, out_max) =>
  ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
```

> 调用方式:

```js
const num = 5;
console.log(scale(num, 0, 10, -50, 50)); // 0
console.log(scale(num, -20, 0, -100, 100)); // 150
```

> 应用场景

rangeNumber.html 如下:

<div class="code-editor" data-url="codes/javascript/html/rangeNumber.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/rangeNumber.html"></iframe>
