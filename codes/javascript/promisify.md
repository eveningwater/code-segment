| 标题                | 标签                         |
| ------------------- | ---------------------------- |
| promisify(期约函数) | function,promise(函数，期约) |

转换异步函数以返回期约。

- 使用柯里化返回一个函数，该函数返回一个调用原始函数的 Promise。
- 使用剩余运算符 (...) 传递所有参数。
- 注意：在 Node 8+ 中，你可以使用[util.promisify](https://nodejs.org/api/util.html#util_util_promisify_original)。

```js
const promisify =
  func =>
  (...args) =>
    new Promise((resolve, reject) =>
      func(...args, (err, result) => (err ? reject(err) : resolve(result)))
    );
```

<div class="code-editor" data-url="codes/javascript/ts/promisify.ts" data-language="typescript"></div>

> 调用方式:

```js
const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log('Hi!')); // Promise resolves after 2s
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/promisify.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/promisify.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/promisify.html"></iframe>