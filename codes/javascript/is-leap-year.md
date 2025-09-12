| 标题                   | 标签       |
| ---------------------- | ---------- |
| isLeapYear(是否是闰年) | date(日期) |

检查给定年份是否为闰年。

- 使用 Date 构造函数，将日期设置为给定年份的 2 月 29 日。
- 使用 Date.prototype.getMonth() 检查月份是否等于 1。

```js
const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-leap-year.ts" data-language="typescript"></div>

> 调用方式:

```js
isLeapYear(2019); // false
isLeapYear(2020); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-leap-year.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-leap-year.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-leap-year.html"></iframe>
