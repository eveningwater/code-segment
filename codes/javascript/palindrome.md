|  标题   | 标签  |
|  ----  | ----  |
| palindrome(是否是回文字符串) | string(字符串) |

检查给定的字符串是否为回文。

* 将字符串规范化为 String.prototype.toLowerCase() 并使用 String.prototype.replace() 从中删除非字母数字字符。
* 使用扩展运算符 (...) 将规范化字符串拆分为单个字符。
* 使用 Array.prototype.reverse()、Array.prototype.join() 并将结果与规范化字符串进行比较。

```js
const palindrome = str => {
    const s = str.toLowerCase().replace(/[\W_]/g,'');
    return [...s].reverse().join('');
}
```

> 调用方式:

```js
palindrome('taco cat'); // true
```

> 应用场景