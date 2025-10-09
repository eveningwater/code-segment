| 标题                   | 标签                     |
| ---------------------- | ------------------------ |
| isString(是否是字符串) | string,type(字符串,类型) |

检查给定参数是否为字符串。 仅适用于字符串原语。

- 使用 typeof 检查一个值是否被归类为字符串原语。

```js
const isString = val => typeof val === 'string';
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-string.ts" data-language="typescript"></div>

> 调用方式:

```js
isString('10'); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-string.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-string.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-string.html"></iframe>
