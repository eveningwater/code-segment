| 标题             | 标签                       |
| ---------------- | -------------------------- |
| either(二者之一) | function,logic(函数，逻辑) |

检查对于给定的一组参数是否至少有一个函数返回 true。

- 在使用提供的参数调用两个函数的结果上使用逻辑或 (||) 运算符。

> 代码如下:

```js
const either =
  (f, g) =>
  (...args) =>
    f(...args) || g(...args);
```

> 调用方式:

```js
const isEven = num => num % 2 === 0;
const isPositive = num => num > 0;
const isPositiveOrEven = either(isPositive, isEven);
isPositiveOrEven(4); // true
isPositiveOrEven(3); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isPositiveOrEven.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isPositiveOrEven.html"></iframe>
