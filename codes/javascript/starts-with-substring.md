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

<div class="code-editor" data-url="codes/javascript/ts/starts-with-substring.ts" data-language="typescript"></div>

> 调用方式:

```js
startsWithSubstring('/>Lorem ipsum dolor sit amet', '<br />'); // '/>'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/starts-with-substring.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/starts-with-substring.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/starts-with-substring.html"></iframe>