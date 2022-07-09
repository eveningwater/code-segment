|  标题   | 标签  |
|  ----  | ----  |
| functionName(获取函数名) | function(函数) |

记录函数的名称。

* 使用 console.debug() 和传递函数的 name 属性将函数的名称记录到控制台的调试通道。
* 返回给定的函数 fn。

```js
const functionName = handler => (console.debug(handler.name),handler)
```

> 调用方式:

```js
let m = functionName(Math.max)(5, 6);
// max (logged in debug channel of console)
// m = 6
```

> 应用场景




