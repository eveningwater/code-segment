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

> 调用方式:

```js
resolveAfter('Hello', 1000);
// Returns a promise that resolves to 'Hello' after 1s
```

> 应用场景
