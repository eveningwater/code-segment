| 标题                    | 标签                                    |
| ----------------------- | --------------------------------------- |
| compose(执行任务的函数) | function,intermediate(函数，两者之间的) |

执行从右到左的函数组合。

- 使用 `Array.prototype.reduce()` 执行从右到左的函数组合。
- 最后一个（最右边的）函数可以接受一个或多个参数； 其余函数必须是一元的。

> 代码如下:

```js
const compose = (...handlers) =>
  handlers.reduce(
    (f, h) =>
      (...args) =>
        f(h(...args))
  );
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/compose.ts" data-language="typescript"></div>

> 调用方式:

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(add5, multiply);
multiplyAndAdd5(5, 2); // 15
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/compose.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/compose.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/compose.html"></iframe>
