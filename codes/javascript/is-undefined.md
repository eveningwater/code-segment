| 标题                          | 标签       |
| ----------------------------- | ---------- |
| isUndefined(是否是未初始化值) | type(类型) |

检查指定的值是否未定义。

- 使用严格相等运算符检查 val 是否等于 undefined。

```js
const isUndefined = val => val === undefined;
```


ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-undefined.ts" data-language="typescript"></div>

> 调用方式:

```js
isUndefined(undefined); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-undefined.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-undefined.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-undefined.html"></iframe>
