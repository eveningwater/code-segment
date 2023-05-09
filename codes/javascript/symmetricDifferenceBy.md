| 标题                                | 标签        |
| ----------------------------------- | ----------- |
| symmetricDifferenceBy(数组元素差集) | array(数组) |

将提供的函数应用于两个数组的每个数组元素后，返回两个数组之间的对称差异。

- 从每个数组创建一个 Set 以在对它们应用 fn 后获取每个数组的唯一值。
- 在它们中的每一个上使用 Array.prototype.filter() 只保留不包含在另一个中的值。

```js
const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map(v => fn(v))),
    sB = new Set(b.map(v => fn(v)));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};
```

> 调用方式:

```js
symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 1.2, 3.4 ]
symmetricDifferenceBy(
  [{ id: 1 }, { id: 2 }, { id: 3 }],
  [{ id: 1 }, { id: 2 }, { id: 4 }],
  i => i.id
);
// [{ id: 3 }, { id: 4 }]
```

> 应用场景
