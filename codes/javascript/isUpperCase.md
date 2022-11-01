|  标题   | 标签  |
|  ----  | ----  |
| isUpperCase(是否是大写字母) | string(字符串) |

检查字符串是否为大写。

* 使用 String.prototype.toUpperCase() 将给定的字符串转换为大写，并将其与原始字符串进行比较。

```js
const isUpperCase = str => str === str.toUppercase();
```

> 调用方式:

```js
isUpperCase('ABC'); // true
isUpperCase('A3@$'); // true
isUpperCase('aB4'); // false
```

> 应用场景
