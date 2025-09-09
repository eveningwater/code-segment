| 标题                   | 标签                      |
| ---------------------- | ------------------------- |
| isFunction(是否是函数) | type,function(类型，函数) |

检查给定的参数是否是一个函数。

使用 typeof 检查一个值是否被归类为函数原语。

```js
const isFunction = val => typeof val === 'function';
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-function.ts" data-language="typescript"></div>

> 调用方式:

```js
isFunction('x'); // false
isFunction(x => x); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-function.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-function.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-function.html"></iframe>
