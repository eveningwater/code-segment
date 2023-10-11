| 标题                 | 标签                                        |
| -------------------- | ------------------------------------------- |
| complement(辅助函数) | function,logic,beginner(函数，魔法，初学者) |

返回一个函数，它是给定函数 `fn` 的逻辑补码。

- 对使用任何提供的参数调用 `fn` 的结果使用逻辑非 (`!`) 运算符。

> 代码如下:

```js
const complement =
  handler =>
  (...args) =>
    !fn(...args);
```

> 调用方式:

```js
const isEven = num => num % 2 === 0;
const isOdd = complement(isEven);
isOdd(2); // false
isOdd(3); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/complement.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/complement.html"></iframe>
