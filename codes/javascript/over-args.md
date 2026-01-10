|  标题   | 标签  |
|  ----  | ----  |
| overArgs(转换函数参数) | function(函数) |

创建一个函数，该函数调用提供的函数并转换其参数。

* 使用 Array.prototype.map() 将转换应用于 args 并结合扩展运算符 (...) 将转换后的参数传递给 fn。

```js
const overArgs = (fn,transform) => (...args) => fn(...args.map((val,i) => transform[i](val)));
```

<div class="code-editor" data-url="codes/javascript/ts/over-args.ts" data-language="typescript"></div>

> 调用方式:

```js
const square = n => n * n;
const double = n => n * 2;
const fn = overArgs((x, y) => [x, y], [square, double]);
fn(9, 3); // [81, 6]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/over-args.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/over-args.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/over-args.html"></iframe>