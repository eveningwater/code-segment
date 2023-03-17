| 标题                               | 标签                              |
| ---------------------------------- | --------------------------------- |
| removeWhitespace(移除字符串的空白) | string,regexp(字符串，正则表达式) |

返回删除了空格的字符串。

- 将 String.prototype.replace() 与正则表达式结合使用，将所有出现的空白字符替换为空字符串。

```js
const removeWhitespace = str => str.replace(/\s+/, '');
```

> 调用方式:

```js
removeWhitespace('Lorem ipsum.\n Dolor sit amet. ');
// 'Loremipsum.Dolorsitamet.'
```

> 应用场景
