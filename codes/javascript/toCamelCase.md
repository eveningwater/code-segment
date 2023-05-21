| 标题                    | 标签                              |
| ----------------------- | --------------------------------- |
| toCamelCase(驼峰大小写) | string,regexp(字符串，正则表达式) |

将字符串转换为驼峰式。

- 使用 String.prototype.match() 使用适当的正则表达式将字符串分解为单词。
- 使用 Array.prototype.map()、Array.prototype.slice()、Array.prototype.join()、String.prototype.toLowerCase() 和 String.prototype.toUpperCase() 组合它们，每个首字母大写 一。

```js
const toCamelCase = str => {
  const s =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};
```

> 调用方式:

```js
toCamelCase('some_database_field_name'); // 'someDatabaseFieldName'
toCamelCase('Some label that needs to be camelized');
// 'someLabelThatNeedsToBeCamelized'
toCamelCase('some-javascript-property'); // 'someJavascriptProperty'
toCamelCase('some-mixed_string with spaces_underscores-and-hyphens');
// 'someMixedStringWithSpacesUnderscoresAndHyphens'
```

> 应用场景
