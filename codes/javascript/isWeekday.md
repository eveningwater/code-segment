| 标题                    | 标签       |
| ----------------------- | ---------- |
| isWeekday(是否是工作日) | type(类型) |

检查给定日期是否为工作日。

- 使用 Date.prototype.getDay() 通过取模运算符 (%) 检查工作日。
- 省略参数 d 以使用当前日期作为默认值。

```js
const isWeekday = (d = new Date()) => d.getDay() % 6 !== 0;
```

> 调用方式:

```js
isWeekday(); // true (if current date is 2022-11-03)
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isWeekday.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isWeekday.html"></iframe>
