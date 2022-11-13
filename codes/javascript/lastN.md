|  标题   | 标签  |
|  ----  | ----  |
| lastN(最后n个元素) | array(数组) |

获取数组的最后 n 个元素。

* 使用起始值为 -n 的 Array.prototype.slice() 来获取 arr 的最后 n 个元素。

```js
const lastN = (arr,n) => arr.slice(-n);
```

> 调用方式:

```js
lastN(['a', 'b', 'c', 'd'], 2); // ['c', 'd']
```

> 应用场景

