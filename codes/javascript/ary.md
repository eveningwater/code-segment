|  标题   | 标签  |
|  ----  | ----  |
| ary(创建函数) | function,advanced(函数，高级的) |

创建一个最多接受`n`个参数的函数，忽略任何其他参数。

* 使用`Array.prototype.slice(0,n)`和展开运算符`...`调用提供的函数`fn`（最多`n`个参数）。

> 代码如下:

```js
    const ary = (fn,n) => (...args) => fn(...args.slice(0,n));
```

> 调用方式:

```js
    const firstTwoMax = ary(Math.max, 2);
    [[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x)); // [6, 6, 10]
```

> 应用场景