| 标题                         | 标签                   |
| ---------------------------- | ---------------------- |
| isObjectLike(是否一个对象 2) | type,object(类型,对象) |

检查一个值是否类似于对象。

- 检查提供的值是否不为 null 并且其 typeof 是否等于 'object'。

```js
const isObjectLike = val => val !== null && typeof val === 'object';
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-object-like.ts" data-language="typescript"></div>

> 调用方式:

```js
isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-object-like.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-object-like.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-object-like.html"></iframe>
