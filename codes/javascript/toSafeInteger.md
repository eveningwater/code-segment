| 标题                      | 标签       |
| ------------------------- | ---------- |
| toSafeInteger(安全整数值) | math(数学) |

将值转换为安全整数。

- 使用 Math.max() 和 Math.min() 找到最接近的安全值。
- 使用 Math.round() 转换为整数。

```js
const toSafeInteger = num =>
  Math.round(
    Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );
```

> 调用方式:

```js
toSafeInteger('3.2'); // 3
toSafeInteger(Infinity); // 9007199254740991
```

> 应用场景
