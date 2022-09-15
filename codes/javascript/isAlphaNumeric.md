|  标题   | 标签  |
|  ----  | ----  |
| isAlphaNumeric(判断字符是否只包含字母和数字) | string,regexp(字符串，正则表达式) |

检查字符串是否仅包含字母数字字符。

* 使用 RegExp.prototype.test() 检查输入字符串是否与字母数字正则表达式模式匹配。

```js
const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);
```

> 调用方式:

```js
isAlphaNumeric('hello123'); // true
isAlphaNumeric('123'); // true
isAlphaNumeric('hello 123'); // false (space character is not alphanumeric)
isAlphaNumeric('#$hello'); // false
```

> 应用场景





