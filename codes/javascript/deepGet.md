| 标题                        | 标签         |
| --------------------------- | ------------ |
| deepGet(深度查找对象中的值) | object(对象) |

根据键数组获取嵌套 JSON 对象中的目标值。

- 将嵌套`JSON`对象中所需的键作为数组进行比较。
- 使用 `Array.prototype.reduce()` 来一一获取嵌套的`JSON`对象中的值。
- 如果对象中存在`key`，则返回目标值，否则返回`null`。

> 代码如下:

```js
const deepGet = (obj, keys) =>
  keys.reduce(
    (o, i) => (o && o[i] !== null && o[i] !== undefined ? o[i] : null),
    obj
  );
```

> 调用方式:

```js
let index = 2;
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ['a', 'b', 'c']
    }
  }
};
deepGet(data, ['foo', 'foz', index]); // get 3
deepGet(data, ['foo', 'bar', 'baz', 8, 'foz']); // null
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/deepGet.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/deepGet.html"></iframe>
