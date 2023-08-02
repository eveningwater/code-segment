| 标题                     | 标签                      |
| ------------------------ | ------------------------- |
| errorUtils(错误处理函数) | error,function(错误,函数) |

实现一个错误处理函数。

- 使用 一个匿名函数将作用域限定在函数内部。
- 定义一个全局接受错误注册函数的变量以及一个返回结果对象。
- 结果对象中定义一个注册错误 registerErrorHandler 函数，这个函数接受一个用户自定义错误的函数参数，并将这个参数赋值给全局接受错误注册函数的变量。
- 定义一个调用可能有错误调用的函数，接收一个函数参数。
- 使用 try...catch 将函数包裹起来执行，如果存在函数，则执行，否则将错误函数回调出去。
- 返回这个结果对象。

> 代码如下:

```js
const errorUtils = (function () {
  let handleError = null;
  const res = {};
  res.registerErrorHandler = fn => {
    handleError = fn;
  };
  function callWithErrorHandling(fn) {
    try {
      fn && fn();
    } catch (error) {
      handleError(error);
    }
  }
  res.callWithErrorHandling = callWithErrorHandling;
  return res;
})();
```

> 调用方式:

```js
errorUtils.registerErrorHandler(e => {
  console.warn(e);
});
errorUtils.callWithErrorHandling(() => {
  throw new Error('error!');
});
```

> 应用场景

errorUtils.html 如下:

<div class="code-editor" data-url="codes/javascript/html/errorUtils.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/errorUtils.html"></iframe>
