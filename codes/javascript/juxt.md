|  标题   | 标签  |
|  ----  | ----  |
| juxt(并列函数) | function(函数) |

将几个函数作为参数并返回一个函数，该函数是这些函数的并列。

* 使用 Array.prototype.map() 返回一个可以接受可变数量参数的 fn。
* 调用 fn 时，返回一个数组，其中包含将每个 fn 应用于 args 的结果。

```js
const juxt = (...fns) => (...args) => [...fns].map(fn => [...args].map(fn));
```

> 调用方式:

```js
juxt(
  x => x + 1,
  x => x - 1,
  x => x * 10
)(1, 2, 3); // [[2, 3, 4], [0, 1, 2], [10, 20, 30]]
juxt(
  s => s.length,
  s => s.split(' ').join('-')
)('30 seconds of code'); // [[18], ['30-seconds-of-code']]
```

> 应用场景

