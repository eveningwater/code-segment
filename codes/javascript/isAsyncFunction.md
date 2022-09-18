|  标题   | 标签  |
|  ----  | ----  |
| isAsyncFunction(是否是异步函数) | type,function(类型，函数) |

检查给定参数是否是异步函数。

* 使用 Object.prototype.toString() 和 Function.prototype.call() 并检查结果是否为 '[object AsyncFunction]'。

```js
const isAsyncFunction = val => Object.prototype.toString.call(val) === '[object AsyncFunction]';
```

> 调用方式:

```js
isAsyncFunction(function() {}); // false
isAsyncFunction(async function() {}); // true
```

> 应用场景

