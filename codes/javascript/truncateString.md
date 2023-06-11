| 标题                       | 标签           |
| -------------------------- | -------------- |
| truncateString(截断字符串) | string(字符串) |

将字符串截断至指定长度。

- 确定 String.prototype.length 是否大于 num。
- 返回截断为所需长度的字符串，并在末尾或原始字符串后附加“...”。

```js
const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
```

> 调用方式:

```js
truncateString('boomerang', 7); // 'boom...'
```

> 应用场景
