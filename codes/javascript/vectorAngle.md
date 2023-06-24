| 标题                  | 标签       |
| --------------------- | ---------- |
| vectorAngle(向量角度) | math(数学) |

计算两个向量之间的角度 (theta)。

- 使用 Array.prototype.reduce()、Math.pow() 和 Math.sqrt() 计算每个向量的大小以及两个向量的标量积。
- 使用 Math.acos() 计算反余弦并获取 theta 值。

```js
const vectorAngle = (x, y) => {
  let mX = Math.sqrt(x.reduce((acc, n) => acc + Math.pow(n, 2), 0));
  let mY = Math.sqrt(y.reduce((acc, n) => acc + Math.pow(n, 2), 0));
  return Math.acos(x.reduce((acc, n, i) => acc + n * y[i], 0) / (mX * mY));
};
```

> 调用方式:

```js
vectorAngle([3, 4], [4, 3]); // 0.283794109208328
```

> 应用场景
