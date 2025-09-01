| 标题                               | 标签       |
| ---------------------------------- | ---------- |
| isBetweenDates(日期比较(范围之间)) | date(日期) |

检查日期是否在其他两个日期之间。

- 使用大于 (`>`) 和小于 (`<`) 运算符来检查日期是否在 dateStart 和 dateEnd 之间。

```js
const isBetweenDates = (dateStart, dateEnd, date) => {
  if (
    dateStart instanceof Date &&
    dateEnd instanceof Date &&
    date instanceof Date
  ) {
    return date > dateStart && date < dateEnd;
  }
  return false;
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-between-dates.ts" data-language="typescript"></div>

> 调用方式:

```js
isBetweenDates(
  new Date(2010, 11, 20),
  new Date(2010, 11, 30),
  new Date(2010, 11, 19)
); // false
isBetweenDates(
  new Date(2010, 11, 20),
  new Date(2010, 11, 30),
  new Date(2010, 11, 25)
); // true
```

> 应用场景


以下是一个实战<a href="codes/javascript/html/is-between-dates.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-between-dates.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-between-dates.html"></iframe>
