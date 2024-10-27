| 标题              | 标签                                  |
| ----------------- | ------------------------------------- |
| attempt(捕获错误) | function,intermediate(函数，两者之间) |

尝试使用提供的参数调用函数，返回结果或捕获的错误对象。

- 使用`try...catch`块返回函数结果或适当的错误。
- 如果捕获的对象不是错误，请使用它来创建新的错误。

> 代码如下:

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/attempt.ts" data-language="typescript"></div>

> 调用方式:

```js
let elements = attempt(selector => document.querySelectorAll(selector), '>_>');
if (elements instanceof Error) elements = []; //elements = []
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/attempt.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/attempt.html"></iframe>
