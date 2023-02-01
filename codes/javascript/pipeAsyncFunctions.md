|  标题   | 标签  |
|  ----  | ----  |
| pipeAsyncFunctions(异步执行函数) | function,promise(函数,期约) |

为异步函数执行从左到右的函数组合。

* 使用 Array.prototype.reduce() 和扩展运算符 (...) 来使用 Promise.prototype.then() 执行函数组合。
* 这些函数可以返回正常值、Promises 或异步的组合，通过 await 返回。
* 所有函数都必须接受一个参数。

```js
const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p,f) => p.then(f),Promise.resolve(arg));
```

> 调用方式:

```js
const sum = pipeAsyncFunctions(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4
);
(async() => {
  console.log(await sum(5)); // 15 (after one second)
})();
```

> 应用场景