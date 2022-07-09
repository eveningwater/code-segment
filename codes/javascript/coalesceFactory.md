|  标题   | 标签  |
|  ----  | ----  |
| coalesceFactory(合并函数) | function,type,intermediate(函数，类型，两者之间的) |

自定义一个合并函数，该函数根据给定的验证器返回第一个为 `true` 的参数

* 使用 `Array.prototype.find()` 从提供的参数验证函数返回第一个返回 `true` 的参数，有效。

> 代码如下:

```js
    const coalesceFactory = valid => (...args) => args.find(valid);
```

> 调用方式:

```js
    const customCoalesce = coalesceFactory(v => ![null, undefined, '', NaN].includes(v));
    customCoalesce(undefined, null, NaN, '', 'Waldo'); // 'Waldo'
```

> 应用场景