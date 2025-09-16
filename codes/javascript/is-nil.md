| 标题                            | 标签       |
| ------------------------------- | ---------- |
| isNil(是否 null 或者 undefined) | type(类型) |

检查指定的值是否为空或未定义。

- 使用严格相等运算符检查 val 的值是否等于 null 或 undefined。

```js
const isNil = val => val === undefined || val === null;
```


ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-nil.ts" data-language="typescript"></div>

> 调用方式:

```js
isNil(null); // true
isNil(undefined); // true
isNil(''); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-nil.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-nil.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-nil.html"></iframe>
