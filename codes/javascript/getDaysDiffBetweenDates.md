| 标题                                          | 标签       |
| --------------------------------------------- | ---------- |
| getDaysDiffBetweenDates(获取日期之间的天数差) | date(日期) |

计算两个日期之间的差异（以天为单位）。

- 减去两个 Date 对象并除以一天中的毫秒数，得到它们之间的差异（以天为单位）。

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
```

> 调用方式:

```js
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getDaysDiffBetweenDates.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getDaysDiffBetweenDates.html"></iframe>
