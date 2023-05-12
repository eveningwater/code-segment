| 标题                     | 标签        |
| ------------------------ | ----------- |
| tail(移除数组第一个元素) | array(数组) |

返回数组中除第一个元素之外的所有元素。

- 如果 Array.prototype.length 大于 1，则使用 Array.prototype.slice() 返回没有第一个元素的数组。
- 否则，返回整个数组。

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
```

> 调用方式:

```js
tail([1, 2, 3]); // [2, 3]
tail([1]); // [1]
```

> 应用场景
