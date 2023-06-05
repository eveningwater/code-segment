| 标题                                  | 标签        |
| ------------------------------------- | ----------- |
| toggleElement(往数组中移除或添加元素) | array(数组) |

如果元素包含在数组中，则从数组中删除该元素，如果不包含，则将其推入数组。

- 使用 Array.prototype.includes() 检查给定元素是否在数组中。
- 使用 Array.prototype.filter() 删除数组中的元素。
- 如果元素不在数组中，请使用扩展运算符 (...) 将其压入。

```js
const toggleElement = (arr, val) =>
  arr.includes(val) ? arr.filter(el => el !== val) : [...arr, val];
```

> 调用方式:

```js
toggleElement([1, 2, 3], 2); // [1, 3]
toggleElement([1, 2, 3], 4); // [1, 2, 3, 4]
```

> 应用场景
