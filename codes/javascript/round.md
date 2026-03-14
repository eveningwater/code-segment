| 标题                | 标签       |
| ------------------- | ---------- |
| round(四舍五入数字) | math(数学) |

将数字四舍五入到指定的位数。

- 使用 Math.round() 和模板文字将数字四舍五入到指定的位数。
- 省略第二个参数 decimals，以四舍五入为整数。

```js
// 函数参数
const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
```

<div class="code-editor" data-url="codes/javascript/ts/round.ts" data-language="typescript"></div>

> 调用方式:

```js
round(1.005, 2); // 1.01
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/round.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/round.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/round.html"></iframe>