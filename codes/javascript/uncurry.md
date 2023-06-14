| 标题                  | 标签           |
| --------------------- | -------------- |
| uncurry(反柯里化函数) | function(函数) |

取消柯里化深度为 n 的函数。

- 返回可变参数函数。
- 在提供的参数上使用 Array.prototype.reduce() 来调用函数的每个后续 curry 级别。
- 如果提供的参数的长度小于 n 则抛出错误。
- 否则，使用 Array.prototype.slice() 使用适当数量的参数调用 fn。
- 省略第二个参数 n，以反柯里化到深度 1。

```js
const uncurry =
  (fn, n = 1) =>
  (...args) => {
    const next = acc => args => args.reduce((x, y) => x(y), acc);
    if (n > args.length) throw new RangeError('Arguments too few!');
    return next(fn)(args.slice(0, n));
  };
```

> 调用方式:

```js
const add = x => y => z => x + y + z;
const uncurriedAdd = uncurry(add, 3);
uncurriedAdd(1, 2, 3); // 6
```

> 应用场景
