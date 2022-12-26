|  标题   | 标签  |
|  ----  | ----  |
| nthArg(第n个参数) | function(函数) |

创建一个获取索引 n 处的参数的函数。

* 使用 Array.prototype.slice() 在索引 n 处获取所需的参数。
* 如果 n 为负数，则返回倒数第 n 个参数。

```js
const nthArg = n => (...args) => args.slice(n)[0];
```

> 调用方式:

```js
const third = nthArg(2);
third(1, 2, 3); // 3
third(1, 2); // undefined
const last = nthArg(-1);
last(1, 2, 3, 4, 5); // 5
```

> 应用场景