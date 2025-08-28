| 标题                            | 标签                      |
| ------------------------------- | ------------------------- |
| isAsyncFunction(是否是异步函数) | type,function(类型，函数) |

检查给定参数是否是异步函数。

- 使用 Object.prototype.toString() 和 Function.prototype.call() 并检查结果是否为 '[object AsyncFunction]'。

```js
const isAsyncFunction = val =>
  Object.prototype.toString.call(val) === '[object AsyncFunction]';
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-async-function.ts" data-language="typescript"></div>

> 调用方式:

```js
isAsyncFunction(function () {}); // false
isAsyncFunction(async function () {}); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-async-function.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-async-function.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-async-function.html"></iframe>
