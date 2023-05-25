| 标题                    | 标签                              |
| ----------------------- | --------------------------------- |
| toKebabCase(连线大小写) | string,regexp(字符串，正则表达式) |

将字符串转换为 kebab 大小写。

- 使用 String.prototype.match() 使用适当的正则表达式将字符串分解为单词。
- 使用 Array.prototype.map()、Array.prototype.join() 和 String.prototype.toLowerCase() 组合它们，添加'-'作为分隔符。

```js
const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
```

> 调用方式:

```js
toKebabCase('camelCase'); // 'camel-case'
toKebabCase('some text'); // 'some-text'
toKebabCase('some-mixed_string With spaces_underscores-and-hyphens');
// 'some-mixed-string-with-spaces-underscores-and-hyphens'
toKebabCase('AllThe-small Things'); // 'all-the-small-things'
toKebabCase('IAmEditingSomeXMLAndHTML');
// 'i-am-editing-some-xml-and-html'
```

> 应用场景
