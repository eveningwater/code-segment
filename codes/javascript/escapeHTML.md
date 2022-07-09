|  标题   | 标签  |
|  ----  | ----  |
| escapeHTML(转义字符串) | string,browser,regexp(字符串，浏览器，正则表达式) |

转义字符串以在 HTML 中使用。

* 将 `String.prototype.replace()` 与匹配需要转义的字符的正则表达式一起使用。
* 使用回调函数使用字典对象将每个字符实例替换为其关联的转义字符。

> 代码如下:

```js
const escapeHTML = str => str.replace(/[&<>'"]/g,tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag
));
```

> 调用方式:

```js
escapeHTML('<a href="#">Me & you</a>');
// '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
```

> 应用场景