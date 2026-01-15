|  标题   | 标签  |
|  ----  | ----  |
| partialRight(后置函数参数) | function(函数) |

创建一个函数，该函数调用 fn 并将部分附加到它接收的参数。

* 使用扩展运算符 (...) 将部分附加到 fn 的参数列表。

```js
const partialRight = (fn,...partials) => (...args) => fn(...args,...partials);
```

<div class="code-editor" data-url="codes/javascript/ts/partial-right.ts" data-language="typescript"></div>

> 调用方式:

```js
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetJohn = partialRight(greet, 'John');
greetJohn('Hello'); // 'Hello John!'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/partial-right.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/partial-right.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/partial-right.html"></iframe>