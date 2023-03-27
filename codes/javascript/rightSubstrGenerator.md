| 标题                                           | 标签                             |
| ---------------------------------------------- | -------------------------------- |
| rightSubstrGenerator(从右开始截取字符串生成器) | string,generator(字符串，生成器) |

生成给定字符串的所有右子串。

- 如果字符串为空，则使用 String.prototype.length 提前终止。
- 使用 for...in 循环和 String.prototype.slice() 生成给定字符串的每个子字符串，从末尾开始。

```js
const rightSubstrGenerator = function* (str) {
  if (!str.length) {
    return;
  }
  for (let i in str) yield str.slice(-i - 1);
};
```

> 调用方式:

```js
[...rightSubstrGenerator('hello')];
// [ 'o', 'lo', 'llo', 'ello', 'hello' ]
```

> 应用场景
