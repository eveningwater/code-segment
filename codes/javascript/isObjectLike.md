|  标题   | 标签  |
|  ----  | ----  |
| isObjectLike(是否一个对象2) | type,object(类型,对象) |

检查一个值是否类似于对象。

* 检查提供的值是否不为 null 并且其 typeof 是否等于 'object'。

```js
const isObjectLike = val => val !== null && typeof val === 'object';
```

> 调用方式:

```js
isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```

> 应用场景
