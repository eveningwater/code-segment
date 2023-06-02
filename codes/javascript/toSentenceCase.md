| 标题                             | 标签                              |
| -------------------------------- | --------------------------------- |
| toSentenceCase(句子大小写字符串) | string,regexp(字符串，正则表达式) |

将字符串转换为句子大小写。

- 使用 String.prototype.match() 使用适当的正则表达式将字符串分解为单词。
- 使用 Array.prototype.slice()、Array.prototype.join() 和 String.prototype.toUpperCase() 组合它们，将第一个单词的首字母大写，并在它们之间添加一个空格。

```js
const toSentenceCase = str => {
  const s =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .join(' ');
  return s.slice(0, 1).toUpperCase() + s.slice(1);
};
```

> 调用方式:

```js
toSentenceCase('some_database_field_name'); // 'Some database field name'
toSentenceCase('Some label that needs to be title-cased');
// 'Some label that needs to be title cased'
toSentenceCase('some-package-name'); // 'Some package name'
toSentenceCase('some-mixed_string with spaces_underscores-and-hyphens');
// 'Some mixed string with spaces underscores and hyphens'
```

> 应用场景
