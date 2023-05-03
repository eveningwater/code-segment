| 标题               | 标签       |
| ------------------ | ---------- |
| sumPower(范围幂和) | math(数学) |

计算从开始到结束（包括两者）的所有数字的幂之和。

- 使用 Array.prototype.fill() 创建目标范围内所有数字的数组。
- 使用 Array.prototype.map() 和指数运算符 (\*\*) 将它们提升为幂，并使用 Array.prototype.reduce() 将它们相加。
- 省略第二个参数 power，以使用默认的幂 2。
- 省略第三个参数 start，以使用默认起始值 1。

```js
const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((_, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);
```

> 调用方式:

```js
sumPower(10); // 385
sumPower(10, 3); // 3025
sumPower(10, 3, 5); // 2925
```

> 应用场景
