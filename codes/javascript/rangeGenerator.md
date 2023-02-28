| 标题                       | 标签                             |
| -------------------------- | -------------------------------- |
| rangeGenerator(范围生成器) | function,generator(函数，生成器) |

创建一个生成器，它使用给定的步骤生成给定范围内的所有值。

- 使用 while 循环从头到尾迭代，使用 yield 返回每个值，然后逐步递增。
- 省略第三个参数 step 以使用默认值 1。

```js
const rangeGenerator = function* (start, end, step = 1) {
  let i = start;
  while (i < end) {
    yield i;
    i += step;
  }
};
```

> 调用方式:

```js
for (let i of rangeGenerator(6, 10)) console.log(i);
// Logs 6, 7, 8, 9
```

> 应用场景
