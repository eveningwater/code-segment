| 标题                      | 标签           |
| ------------------------- | -------------- |
| reverseString(反转字符串) | string(字符串) |

反转字符串。

- 使用展开运算符 (...) 和 Array.prototype.reverse() 来反转字符串中字符的顺序。
- 使用 Array.prototype.join() 组合字符以获得字符串。

```js
const reverseString = str => [...str].reverse().join('');
```

> 调用方式:

```js
reverseString('foobar'); // 'raboof'
```

> 应用场景
