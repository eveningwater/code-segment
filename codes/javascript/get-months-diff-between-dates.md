| 标题                                            | 标签       |
| ----------------------------------------------- | ---------- |
| getMonthsDiffBetweenDates(获取日期之间的月份差) | date(日期) |

计算两个日期之间的差异（以月为单位）。

- 使用 Date.prototype.getFullYear() 和 Date.prototype.getMonth() 计算两个 Date 对象之间的差异（以月为单位）。

```js
const getMonthsDiffBetweenDates = (dateInitial, dateFinal) =>
  Math.max(
    (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12 +
      dateFinal.getMonth() -
      dateInitial.getMonth(),
    0
  );
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-months-diff-between-dates.ts" data-language="typescript"></div>

> 调用方式:

```js
getMonthsDiffBetweenDates(new Date('2017-12-13'), new Date('2018-04-29')); // 4
```

> 应用场景


以下是一个实战<a href="codes/javascript/html/get-months-diff-between-dates.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/get-months-diff-between-dates.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-months-diff-between-dates.html"></iframe>
