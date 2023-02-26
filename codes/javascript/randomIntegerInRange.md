| 标题                                       | 标签                      |
| ------------------------------------------ | ------------------------- |
| randomIntegerInRange(随机生成范围内的整数) | math,random(数学，随机数) |

生成指定范围内的随机整数。

- 使用 Math.random() 生成随机数并将其映射到所需范围。
- 使用 Math.floor() 使其成为整数。

```js
const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
```

> 调用方式:

```js
randomIntegerInRange(0, 5); // 2
```

> 应用场景
