| 标题                  | 标签                              |
| --------------------- | --------------------------------- |
| isAnagram(判断变位词) | string,regexp(字符串，正则表达式) |

检查一个字符串是否是另一个字符串的变位词（不区分大小写，忽略空格、标点符号和特殊字符）。

- 将 String.prototype.toLowerCase() 和 String.prototype.replace() 与适当的正则表达式一起使用以删除不必要的字符。
- 在两个字符串上使用 String.prototype.split()、Array.prototype.sort() 和 Array.prototype.join() 来规范化它们，然后检查它们的规范化形式是否相等。

```js
const isAnagram = (str1, str2) => {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "")
      .split("")
      .sort()
      .join();
  return normalize(str1) === normalize(str2);
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-anagram.ts" data-language="typescript"></div>

### 可以模拟 php 的 count_chars 函数,然后再通过 count_chars 函数来判断

代码如下所示:

```js
function countChars(str, mode = 0) {
  const charCount = {};
  for (let char of str) {
    const code = char.charCodeAt(0);
    charCount[code] = (charCount[code] || 0) + 1;
  }
  switch (mode) {
    case 0:
      return charCount;
    case 1:
      return Object.keys(charCount)
        .map((code) => String.fromCharCode(Number(code)))
        .join("");
    case 2:
      return charCount;
    case 3:
      const allChars = [];
      for (let i = 32; i <= 126; i++) {
        if (!charCount[i]) {
          allChars.push(String.fromCharCode(i));
        }
      }
      return allChars.join("");
    default:
      return null;
  }
}
function isAnagram(str1, str2) {
  // 数组对象无法直接判断相等，所以需要转成字符串
  return (
    JSON.stringify(countChars(str1, 1)) === JSON.stringify(countChars(str2, 1))
  );
}
```

> 调用方式:

```js
isAnagram("iceman", "cinema"); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-anagram.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-anagram.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-anagram.html"></iframe>
