| 标题                                  | 标签                      |
| ------------------------------------- | ------------------------- |
| isGeneratorFunction(是否是生成器函数) | type,function(类型，函数) |

检查给定参数是否是生成器函数。

- 使用 Object.prototype.toString() 和 Function.prototype.call() 并检查结果是否为 '[object GeneratorFunction]'。

```js
const isGeneratorFunction = val =>
  Object.prototype.toString.call(val) === '[object GeneratorFunction]';
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-generator-function.ts" data-language="typescript"></div>

> 调用方式:

```js
isGeneratorFunction(function () {}); // false
isGeneratorFunction(function* () {}); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-generator-function.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-generator-function.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-generator-function.html"></iframe>
