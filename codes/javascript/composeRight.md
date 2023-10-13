| 标题                         | 标签                                    |
| ---------------------------- | --------------------------------------- |
| composeRight(执行任务的函数) | function,intermediate(函数，两者之间的) |

执行从左到右的函数组合。

- 使用 `Array.prototype.reduce()` 执行从左到右的函数组合。
- 第一个（最左边的）函数可以接受一个或多个参数； 其余函数必须是一元的。

> 代码如下:

```js
const composeRight = (...handlers) =>
  handlers.reduce(
    (f, h) =>
      (...args) =>
        h(f(...args))
  );
```

> 调用方式:

```js
const add = (x, y) => x + y;
const square = x => x * x;
const addAndSquare = composeRight(add, square);
addAndSquare(1, 2); // 9
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/composeRight.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/composeRight.html"></iframe>
