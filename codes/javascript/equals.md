| 标题                            | 标签                                                |
| ------------------------------- | --------------------------------------------------- |
| equals (检测元素是否在视口可见) | object,array,type,recursion(对象，数组，类型，递归) |

在两个值之间执行深度比较以确定它们是否相等。

- 检查两个值是否相同。
- 使用 `Date.prototype.getTime()` 检查两个值是否是具有相同时间的 `Date` 对象。
- 检查两个值是否都是具有等效值的非对象值（严格比较）。
- 检查是否只有一个值为 `null` 或未定义，或者它们的原型是否不同。
- 如果以上条件都不满足，请使用 `Object.keys()` 检查两个值是否具有相同数量的键。
- 使用 `Array.prototype.every()` 来检查 `a` 中的每个键是否存在于 `b` 中，以及它们是否通过递归调用 `equals()` 等价。

> 代码如下:

```js
const equals = (a, b) => {
  if (a === b) {
    return true;
  }
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) {
    return a === b;
  }
  if (a.prototype !== b.prototype) {
    return false;
  }
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) {
    return false;
  }
  return keys.every(k => equals(a[k], b[k]));
};
```

> 调用方式:

```js
equals(
  { a: [2, { e: 3 }], b: [4], c: 'foo' },
  { a: [2, { e: 3 }], b: [4], c: 'foo' }
); // true
equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/equals.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/equals.html"></iframe>
