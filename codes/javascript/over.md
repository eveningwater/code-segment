|  标题   | 标签  |
|  ----  | ----  |
| over(根据参数调用函数) | function(函数) |

创建一个函数，该函数使用它接收的参数调用每个提供的函数并返回结果。

* 使用 Array.prototype.map() 和 Function.prototype.apply() 将每个函数应用于给定的参数。

```js
const over = (...fns) => (...args) => [...fns].map(fn => fn.apply(null,args));
```

> 调用方式:

```js
const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5); // [1, 5]
```

> 应用场景