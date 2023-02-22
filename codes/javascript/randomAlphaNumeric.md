| 标题                           | 标签                          |
| ------------------------------ | ----------------------------- |
| randomAlphaNumeric(随机验证码) | string,random(字符串，随机数) |

生成具有指定长度的随机字符串。

- 使用 Array.from() 创建具有指定长度的新数组。
- 使用 Math.random() 生成随机浮点数。
- 使用基数值为 36 的 Number.prototype.toString() 将其转换为字母数字字符串。
- 使用 String.prototype.slice() 从每个生成的数字中删除整数部分和小数点。
- 使用 Array.prototype.some() 根据需要多次重复此过程，直到长度为止，因为它每次都会生成一个可变长度的字符串。
- 最后，如果生成的字符串长于给定长度，则使用 String.prototype.slice() 来缩减生成的字符串。

```js
const randomAlphaNumeric = length => {
  let s = '';
  Array.from({ length }).some(() => {
    s += Math.random().toString(36).slice(2);
    return s.length >= length;
  });
  return s.slice(0, length);
};
```

> 调用方式:

```js
randomAlphaNumeric(5); // '0afad'
```

> 应用场景
