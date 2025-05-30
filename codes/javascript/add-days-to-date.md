| 标题                            | 标签       |
| ------------------------------- | ---------- |
| addDaysToDate(往日期里添加天数) | date(日期) |

计算从给定日期算起 n 天的日期，返回其字符串表示形式。

- 使用 Date 构造函数从第一个参数创建一个 Date 对象。
- 使用 Date.prototype.getDate() 和 Date.prototype.setDate() 将 n 天添加到给定日期。
- 使用 Date.prototype.toISOString() 以 yyyy-mm-dd 格式返回字符串。

> 代码如下:

```js
const addDaysToDate = (date, n) => {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/add-days-to-date.ts" data-language="typescript"></div>

> 调用方式:

```js
addDaysToDate("2020-10-15", 10); // '2020-10-25'
addDaysToDate("2020-10-15", -10); // '2020-10-05'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/add-days-to-date.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/add-days-to-date.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/add-days-to-date.html"></iframe>
