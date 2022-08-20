|  标题   | 标签  |
|  ----  | ----  |
| includesAny(包含所有数字) | array(数组) |

检查 arr 中是否包含至少一个值元素。

* 使用 Array.prototype.some() 和 Array.prototype.includes() 检查值的至少一个元素是否包含在 arr 中。

```js
const includesAny = (arr,values) => values.some(v => arr.includes(v));
```

> 调用方式:

```js
includesAny([1, 2, 3, 4], [2, 9]); // true
includesAny([1, 2, 3, 4], [8, 9]); // false
```

> 应用场景















































