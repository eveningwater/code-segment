| 标题                        | 标签           |
| --------------------------- | -------------- |
| randomFloat(随机函数的实现) | random(随机数) |

模拟实现一个获取 0 ~ 1 之间随机数的函数，也就是 javascript 的[Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)函数。

- 使用 Uint32Array 构造函数生成一个 32 位数值。
- 最大值为 2 ^ 32 –1，即 0xffffffff。
- 使用[crypto.getRandomValues](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues)函数将随机数值去除最大值。

```js
const randomFloat = () => {
  const floatArray = new Uint32Array(1);
  const maxUint32 = 0xffffffff;
  return crypto.getRandomValues(floatArray)[0] / maxUint32;
};
```

> 调用方式:

```js
randomFloat(); // 0.5033651619458955 0 ~ 1之间的随机数
```

> 应用场景
