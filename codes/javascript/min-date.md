|  标题   | 标签  |
|  ----  | ----  |
| minDate(查找最小日期) | date(日期) |

返回给定日期的最小值。

* 使用带有 Math.min() 的 ES6 传播语法来查找最小日期值。
* 使用 Date 构造函数将其转换为 Date 对象。

```js
const minDate = (...dates) => new Date(Math.min(...dates));
```

<div class="code-editor" data-url="codes/javascript/ts/min-date.ts" data-language="typescript"></div>

> 调用方式:

```js
const dates = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(...dates); // 2016-01-08T22:00:00.000Z
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/min-date.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/min-date.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/min-date.html"></iframe>