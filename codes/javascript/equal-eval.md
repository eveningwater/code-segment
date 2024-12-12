| 标题                                | 标签                      |
| ----------------------------------- | ------------------------- |
| equalEval(实现类似 js 中 eval 方法) | eval,Function(输出，函数) |

将给定字符串转化为可运行的`javascript`代码。

- 使用`new Function()`构造函数以及返回该字符串即可实现

> 代码如下:

```js
const equalEval = str => new Function('return ' + str)();
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/equal-eval.ts" data-language="typescript"></div>

> 调用方式:

```js
equalEval('console.log(123)'); // 123
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/equal-eval.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/equal-eval.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/equal-eval.html"></iframe>
