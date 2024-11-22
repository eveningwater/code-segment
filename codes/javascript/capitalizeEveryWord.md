| 标题                                    | 标签                                                       |
| --------------------------------------- | ---------------------------------------------------------- |
| capitalizeEveryWord(所有字母转换成大写) | string,regexp,intermediate(字符串，正则表达式，两者之间的) |

将字符串中每个单词的第一个字母大写。

- 使用 `String.prototype.replace()` 匹配每个单词的第一个字符，使用 `String.prototype.toUpperCase()` 将其大写。

> 代码如下:

```js
const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, w => w.toUpperCase());
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/capitalizeEveryWord.ts" data-language="typescript"></div>

> 调用方式:

```js
capitalizeEveryWord('hello world!'); // 'Hello World!'
```

> 应用场景

以下是基于上述代码实现的一个单词字母大写转换器的<a href="codes/javascript/html/capitalizeEveryWord.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/capitalizeEveryWord.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/capitalizeEveryWord.html"></iframe>
