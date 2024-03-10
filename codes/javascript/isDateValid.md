| 标题                      | 标签       |
| ------------------------- | ---------- |
| isDateValid(是否可用日期) | date(日期) |

检查是否可以从给定的值创建有效的日期对象。

- 使用扩展运算符 (...) 将参数数组传递给 Date 构造函数。
- 使用 Date.prototype.valueOf() 和 Number.isNaN() 检查是否可以从给定值创建有效的 Date 对象。

```js
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
```

> 调用方式:

```js
isDateValid('December 17, 1995 03:24:00'); // true
isDateValid('1995-12-17T03:24:00'); // true
isDateValid('1995-12-17 T03:24:00'); // false
isDateValid('Duck'); // false
isDateValid(1995, 11, 17); // true
isDateValid(1995, 11, 17, 'Duck'); // false
isDateValid({}); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isDateValid.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isDateValid.html"></iframe>
