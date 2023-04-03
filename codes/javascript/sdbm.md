| 标题                                       | 标签       |
| ------------------------------------------ | ---------- |
| Hash string into number(hash 字符串转数字) | math(数学) |

将输入字符串散列为整数。

- 使用 String.prototype.split() 和 Array.prototype.reduce() 创建输入字符串的散列，利用位移。

```js
const sdbm = str => {
  let arr = str.split('');
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode =
        currentVal.charCodeAt(0) +
        (hashCode << 6) +
        (hashCode << 16) -
        hashCode),
    0
  );
};
```

> 调用方式:

```js
sdbm('name'); // -3521204949
```

> 应用场景
