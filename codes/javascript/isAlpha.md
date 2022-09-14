|  标题   | 标签  |
|  ----  | ----  |
| isAlpha(判断字符是否只包含字母) | string,regexp(字符串，正则表达式) |

检查字符串是否仅包含字母字符。

* 使用 RegExp.prototype.test() 检查给定的字符串是否与字母正则表达式模式匹配。

```js
const isAlpha = str => /^[a-zA-Z]*$/.test(str);
```

> 调用方式:

```js
isAlpha('sampleInput'); // true
isAlpha('this Will fail'); // false
isAlpha('123'); // false
```

> 应用场景





