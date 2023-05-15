| 标题                          | 标签        |
| ----------------------------- | ----------- |
| takeRight(截取规定长度的数组) | array(数组) |

创建一个从末尾移除 n 个元素的数组。

- 使用 Array.prototype.slice() 创建数组的一个切片，其中 n 个元素取自末尾。

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
```

> 调用方式:

```js
takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```

> 应用场景
