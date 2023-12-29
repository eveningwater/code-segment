| 标题                               | 标签       |
| ---------------------------------- | ---------- |
| addMinutesToDate(往日期里添加分钟) | date(日期) |

从给定日期计算 n 分钟后的日期，返回其字符串表示形式。

- 使用 `Date` 构造函数从第一个参数创建一个 Date 对象。
- 使用 `Date.prototype.getTime()` 和 `Date.prototype.setTime()` 将 `n` 分钟添加到给定日期。
- 使用 `Date.prototype.toISOString()`、`String.prototype.split()` 和 `String.prototype.replace()` 返回一个 `yyyy-mm-dd HH:MM:SS` 格式的字符串。

> 代码如下:

```js
const addMinutesToDate = (date, n) => {
  const d = new Date(date);
  d.setTime(d.getTime() + n * 60000);
  return d.toISOString().split('.')[0].replace('T', ' ');
};
```

> 调用方式:

```js
addMinutesToDate('2020-10-19 12:00:00', 10); // '2020-10-19 12:10:00'
addMinutesToDate('2020-10-19', -10); // '2020-10-18 23:50:00'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/addMinutesToDate.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/addMinutesToDate.html"></iframe>
