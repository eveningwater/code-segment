| 标题                                             | 标签       |
| ------------------------------------------------ | ---------- |
| getMinutesDiffBetweenDates(获取日期之间的分钟差) | date(日期) |

计算两个日期之间的差异（以分钟为单位）。

- 减去两个 Date 对象并除以一分钟的毫秒数，得到它们之间的差异（以分钟为单位）。

```js
const getMinutesDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 60);
```

> 调用方式:

```js
getMinutesDiffBetweenDates(
  new Date('2021-04-24 01:00:15'),
  new Date('2021-04-24 02:00:15')
); // 60
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getMinutesDiffBetweenDates.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getMinutesDiffBetweenDates.html"></iframe>
