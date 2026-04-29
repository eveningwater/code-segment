| 标题                       | 标签           |
| -------------------------- | -------------- |
| spreadOver(处理参数的函数) | function(函数) |

采用可变参数函数并返回一个接受参数数组的函数。

- 使用闭包和扩展运算符 (...) 将参数数组映射到函数的输入。

```js
const spreadOver = fn => argsArr => fn(...argsArr);
```

<div class="code-editor" data-url="codes/javascript/ts/spread-over.ts" data-language="typescript"></div>

> 调用方式:

```js
const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/spread-over.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/spread-over.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/spread-over.html"></iframe>