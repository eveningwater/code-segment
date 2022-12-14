|  标题   | 标签  |
|  ----  | ----  |
| minBy(根据回调函数查找数组中的最小值) | math,array(数学，数组) |

在使用提供的函数将每个元素映射到一个值后，返回数组的最小值。

* 使用 Array.prototype.map() 将每个元素映射到 fn 返回的值。
* 使用 Math.min() 获取最小值。

```js
const minBy = (arr,fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
```

> 调用方式:

```js
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n); // 2
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 2
```

> 应用场景