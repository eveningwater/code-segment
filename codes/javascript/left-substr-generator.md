| 标题                                            | 标签                             |
| ----------------------------------------------- | -------------------------------- |
| leftSubstrGenerator(从左边开始截取字符串生成器) | string,generator(字符串，生成器) |

生成给定字符串的所有左子字符串。

- 如果字符串为空，请使用 `String.prototype.length` 提前终止。
- 使用 for...in 循环和 `String.prototype.slice()` 从头开始产生给定字符串的每个子字符串。

```js
const leftSubstrGenerator = function* (str) {
  if (typeof str !== "string" || !str.length) {
    return;
  }
  for (let i in str) {
    yield str.slice(0, i + 1);
  }
};

// 对于ts代码，应该使用for循环而不是for...in，具体可以参考ts代码的实现
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/left-substr-generator.ts" data-language="typescript"></div>

> 调用方式:

```js
[...leftSubstrGenerator("hello")];
// [ 'h', 'he', 'hel', 'hell', 'hello' ]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/left-substr-generator.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/left-substr-generator.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/left-substr-generator.html"></iframe>
