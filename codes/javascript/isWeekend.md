| 标题                  | 标签       |
| --------------------- | ---------- |
| isWeekend(是否是周末) | type(类型) |

检查给定日期是否为周末。

- 使用 Date.prototype.getDay() 通过取模运算符 (%) 检查周末。
- 省略参数 d 以使用当前日期作为默认值。

```js
const isWeekend = (d = new Date()) => d.getDay() % 6 === 0;
```

> 调用方式:

```js
isWeekend(); // true (if current date is 2022-11-05)
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isWeekend.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isWeekend.html"></iframe>
