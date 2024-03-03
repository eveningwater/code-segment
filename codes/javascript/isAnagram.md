| 标题                  | 标签                              |
| --------------------- | --------------------------------- |
| isAnagram(判断变位词) | string,regexp(字符串，正则表达式) |

检查一个字符串是否是另一个字符串的变位词（不区分大小写，忽略空格、标点符号和特殊字符）。

- 将 String.prototype.toLowerCase() 和 String.prototype.replace() 与适当的正则表达式一起使用以删除不必要的字符。
- 在两个字符串上使用 String.prototype.split()、Array.prototype.sort() 和 Array.prototype.join() 来规范化它们，然后检查它们的规范化形式是否相等。

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join();
  return normalize(str1) === normalize(str2);
};
```

> 调用方式:

```js
isAnagram('iceman', 'cinema'); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isAnagram.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isAnagram.html"></iframe>
