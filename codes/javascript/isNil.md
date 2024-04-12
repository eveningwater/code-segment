| 标题                            | 标签       |
| ------------------------------- | ---------- |
| isNil(是否 null 或者 undefined) | type(类型) |

检查指定的值是否为空或未定义。

- 使用严格相等运算符检查 val 的值是否等于 null 或 undefined。

```js
const isNil = val => val === undefined || val === null;
```

> 调用方式:

```js
isNil(null); // true
isNil(undefined); // true
isNil(''); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isNil.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isNil.html"></iframe>
