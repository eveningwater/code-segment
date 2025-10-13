| 标题                    | 标签       |
| ----------------------- | ---------- |
| isWeekday(是否是工作日) | type(类型) |

检查给定日期是否为工作日。

- 使用 Date.prototype.getDay() 通过取模运算符 (%) 检查工作日。
- 省略参数 d 以使用当前日期作为默认值。

```js
const isWeekday = (d = new Date()) => d.getDay() % 6 !== 0;
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-weekday.ts" data-language="typescript"></div>

> 调用方式:

```js
isWeekday(); // true (if current date is 2022-11-03)
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-weekday.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-weekday.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-weekday.html"></iframe>
