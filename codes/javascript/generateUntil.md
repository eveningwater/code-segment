| 标题                                    | 标签                            |
| --------------------------------------- | ------------------------------- |
| generateItems(生成满足条件新值的生成器) | function,generator(函数,生成器) |

创建一个生成器，在满足给定条件之前不断生成新值。

- 使用种子值初始化当前 val。
- 当使用当前 val 调用的条件函数返回 false 时，使用 while 循环进行迭代。
- 使用 yield 返回当前 val 并可选择接收新的种子值 nextSeed。
- 使用 next 函数从当前 val 和 nextSeed 计算下一个值。

```js
const generateUntil = function* (seed, condition, next) {
  let val = seed;
  let nextSeed = null;
  while (!condition(val)) {
    nextSeed = yield val;
    val = next(val, nextSeed);
  }
  return val;
};
```

> 调用方式:

```js
[
  ...generateUntil(
    1,
    v => v > 5,
    v => ++v
  )
]; // [1, 2, 3, 4, 5]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/generateUntil.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/generateUntil.html"></iframe>
