|  标题   | 标签  |
|  ----  | ----  |
| partial(前置函数参数) | function(函数) |

创建一个函数，该函数调用 fn 并在其接收的参数前面加上部分。

* 使用扩展运算符 (...) 将部分添加到 fn 的参数列表中。

```js
const partial = (fn,...partials) => (...args) => fn(...partials,...args);
```

<div class="code-editor" data-url="codes/javascript/ts/partial.ts" data-language="typescript"></div>

> 调用方式:

```js
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetHello = partial(greet, '你好');
greetHello('john'); // '你好john！'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/partial.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/partial.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/partial.html"></iframe>