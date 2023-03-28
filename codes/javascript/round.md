| 标题                | 标签       |
| ------------------- | ---------- |
| round(四舍五入数字) | math(数学) |

将数字四舍五入到指定的位数。

- 使用 Math.round() 和模板文字将数字四舍五入到指定的位数。
- 省略第二个参数 decimals，以四舍五入为整数。

```js
// 函数参数
const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
```

> 调用方式:

```js
round(1.005, 2); // 1.01
```

> 应用场景
