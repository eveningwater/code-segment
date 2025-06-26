| 标题                                             | 标签       |
| ------------------------------------------------ | ---------- |
| getMinutesDiffBetweenDates(获取日期之间的分钟差) | date(日期) |

计算两个日期之间的差异（以分钟为单位）。

- 减去两个 Date 对象并除以一分钟的毫秒数，得到它们之间的差异（以分钟为单位）。

```js
const getMinutesDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 60);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-minutes-diff-between-dates.ts" data-language="typescript"></div>

> 调用方式:

```js
getMinutesDiffBetweenDates(
  new Date('2021-04-24 01:00:15'),
  new Date('2021-04-24 02:00:15')
); // 60
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-minutes-diff-between-dates.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/get-minutes-diff-between-dates.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-minutes-diff-between-dates.html"></iframe>
