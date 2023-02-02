| 标题                        | 标签           |
| --------------------------- | -------------- |
| pipeFunctions(同步执行函数) | function(函数) |

执行从左到右的函数组合。

- 将 Array.prototype.reduce() 与扩展运算符 (...) 结合使用以执行从左到右的函数组合。
- 第一个（最左边的）函数可以接受一个或多个参数； 其余函数必须是一元的。

```js
const pipeFunctions = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );
```

> 调用方式:

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);
multiplyAndAdd5(5, 2); // 15
```

> 应用场景
