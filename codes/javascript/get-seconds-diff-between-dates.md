| 标题                                             | 标签       |
| ------------------------------------------------ | ---------- |
| getSecondsDiffBetweenDates(获取日期之间的秒数差) | date(日期) |

计算两个日期之间的差异（以秒为单位）。

- 减去两个 Date 对象并除以一秒内的毫秒数，得到它们之间的差异（以秒为单位）。

```js
const getSecondsDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / 1000;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-seconds-diff-between-dates.ts" data-language="typescript"></div>

> 调用方式:

```js
getSecondsDiffBetweenDates(
  new Date('2020-12-24 00:00:15'),
  new Date('2020-12-24 00:00:17')
); // 2
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-seconds-diff-between-dates.html" target="_blank" rel="noopener noreferrer">示例</a>:


<div class="code-editor" data-url="codes/javascript/html/get-seconds-diff-between-dates.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-seconds-diff-between-dates.html"></iframe>
