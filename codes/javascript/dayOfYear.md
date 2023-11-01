| 标题                   | 标签                       |
| ---------------------- | -------------------------- |
| dayOfYea(一年中的哪天) | date,beginner(日期,初学者) |

从 Date 对象中获取一年中的哪一天（范围 1-366 中的数字）。

- 使用 Date 构造函数和 `Date.prototype.getFullYear()` 将一年中的第一天作为 Date 对象。
- 从 date 中减去一年中的第一天，然后除以每天的毫秒数得到结果。
- 使用 `Math.floor()` 将生成的天数适当地四舍五入为整数。

> 代码如下:

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
```

> 调用方式:

```js
dayOfYear(new Date()); // 当前时间是2022-2-25,所以答案是56
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/dayOfYear.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/dayOfYear.html"></iframe>
