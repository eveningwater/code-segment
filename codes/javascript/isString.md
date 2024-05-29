| 标题                   | 标签                     |
| ---------------------- | ------------------------ |
| isString(是否是字符串) | string,type(字符串,类型) |

检查给定参数是否为字符串。 仅适用于字符串原语。

- 使用 typeof 检查一个值是否被归类为字符串原语。

```js
const isString = val => typeof val === 'string';
```

> 调用方式:

```js
isString('10'); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isString.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isString.html"></iframe>
