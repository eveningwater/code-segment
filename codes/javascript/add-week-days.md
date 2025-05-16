| 标题                | 标签       |
| ------------------- | ---------- |
| addWeekDays(添加周) | date(日期) |

添加给定的工作日数后计算日期。

- 使用 `Array.from()` 构造一个长度等于要添加的工作日数的数组。
- 使用 `Array.prototype.reduce()` 迭代数组，从 `startDate` 开始并递增，使用 `Date.prototype.getDate()` 和 `Date.prototype.setDate()`。
- 如果当前日期是周末，则通过添加一天或两天使其成为工作日再次更新它。
- 注意：不考虑法定节假日。

> 代码如下:

```js
const addWeekDays = (startDate, count) =>
  Array.from({ length: count }).reduce((date) => {
    date = new Date(date.setDate(date.getDate() + 1));
    if (date.getDay() % 6 === 0) {
      date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1)));
    }
    return date;
  }, startDate);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/add-week-days.ts" data-language="typescript"></div>

> 调用方式:

```js
addWeekDays(new Date("Oct 09, 2020"), 5); // 'Oct 16, 2020'
addWeekDays(new Date("Oct 12, 2020"), 5); // 'Oct 19, 2020'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/add-week-days.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/add-week-days.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/add-week-days.html"></iframe>
