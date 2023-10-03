| 标题                                        | 标签                        |
| ------------------------------------------- | --------------------------- |
| coalesce(第一个非 null 和 undefined 的函数) | type,beginner(类型，初学者) |

返回第一个非`null`和`undefined`参数的函数。

- 使用 `Array.prototype.find()` 和 `Array.prototype.includes()` 查找第一个不等于 `undefined` 或 `null` 的值。

> 代码如下:

```js
const coalesce = (...args) => args.find(v => ![undefined, null].includes(v));
```

> 调用方式:

```js
coalesce(null, undefined, '', NaN, 'Waldo'); // ''
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/coalesce.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/coalesce.html"></iframe>
