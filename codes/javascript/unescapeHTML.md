| 标题                         | 标签                              |
| ---------------------------- | --------------------------------- |
| unescapeHTML(转义 HTML 字符) | regexp,string(正则表达式，字符串) |

Unescapes 转义的 HTML 字符。

- 将 String.prototype.replace() 与匹配需要取消转义的字符的正则表达式一起使用。
- 使用函数的回调，使用字典（对象）将每个转义字符实例替换为其关联的未转义字符。

```js
const unescapeHTML = str =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    tag =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"'
      }[tag] || tag)
  );
```

> 调用方式:

```js
unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;');
// '<a href="#">Me & you</a>'
```

> 应用场景
