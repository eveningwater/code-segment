| 标题                    | 标签                   |
| ----------------------- | ---------------------- |
| isArrayLike(是否可迭代) | type,array(类型，数组) |

检查提供的参数是否类似于数组（即可迭代）。

- 检查提供的参数是否不为 null 并且其 Symbol.iterator 属性是否为函数。

```js
const isArrayLike = obj =>
  obj !== null && typeof obj[Symbol.iterator] === 'function';
```

> 调用方式:

```js
isArrayLike([1, 2, 3]); // true
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isArrayLike.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isArrayLike.html"></iframe>
