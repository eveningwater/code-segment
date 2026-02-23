| 标题                                           | 标签        |
| ---------------------------------------------- | ----------- |
| reduceSuccessive(对数组每个元素执行相应的回调) | array(数组) |

对累加器和数组中的每个元素应用功能（从左到右），返回一系列依次降低的值。

- 使用 array.prototype.reduce（）将给定功能应用于给定的数组，并存储每个新结果。

```js
const reduceSuccessive = (arr, fn, acc) =>
  arr.reduce(
    (res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res),
    [acc]
  );
```

<div class="code-editor" data-url="codes/javascript/ts/reduce-successive.ts" data-language="typescript"></div>

> 调用方式:

```js
reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0);
// [0, 1, 3, 6, 10, 15, 21]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/reduce-successive.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/reduce-successive.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/reduce-successive.html"></iframe>