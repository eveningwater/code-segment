| 标题                          | 标签                                    |
| ----------------------------- | --------------------------------------- |
| isPromiseLike(是否是一个期约) | type,function,promise(类型，函数，期约) |

检查对象是否看起来像[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

- 检查对象是否不为空，其 typeof 是否匹配对象或函数，以及它是否具有 .then 属性，该属性也是一个函数。

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
```

> 调用方式:

```js
isPromiseLike({
  then: function () {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isPromiseLike.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isPromiseLike.html"></iframe>
