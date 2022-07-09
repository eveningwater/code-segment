|  标题   | 标签  |
|  ----  | ----  |
| capitalizeEveryWord(所有字母转换成大写) | string,regexp,intermediate(字符串，正则表达式，两者之间的) |

将字符串中每个单词的第一个字母大写。

* 使用 `String.prototype.replace()` 匹配每个单词的第一个字符，使用 `String.prototype.toUpperCase()` 将其大写。


> 代码如下:

```js
    const capitalizeEveryWord = str => str.replace(/\b[a-z]/g,w => w.toUpperCase());
```

> 调用方式:

```js
    capitalizeEveryWord('hello world!'); // 'Hello World!'
```

> 应用场景