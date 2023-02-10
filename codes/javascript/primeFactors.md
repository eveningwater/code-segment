| 标题                 | 标签                       |
| -------------------- | -------------------------- |
| primeFactors(质因数) | math,algorithm(数学，算法) |

使用试除算法查找给定数字的质因数。

- 使用 while 循环遍历所有可能的质因数，从 2 开始。
- 如果当前因子 f 正好整除 n，则将 f 添加到因子数组并将 n 除以 f。 否则，将 f 递增 1。

```js
const primeFactors = n => {
  const a = [];
  let f = 2;
  while (n > 1) {
    if (n % f === 0) {
      a.push(f);
      n /= f;
    } else {
      f++;
    }
  }
  return a;
};
```

> 调用方式:

```js
primeFactors(147); // [3, 7, 7]
```

> 应用场景
