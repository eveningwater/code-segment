| 标题                       | 标签        |
| -------------------------- | ----------- |
| subSet(迭代对象中查找交集) | array(数组) |

检查第一个可迭代对象是否是第二个可迭代对象的子集，不包括重复值。

- 使用 Set 构造函数从每个可迭代对象创建一个新的 Set 对象。
- 使用 Array.prototype.every() 和 Set.prototype.has() 检查第一个可迭代对象中的每个值是否包含在第二个可迭代对象中。

```js
const subSet = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...sA].every(v => sB.has(v));
};
```

> 调用方式:

```js
subSet(new Set([1, 2]), new Set([1, 2, 3, 4])); // true
subSet(new Set([1, 5]), new Set([1, 2, 3, 4])); // false
```

> 应用场景
