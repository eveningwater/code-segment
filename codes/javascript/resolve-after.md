| 标题                             | 标签                         |
| -------------------------------- | ---------------------------- |
| resolveAfter(延迟加载期约的解决) | function,promise(函数，期约) |

创建一个在给定时间后解析为提供的值的期约。

- 使用 Promise 构造函数创建一个新的 promise。
- 使用 setTimeout() 在指定延迟后使用传递的值调用 promise 的 resolve 函数。

```js
const resolveAfter = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => resolve(value), delay);
  });
```

<div class="code-editor" data-url="codes/javascript/ts/resolve-after.ts" data-language="typescript"></div>

> 调用方式:

```js
resolveAfter('Hello', 1000);
// Returns a promise that resolves to 'Hello' after 1s
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/resolve-after.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/resolve-after.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/resolve-after.html"></iframe>