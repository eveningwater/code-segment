| 标题                    | 标签                  |
| ----------------------- | --------------------- |
| sumBy(根据回调函数求和) | math,array(数学,数组) |

在使用提供的函数将每个元素映射到一个值后，计算数组的总和。

- 使用 Array.prototype.map() 将每个元素映射到 fn 返回的值。
- 使用 Array.prototype.reduce() 将每个值添加到一个累加器，用值 0 初始化。

```js
const sumBy = (arr, fn) =>
  arr
    .map(val => (typeof fn === 'function' ? fn(val) : val => val[fn]))
    .reduce((acc, val) => acc + val, 0);
```

> 调用方式:

```js
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n); // 20
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 20
```

> 应用场景
