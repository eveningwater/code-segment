| 标题              | 标签       |
| ----------------- | ---------- |
| isNull(是否 null) | type(类型) |

检查指定的值是否为空或未定义。

- 使用严格相等运算符检查 val 的值是否等于 null。

```js
const isNull = val => val === null;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-null.ts" data-language="typescript"></div>

> 调用方式:

```js
isNull(null); // true
isNull(undefined); // true
isNull(''); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-null.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-null.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-null.html"></iframe>
