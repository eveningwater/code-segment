| 标题                                           | 标签        |
| ---------------------------------------------- | ----------- |
| isDisjoint(检查两个对象是否相交（没有共同值）) | array(数组) |

检查两个可迭代对象是否不相交（没有共同值）。

- 使用 Set 构造函数从每个可迭代对象中创建一个新的 Set 对象。
- 使用 Array.prototype.every() 和 Set.prototype.has() 检查两个可迭代对象是否没有共同值。

```js
const isDisjoint = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);

  return [...sA].every(v => !sB.has(v));
};
```

> 调用方式:

```js
isDisjoint(new Set([1, 2]), new Set([3, 4])); // true
isDisjoint(new Set([1, 2]), new Set([1, 3])); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isDisjoint.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isDisjoint.html"></iframe>
