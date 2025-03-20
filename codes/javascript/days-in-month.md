| 标题                        | 标签                       |
| --------------------------- | -------------------------- |
| daysInMonth(一个月有多少天) | date,beginner(日期,初学者) |

获取指定年份的给定月份的天数。

- 使用 `Date` 构造函数根据给定的年份和月份创建日期。
- 将 `days` 参数设置为 `0` 以获取上个月的最后一天，因为月份是零索引的。
- 使用 `Date.prototype.getDate()` 返回给定月份的天数。

> 代码如下:

```js
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/days-in-month.ts" data-language="typescript"></div>

> 调用方式:

```js
daysInMonth(2020, 12); // 31
daysInMonth(2024, 2); // 29
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/days-in-month.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/days-in-month.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/days-in-month.html"></iframe>
