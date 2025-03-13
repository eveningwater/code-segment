| 标题                | 标签                                            |
| ------------------- | ----------------------------------------------- |
| curry(函数柯里化。) | function,recursion,advanced(函数，递归，高级的) |

函数柯里化。

- 使用递归。
- 如果提供的参数（args）数量足够，则调用传递的函数 `fn`。
- 否则，使用 `Function.prototype.bind()` 返回一个柯里化函数 `fn` ，它需要其余的参数。
- 如果你想对一个接受可变数量参数的函数（可变参数函数，例如 Math.min()）进行 curry，你可以选择将参数数量传递给第二个参数 arity。

> 代码如下:

```js
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/curry.ts" data-language="typescript"></div>

> 调用方式:

```js
curry(Math.pow)(2)(10); // 1024
curry(Math.min, 3)(10)(50)(2); // 2
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/curry.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/curry.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/curry.html"></iframe>
