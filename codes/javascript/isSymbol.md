| 标题                    | 标签       |
| ----------------------- | ---------- |
| isSymbol(是否是 symbol) | type(类型) |

检查给定的参数是否是 symbol。

- 使用 typeof 检查一个值是否被归类为符号原语。

```js
const isSymbol = val => typeof val === 'symbol';
```

> 调用方式:

```js
isSymbol(Symbol('x')); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isSymbol.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isSymbol.html"></iframe>
