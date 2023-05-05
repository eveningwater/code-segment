| 标题                         | 标签        |
| ---------------------------- | ----------- |
| superSet(迭代对象中查找交集) | array(数组) |

检查第一个可迭代对象是否是第二个可迭代对象的超集，不包括重复值。

- 使用 Set 构造函数从每个可迭代对象创建一个新的 Set 对象。
- 使用 Array.prototype.every() 和 Set.prototype.has() 检查第二个可迭代对象中的每个值是否包含在第一个可迭代对象中。

```js
const superSet = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...sB].every(v => sA.has(v));
};
```

> 调用方式:

```js
superSet(new Set([1, 2, 3, 4]), new Set([1, 2])); // true
superSet(new Set([1, 2, 3, 4]), new Set([1, 5])); // false
```

> 应用场景
