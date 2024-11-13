| 标题           | 标签                                        |
| -------------- | ------------------------------------------- |
| both(并且函数) | function,logic,beginner(函数，魔法，初学者) |

检查两个给定函数对于给定参数集是否都返回 true。

- 对使用提供的参数调用两个函数的结果使用逻辑和 (&&) 运算符。

> 代码如下:

```js
const both =
  (f, g) =>
  (...args) =>
    f(...args) && g(...args);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/both.ts" data-language="typescript"></div>

> 调用方式:

```js
const isEven = num => num % 2 === 0;
const isPositive = num => num > 0;
const isPositiveEven = both(isEven, isPositive);
isPositiveEven(4); // true
isPositiveEven(-2); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/both.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/both.html"></iframe>
