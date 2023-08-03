| 标题                                                              | 标签                              |
| ----------------------------------------------------------------- | --------------------------------- |
| addBusinessDay(计算添加 n 个工作日（营业日）后的工作（营业）日期) | date,intermediate(日期，两者之间) |

在添加了`n`个工作日或者营业日期之后，计算添加之后的日期。

- 使用`Array.from()`构造一个长度等于要添加的工作(营业)日数的数组。
- 使用`Array.prototype.reduce()`在数组上进行迭代，从`startDate(即开始日期)`开始并使用`Date.prototype.getDate()`和`Date.prototype.setDate()`递增。
- 如果当前日期在周末，则可以通过添加一天或两天使其成为工作日来再次更新。

> 注意:不考虑周六周日这两个非工作日和非营业日。

> 代码如下:

```js
const addBusinessDay = (startDate, n) =>
  Array.from({ length: n }).reduce(date => {
    date = new Date(date.setDate(date.getDate() + 1));
    // 判断如果是非工作日，即周六周日
    if (date.getDay() % 6 === 0)
      date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1)));
    return date;
  }, startDate);
```

> 调用方式:

```js
addBusinessDay(new Date('Oct 09, 2020'), 5); // 'Oct 16, 2020'
addBusinessDay(new Date('Oct 12, 2020'), 5); // 'Oct 19, 2020'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/addBusinessDay.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/addBusinessDay.html"></iframe>
