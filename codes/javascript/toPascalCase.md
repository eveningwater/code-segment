| 标题                                   | 标签                              |
| -------------------------------------- | --------------------------------- |
| toPascalCase(转成首字母大小写的字符串) | string,regexp(字符串，正则表达式) |

将字符串转换为 Pascal 大小写。

- 使用 String.prototype.match() 使用适当的正则表达式将字符串分解为单词。
- 使用 Array.prototype.map()、Array.prototype.slice()、Array.prototype.join()、String.prototype.toUpperCase()和 String.prototype.toLowerCase()组合起来，每个首字母大写单词并将其余部分小写。

```js
const toPascalCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join('');
```

> 调用方式:

```js
toPascalCase('some_database_field_name'); // 'SomeDatabaseFieldName'
toPascalCase('Some label that needs to be pascalized');
// 'SomeLabelThatNeedsToBePascalized'
toPascalCase('some-javascript-property'); // 'SomeJavascriptProperty'
toPascalCase('some-mixed_string with spaces_underscores-and-hyphens');
// 'SomeMixedStringWithSpacesUnderscoresAndHyphens'
```

> 应用场景
