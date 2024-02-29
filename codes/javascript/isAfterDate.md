| 标题                  | 标签       |
| --------------------- | ---------- |
| isAfterDate(日期比较) | date(日期) |

检查一个日期是否在另一个日期之后。

- 使用大于运算符 (>) 检查第一个日期是否在第二个日期之后。

```js
const isAfterDate = (dateA, dateB) => {
  if (dateA instanceof Date && dateB instanceof Date) {
    return dateA > dateB;
  }
  return false;
};
```

> 调用方式:

```js
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isAfterDate.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isAfterDate.html"></iframe>
