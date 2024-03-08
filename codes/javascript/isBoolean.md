| 标题                        | 标签       |
| --------------------------- | ---------- |
| isBoolean(判断是否是布尔值) | type(类型) |

检查给定参数是否是本机布尔元素。

- 使用 typeof 检查一个值是否被归类为布尔基元。

```js
const isBoolean = val => typeof val === 'boolean';
```

> 调用方式:

```js
isBoolean(null); // false
isBoolean(false); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isBoolean.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isBoolean.html"></iframe>
