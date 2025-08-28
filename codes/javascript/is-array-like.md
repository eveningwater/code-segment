| 标题                    | 标签                   |
| ----------------------- | ---------------------- |
| isArrayLike(是否可迭代) | type,array(类型，数组) |

检查提供的参数是否类似于数组（即可迭代）。

- 检查提供的参数是否不为 null 并且其 Symbol.iterator 属性是否为函数。

```js
const isArrayLike = obj =>
  obj !== null && typeof obj[Symbol.iterator] === 'function';
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-array-like.ts" data-language="typescript"></div>

> 调用方式:

```js
isArrayLike([1, 2, 3]); // true
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-array-like.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-array-like.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-array-like.html"></iframe>
