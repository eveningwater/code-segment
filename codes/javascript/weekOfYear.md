| 标题                         | 标签       |
| ---------------------------- | ---------- |
| weekOfYear(对应日期的第几周) | date(日期) |

返回日期对应的一年中的零索引周。

- 使用 Date 构造函数和 Date.prototype.getFullYear() 获取一年中的第一天作为 Date 对象。
- 使用 Date.prototype.setDate()、Date.prototype.getDate() 和 Date.prototype.getDay() 以及模 (%) 运算符来获取一年中的第一个星期一。
- 从给定日期中减去一年中的第一个星期一，然后除以一周的毫秒数。
- 使用 Math.round() 获取一年中与给定日期对应的零索引周。
- 如果给定日期在一年中的第一个星期一之前，则返回 -0。

```js
const weekOfYear = date => {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  startOfYear.setDate(startOfYear.getDate() + (startOfYear.getDay() % 7));
  return Math.round((date - startOfYear) / (7 * 24 * 3600 * 1000));
};
```

> 调用方式:

```js
weekOfYear(new Date('2021-06-18')); // 23
```

> 应用场景
