| 标题           | 标签                            |
| -------------- | ------------------------------- |
| call(函数调用) | function,advanced(函数，高级的) |

给定一个键和一组参数，在给定上下文时调用它们。

- 使用闭包为给定的上下文调用带有`args`的`key`。

> 代码如下:

```js
const call =
  (key, ...args) =>
  context =>
    context[key](...args);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/call.ts" data-language="typescript"></div>

> 调用方式:

```js
Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/call.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/call.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/call.html"></iframe>
