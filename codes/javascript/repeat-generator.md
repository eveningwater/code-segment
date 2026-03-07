| 标题                        | 标签                             |
| --------------------------- | -------------------------------- |
| repeatGenerator(重复生成器) | function,generator(函数，生成器) |

创建一个生成器，无限期地重复给定的值。

- 使用非终止 while 循环，每次调用 Generator.prototype.next() 时都会产生一个值。
- 如果传递的值不是未定义的，则使用 yield 语句的返回值来更新返回值。

```js
const repeatGenerator = function* (val) {
  let v = val;
  while (true) {
    let newVal = yield v;
    if (newVal !== undefined) {
      v = newVal;
    }
  }
};
```

<div class="code-editor" data-url="codes/javascript/ts/repeat-generator.ts" data-language="typescript"></div>

> 调用方式:

```js
const repeater = repeatGenerator(5);
repeater.next(); // { value: 5, done: false }
repeater.next(); // { value: 5, done: false }
repeater.next(4); // { value: 4, done: false }
repeater.next(); // { value: 4, done: false }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/repeat-generator.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/repeat-generator.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/repeat-generator.html"></iframe>
