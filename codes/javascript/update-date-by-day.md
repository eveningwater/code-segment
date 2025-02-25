| 标题                      | 标签                              |
| ------------------------- | --------------------------------- |
| updateDateByDay(更改天数) | date,intermediate(日期，两者之间) |

从给定日期计算 n 天的日期，并返回其字符串表示形式。

- 根据第一个参数使用`new Date()`来创建一个日期对象。
- 使用`Date.prototype.setDate()`以及`Date.prototype.getDate()`方法来计算`n`天的日期，从而得到该日期。
- 使用`Date.prototype.toISOString()`方法来返回一个`yyyy-mm-dd`格式的日期。

> 代码如下:

```js
const updateDateByDay = (date, n) => {
  date = new Date(date);
  date.setDate(date.getDate() + n);
  return date.toISOString().split('T')[0];
};
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/update-date-by-day.ts" data-language="typescript"></div>

> 调用方式:

```js
updateDateByDay('2020-10-15', 10); // '2020-10-25'
updateDateByDay('2020-10-15', -10); // '2020-10-05'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/update-date-by-day.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/update-date-by-day.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/update-date-by-day.html"></iframe>
