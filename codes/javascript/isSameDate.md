| 标题                         | 标签       |
| ---------------------------- | ---------- |
| isSameDate(是否是相同的日期) | date(日期) |

检查一个日期是否与另一个日期相同。

- 使用 Date.prototype.toISOString() 和严格相等检查 (===) 来检查第一个日期是否与第二个日期相同。

```js
const isSameDate = (dateA, dateB) =>
  dateA.toISOString() === dateB.toISOString();
```

> 调用方式:

```js
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isSameDate.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isSameDate.html"></iframe>
