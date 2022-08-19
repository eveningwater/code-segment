|  标题   | 标签  |
|  ----  | ----  |
| getHoursDiffBetweenDates(获取日期之间的小时差) | date(日期) |

计算两个日期之间的差异（以小时为单位）。

* 减去两个 Date 对象并除以一小时内的毫秒数，得到它们之间的差异（以小时为单位）。

```js
const getHoursDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600)
```

> 调用方式:

```js
getHoursDiffBetweenDates(
  new Date('2021-04-24 10:25:00'),
  new Date('2021-04-25 10:25:00')
); // 24
```


> 应用场景












