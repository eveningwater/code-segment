| 标题                     | 标签                         |
| ------------------------ | ---------------------------- |
| deepFreeze(深度冻结对象) | object,recursion(对象，递归) |

深度冻结对象。

- 使用`Object.keys()`得到被传递的对象的所有属性，`Array.prototype.forEach()`来遍历它们。
- 在所有属性上递归调用 `Object.freeze()`，必要时应用 `deepFreeze()`。
- 最后，使用 `Object.freeze()` 冻结给定的对象。

> 代码如下:

```js
const deepFreeze = obj => {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object') {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/deep-freeze.ts" data-language="typescript"></div>

> 调用方式:

```js
'use strict';

const val = deepFreeze([1, [2, 3]]);

val[0] = 3; // not allowed
val[1][0] = 4; // not allowed as well
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/deep-freeze.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/deep-freeze.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/deep-freeze.html"></iframe>
