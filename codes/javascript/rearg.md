| 标题                    | 标签           |
| ----------------------- | -------------- |
| rearg(重新排列函数参数) | function(函数) |

创建一个调用提供的函数的函数，其参数根据指定的索引排列。

- 使用 Array.prototype.map() 根据索引重新排序参数。
- 使用扩展运算符 (...) 将转换后的参数传递给 fn。

```js
const rearg =
  (fn, indexes) =>
  (...args) =>
    fn(...indexes.map(i => args[i]));
```

> 调用方式:

```js
var rearged = rearg(
  function (a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
rearged('b', 'c', 'a'); // ['a', 'b', 'c']
```

> 应用场景
