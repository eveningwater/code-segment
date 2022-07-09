|  标题   | 标签  |
|  ----  | ----  |
| converge(进行运算的函数) | function,intermediate(函数，两者之间的) |

接受一个进行运算的函数和一个分支函数列表，并返回一个函数，该函数将每个分支函数应用于参数，分支函数的结果作为参数传递给进行运算的函数。

* 使用 `Array.prototype.map()` 和 `Function.prototype.apply()` 将每个函数应用于给定的参数。
* 使用扩展运算符 (...) 调用带有所有其他函数结果的进行运算的函数。

> 代码如下:

```js
const converge =  (converger,handlers) => (...args) => converger(...handlers.map(h => h.apply(null,args)));
```

> 调用方式:

```js
const average = converge((a, b) => a / b, [arr => arr.reduce((a, v) => a + v, 0),arr => arr.length]);
average([1, 2, 3, 4, 5, 6, 7]); // 4
```

> 应用场景