| 标题                | 标签                       |
| ------------------- | -------------------------- |
| dayName(工作日名称) | date,beginner(日期,初学者) |

从 Date 对象中获取工作日的名称。

- 使用 `Date.prototype.toLocaleDateString()` 和 `{ weekday: 'long' }` 选项来检索工作日。
- 使用可选的第二个参数来获取特定于语言的名称或省略它以使用默认语言环境。

> 代码如下:

```js
const dayName = (date, locale) =>
  date.toLocaleDateString(locale, { weekday: 'long' });
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/day-name.ts" data-language="typescript"></div>

> 调用方式:

```js
dayName(new Date()); //星期四
dayName(new Date('09/23/2020'), 'de-DE'); //Mittwoch（德语，星期三的意思）
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/day-name.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/day-name.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/day-name.html"></iframe>
