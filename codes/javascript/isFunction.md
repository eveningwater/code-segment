|  标题   | 标签  |
|  ----  | ----  |
| isFunction(是否是函数) | type,function(类型，函数) |

检查给定的参数是否是一个函数。

使用 typeof 检查一个值是否被归类为函数原语。

```js
const isFunction = val => typeof val === 'function';
```

> 调用方式:

```js
isFunction('x'); // false
isFunction(x => x); // true
```

> 应用场景
