| 标题                         | 标签       |
| ---------------------------- | ---------- |
| isBeforeDate(日期比较(之前)) | date(日期) |

检查一个日期是否在另一个日期之后。

- 使用大于运算符 (<) 检查第一个日期是否在第二个日期之后。

```js
const isBeforeDate = (dateA, dateB) => {
  if (dateA instanceof Date && dateB instanceof Date) {
    return dateA < dateB;
  }
  return false;
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-before-date.ts" data-language="typescript"></div>

> 调用方式:

```js
isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-before-date.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-before-date.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-before-date.html"></iframe>
