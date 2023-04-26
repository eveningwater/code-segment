| 标题                                      | 标签           |
| ----------------------------------------- | -------------- |
| startsWithSubstring(字符串以子字符串开头) | string(字符串) |

检查给定字符串是否以另一个字符串的子字符串开头。

- 使用 for...in 循环和 String.prototype.slice() 获取给定单词的每个子字符串，从头开始。
- 使用 String.prototype.startsWith() 根据文本检查当前子字符串。
- 如果找到，则返回匹配的子字符串。 否则，返回未定义。

```js
const startsWithSubstring = (text, word) => {
  for (let i in word) {
    const subStr = word.slice(-i - 1);
    if (text.startsWith(subStr)) return subStr;
  }
  return undefined;
};
```

> 调用方式:

```js
startsWithSubstring('/>Lorem ipsum dolor sit amet', '<br />'); // '/>'
```

> 应用场景
