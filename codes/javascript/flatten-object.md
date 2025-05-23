| 标题                      | 标签                        |
| ------------------------- | --------------------------- |
| flattenObject(扁平化对象) | object,recursion(对象,递归) |

使用键的路径展平对象。

- 使用递归。
- 使用 `Object.keys()` 结合 `Array.prototype.reduce()`` 将每个叶节点转换为扁平路径节点。
- 如果键的值是一个对象，则该函数使用适当的前缀调用自身以使用 `Object.assign()`` 创建路径。
- 否则，它将适当的前缀键值对添加到累加器对象。
- 你应该始终省略第二个参数前缀，除非你希望每个键都有一个前缀。

> 代码如下:

```js
const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}.` : '';
    if (
      typeof obj[k] === 'object' &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0
    ) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/flatten-object.ts" data-language="typescript"></div>

> 调用方式:

```js
flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/flatten-object.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/flatten-object.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/flatten-object.html"></iframe>
