| 标题                       | 标签                         |
| -------------------------- | ---------------------------- |
| isDeepFrozen(深度冻结对象) | object,recursion(对象，递归) |

检查对象是否被深度冻结。

- 使用递归。
- 在给定对象上使用 Object.isFrozen()。
- 使用 Object.keys()、Array.prototype.every() 来检查所有键是深度冻结的对象还是非对象值。

```js
const isDeepFrozen = obj =>
  Object.isFrozen(obj) &&
  Object.keys(obj).every(
    val => typeof val !== 'object' || isDeepFrozen(obj[val])
  );
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-deep-frozen.ts" data-language="typescript"></div>


> 调用方式:

```js
const x = Object.freeze({ a: 1 });
const y = Object.freeze({ b: { c: 2 } });
isDeepFrozen(x); // true
isDeepFrozen(y); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-deep-frozen.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-deep-frozen.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-deep-frozen.html"></iframe>
