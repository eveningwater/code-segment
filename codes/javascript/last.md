|  标题   | 标签  |
|  ----  | ----  |
| last(最后一个数组项) | array(数组) |

返回数组中的最后一个元素。

* 检查 arr 是否真实并具有长度属性。
* 使用 Array.prototype.length 计算给定数组的最后一个元素的索引并返回它，否则返回 undefined。

```js
const last = arr => arr && arr.length ? arr[arr.length - 1] : undefined;
```

> 调用方式:

```js
last([1, 2, 3]); // 3
last([]); // undefined
last(null); // undefined
last(undefined); // undefined
```

> 应用场景

