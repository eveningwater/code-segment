| 标题                                                                                           | 标签                                      |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------- |
| gcd(最大[公约数](https://baike.baidu.com/item/%E5%85%AC%E7%BA%A6%E6%95%B0/1063409?fr=aladdin)) | math,algorithm,recursion(数学,算法，递归) |

计算两个或多个数字/数组之间的最大公约数。

- 内部 \_gcd 函数使用递归。
- 基本情况是 y 等于 0。在这种情况下，返回 x。
- 否则，返回 y 的 GCD 和除法 x / y 的余数。

```js
const gcd = (...arr) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [...arr].reduce((a, b) => _gcd(a, b));
};
```

> 调用方式:

```js
gcd(8, 36); // 4
gcd(...[12, 8, 32]); // 4
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/gcd.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/funcgcdtions.html"></iframe>
