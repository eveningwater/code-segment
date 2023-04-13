| 标题         | 标签                                    |
| ------------ | --------------------------------------- |
| size(求大小) | object,array,string(对象，数组，字符串) |

获取数组、对象或字符串的大小。

- 获取 val 的类型（数组、对象或字符串）。
- 对数组使用 Array.prototype.length 属性。
- 使用长度或大小值（如果可用）或对象的键数。
- 使用从 val 创建的 [Blob 对象](https://developer.mozilla.org/en-US/docs/Web/API/Blob)的大小作为字符串。

```js
const size = val =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
    ? val.size || val.length || Object.keys(val).length
    : typeof val === 'string'
    ? new Blob([val]).size
    : 0;
```

> 调用方式:

```js
size([1, 2, 3, 4, 5]); // 5
size('size'); // 4
size({ one: 1, two: 2, three: 3 }); // 3
```

> 应用场景
