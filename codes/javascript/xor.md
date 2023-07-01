| 标题                    | 标签                     |
| ----------------------- | ------------------------ |
| xor(检查只有一个值为真) | math,logic(数学，逻辑的) |

检查是否只有一个参数为真。

- 对两个给定值使用逻辑或 (||)、与 (&&) 和非 (!) 运算符来创建逻辑异或。

```js
const xor = (a, b) => (a || b) && !(a && b);
```

> 调用方式:

```js
xor(true, true); // false
xor(true, false); // true
xor(false, true); // true
xor(false, false); // false
```

> 应用场景
