|  标题   | 标签  |
|  ----  | ----  |
| lastDateOfMonth(每月最后一天) | date(日期) |

返回给定日期月份中最后一个日期的字符串表示形式。

* 使用 Date.prototype.getFullYear(), Date.prototype.getMonth() 从给定日期获取当前年份和月份。
* 使用 Date 构造函数创建一个新的日期，给定的年份和月份递增 1，日期设置为 0（上个月的最后一天）。
* 省略参数 date，默认使用当前日期。

```js
const lastDateOfMonth = (date = new Date()) => {
    const d = new Date(date.getFullYear(),date.getMonth() + 1,0);
    return d.toISOString().split('T')[0];
}
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/last-date-of-month.ts" data-language="typescript"></div>

> 调用方式:

```js
lastDateOfMonth(new Date('2015-08-11')); // '2015-08-30'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/last-date-of-month.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/last-date-of-month.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/last-date-of-month.html"></iframe>