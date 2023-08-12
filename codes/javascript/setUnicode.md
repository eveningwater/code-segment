| 标题                                        | 标签                           |
| ------------------------------------------- | ------------------------------ |
| setUnicode(将字符串编码成统一码（Unicode）) | string,unicode(字符串，统一码) |

将字符串编码成统一码（Unicode）。

- 判断如果传入的的不是一个字符串或者是空字符串，则直接返回空字符串。
- 定义一个结果变量，遍历字符串，调用字符串的 charCodeAt 方法和 toString 方法将每一个字符转成 16 进制的字符串，再拼接“\\u(多一个\表示转义)”。
- 返回这个结果。

```js
const setUnicode = text => {
  if (typeof text !== 'string' || !text.length) {
    return '';
  }
  let res = '';
  for (let i = 0, len = text.length; i < len; i++) {
    res += '\\u' + text[i].charCodeAt(0).toString(16);
  }
  return res;
};
```

> 调用方式:

```js
setUnicode('Hello,world!'); // \u48\u65\u6c\u6c\u6f\u2c\u77\u6f\u72\u6c\u64\u21
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/setUnicode.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/setUnicode.html"></iframe>
