| 标题         | 标签                       |
| ------------ | -------------------------- |
| primes(质数) | math,algorithm(数学，算法) |

使用 Eratosthenes 筛法生成不超过给定数的素数。

- 生成一个从 2 到给定数字的数组。
- 使用 Array.prototype.filter() 过滤出可被从 2 到所提供数字的平方根之间的任何数字整除的值。

```js
const primes = num => {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
    sqrtRoot = Math.floor(Math.sqrt(num)),
    arrTillSqrRoot = Array.from({ length: sqrtRoot - 1 }).map((x, i) => i + 2);
  arrTillSqrRoot.forEach(x => (arr = arr.filter(y => y === x || y % x !== 0)));
  return arr;
};
```

> 调用方式:

```js
primes(10); // [2, 3, 5, 7]
```

> 应用场景
