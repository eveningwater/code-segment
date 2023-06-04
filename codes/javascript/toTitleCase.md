| 标题                          | 标签                              |
| ----------------------------- | --------------------------------- |
| toTitleCase(首字母大写字符串) | string,regexp(字符串，正则表达式) |

将字符串转换为标题大小写。

- 使用 String.prototype.match() 使用适当的正则表达式将字符串分解为单词。
- 使用 Array.prototype.map()、Array.prototype.slice()、Array.prototype.join() 和 String.prototype.toUpperCase() 组合它们，将每个单词的首字母大写，并在它们之间添加一个空格。

```js
const toTitleCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');
```

> 调用方式:

```js
toTitleCase('some_database_field_name'); // 'Some Database Field Name'
toTitleCase('Some label that needs to be title-cased');
// 'Some Label That Needs To Be Title Cased'
toTitleCase('some-package-name'); // 'Some Package Name'
toTitleCase('some-mixed_string with spaces_underscores-and-hyphens');
// 'Some Mixed String With Spaces Underscores And Hyphens'
```

> 应用场景
