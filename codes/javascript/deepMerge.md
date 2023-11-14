| 标题                    | 标签                         |
| ----------------------- | ---------------------------- |
| deepMerge(深度查找对象) | object,recursion(对象，递归) |

深度合并两个对象，使用一个函数来处理两者中存在的键。

- 使用 `Object.keys()` 获取两个对象的键，从它们创建一个 `Set` 并使用扩展运算符 (`...`) 创建一个包含所有唯一键的数组。
- 使用 `Array.prototype.reduce()` 将每个唯一键添加到对象，使用 `handler` 组合两个给定对象的值。

> 代码如下:

```js
const deepMerge = (a, b, handler) =>
  [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
    (acc, key) => ({ ...acc, [key]: handler(key, a[key], b[key]) }),
    {}
  );
```

> 调用方式:

```js
deepMerge(
  { a: true, b: { c: [1, 2, 3] } },
  { a: false, b: { d: [1, 2, 3] } },
  (key, a, b) => (key === 'a' ? a && b : Object.assign({}, a, b))
);
// { a: false, b: { c: [ 1, 2, 3 ], d: [ 1, 2, 3 ] } }
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/deepMerge.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/deepMerge.html"></iframe>
