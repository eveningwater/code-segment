| 标题                   | 标签                   |
| ---------------------- | ---------------------- |
| similarity(求数组交集) | array,math(数组，数学) |

返回出现在两个数组中的元素数组。

- 使用 Array.prototype.includes() 来确定不属于值的值。
- 使用 Array.prototype.filter() 删除它们。

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v));
```

> 调用方式:

```js
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```

> 应用场景
