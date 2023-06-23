| 标题                           | 标签       |
| ------------------------------ | ---------- |
| validateNumber(验证是否是数字) | math(数学) |

检查给定值是否为数字。

- 使用 parseFloat() 尝试将 n 转换为数字。
- 使用 Number.isNaN() 和逻辑非 (!) 运算符检查 num 是否为数字。
- 使用 Number.isFinite() 检查 num 是否有限。
- 使用 Number 和松散相等运算符 (==) 检查强制转换是否成立。

```js
const validateNumber = n => {
  const num = parseFloat(n);
  return !Number.isNaN(num) && Number.isFinite(num) && Number(n) == n;
};
```

> 调用方式:

```js
validateNumber('10'); // true
validateNumber('a'); // false
```

> 应用场景
