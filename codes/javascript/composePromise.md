| 标题                               | 标签                                    |
| ---------------------------------- | --------------------------------------- |
| composePromise(异步执行任务的函数) | function,intermediate(函数，两者之间的) |

异步执行从右到左的函数组合。

- 使用 `Array.prototype.reduce()` 执行从右到左的函数组合，每个函数使用期约包裹。
- 最后一个（最右边的）函数可以接受一个或多个参数； 其余函数必须是一元的。

> 代码如下:

```js
const composePromise =
  (...fns) =>
  x =>
    fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
```

> 调用方式:

```js
function addTwo(x) {
  return x + 2;
}
function addThree(x) {
  return x + 3;
}
function addFive(x) {
  return x + 5;
}
let addTen = composePromise(addTwo, addThree, addFive);
addTen(8).then(console.log); // 18
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/composePromise.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/composePromise.html"></iframe>
