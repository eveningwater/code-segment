| 标题                       | 标签                                              |
| -------------------------- | ------------------------------------------------- |
| cycleGenerator(迭代生成器) | function,generator,advanced(函数，生成器，高级的) |

创建一个生成器，无限期地循环给定数组。

- 使用非终止 `while` 循环，每次调用 `Generator.prototype.next()` 时都会产生一个值。
- 使用带有 `Array.prototype.length` 的模块运算符 (`%`) 来获取下一个值的索引，并在每个 `yield` 语句之后递增计数器。

> 代码如下:

```js
const cycleGenerator = function* (arr) {
  let i = 0;
  while (true) {
    yield arr[i % arr.length];
    i++;
  }
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/cycle-generator.ts" data-language="typescript"></div>

> 调用方式:

```js
const binaryCycle = cycleGenerator([0, 1]);
binaryCycle.next(); // { value: 0, done: false }
binaryCycle.next(); // { value: 1, done: false }
binaryCycle.next(); // { value: 0, done: false }
binaryCycle.next(); // { value: 1, done: false }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/cycle-generator.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/cycle-generator.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/cycle-generator.html"></iframe>
