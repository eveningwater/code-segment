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

> 调用方式:

```js
isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isBeforeDate.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isBeforeDate.html"></iframe>
