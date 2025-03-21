| 标题                  | 标签                                                |
| --------------------- | --------------------------------------------------- |
| collectInto(合并函数) | function,array,intermediate(函数，数组，两者之间的) |

将接受数组的函数更改为可变参数函数。

- 给定一个函数，返回一个闭包，它将所有输入收集到一个接受数组的函数中。

> 代码如下:

```js
const collectInto =
  handler =>
  (...args) =>
    handler(args);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/collect-into.ts" data-language="typescript"></div>

> 调用方式:

```js
const Pall = collectInto(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/collect-into.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/collect-into.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/collect-into.html"></iframe>
