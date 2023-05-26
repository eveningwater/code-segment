| 标题                                | 标签       |
| ----------------------------------- | ---------- |
| toOrdinalSuffix(连线序数数字大小写) | math(数学) |

获取一个数字并将其作为具有正确序数指示器后缀的字符串返回。

- 使用模运算符 (%) 查找个位数和十位数的值。
- 查找匹配的序号模式数字。
- 如果在青少年模式中发现数字，请使用青少年序号。

```js
const toOrdinalSuffix = num => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ['st', 'nd', 'rd', 'th'],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};
```

> 调用方式:

```js
toOrdinalSuffix('123'); // '123rd'
```

> 应用场景
