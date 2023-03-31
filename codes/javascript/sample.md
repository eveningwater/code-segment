| 标题                       | 标签                                    |
| -------------------------- | --------------------------------------- |
| sample(随机从数组中取元素) | array,string,random(数组，字符串，随机) |

从数组中获取一个随机元素。

- 使用 Math.random() 生成随机数。
- 将其乘以 Array.prototype.length 并使用 Math.floor() 将其四舍五入为最接近的整数。
- 此方法也适用于字符串。

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
```

> 调用方式:

```js
sample([3, 7, 9, 11]); // 9
sample('12345'); // 3
```

> 应用场景
