| 标题                     | 标签           |
| ------------------------ | -------------- |
| functionName(获取函数名) | function(函数) |

记录函数的名称。

- 使用 console.debug() 和传递函数的 name 属性将函数的名称记录到控制台的调试通道。
- 返回给定的函数 fn。

```js
const functionName = handler => (console.debug(handler.name), handler);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/function-name.ts" data-language="typescript"></div>

> 调用方式:

```js
let m = functionName(Math.max)(5, 6);
// max (logged in debug channel of console)
// m = 6
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/function-name.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/functionName.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/functionName.html"></iframe>
