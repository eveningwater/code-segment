| 标题            | 标签       |
| --------------- | ---------- |
| sumN(前 n 项和) | math(数学) |

对 1 到 n 之间的所有数字求和。

- 使用公式 (n \* (n + 1)) / 2 得到 1 和 n 之间所有数字的总和。

```js
const sumN = n => (n * (n + 1)) / 2;
```

> 调用方式:

```js
sumN(100); // 5050
```

> 应用场景