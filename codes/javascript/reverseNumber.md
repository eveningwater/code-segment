| 标题                    | 标签                      |
| ----------------------- | ------------------------- |
| reverseNumber(反转数字) | math,string(数学，字符串) |

反转数字。

- 使用 Object.prototype.toString() 将 n 转换为字符串。
- 使用 String.prototype.split()、Array.prototype.reverse() 和 Array.prototype.join() 将 n 的反转值作为字符串获取。
- 使用 parseFloat() 将字符串转换为数字，使用 Math.sign() 保留其符号。

```js
const reverseNumber = n =>
  parseFloat(`${n}`.split('').reverse().join('')) * Math.sign(n);
```

> 调用方式:

```js
reverseNumber(981); // 189
reverseNumber(-500); // -5
reverseNumber(73.6); // 6.37
reverseNumber(-5.23); // -32.5
```

> 应用场景
