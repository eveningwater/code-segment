|  标题   | 标签  |
|  ----  | ----  |
| containsWhitespace(判断字符串中是否包含空白) | string,regexp,beginner(字符串，正则表达式，初学者) |

检查给定的字符串是否包含任何空白字符。

* 使用 `Array.prototype.reduce()` 执行从右到左的函数组合。
* 使用正则表达式中的 `RegExp.prototype.test()` 来检查给定字符串是否包含任何空白字符。

> 代码如下:

```js
const containsWhitespace = str => /\s/.test(str);
```

> 调用方式:

```js
containsWhitespace('lorem'); // false
containsWhitespace('lorem ipsum'); // true
```

> 应用场景