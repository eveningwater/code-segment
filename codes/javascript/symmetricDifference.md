| 标题                              | 标签                  |
| --------------------------------- | --------------------- |
| symmetricDifference(数组元素差集) | array,math(数组,数学) |

返回两个数组之间的对称差异，不过滤掉重复值。

- 从每个数组创建一个 Set 以获取每个数组的唯一值。
- 在它们中的每一个上使用 Array.prototype.filter() 只保留不包含在另一个中的值。

```js
const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};
```

> 调用方式:

```js
symmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
symmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 2, 3]
```

> 应用场景
