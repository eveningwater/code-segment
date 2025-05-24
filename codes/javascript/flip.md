| 标题               | 标签           |
| ------------------ | -------------- |
| flip(翻转函数参数) | function(函数) |

将函数作为参数，然后将第一个参数作为最后一个参数。

- 使用参数解构和带有可变参数的闭包。
- 使用扩展运算符 (`...`) 拼接第一个参数，使其成为最后一个参数，然后再应用其余参数。

```js
const flip =
  handler =>
  (first, ...rest) =>
    handler(...rest, first);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/flip.ts" data-language="typescript"></div>

> 调用方式:

```js
let a = { name: 'John Smith' };
let b = {};
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
mergePerson(b); // == b
b = {};
Object.assign(b, a); // == b
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/flip.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/flip.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/flip.html"></iframe>
