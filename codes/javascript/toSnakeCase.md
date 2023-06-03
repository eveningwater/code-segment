| 标题                      | 标签                              |
| ------------------------- | --------------------------------- |
| toSnakeCase(下划线字符串) | string,regexp(字符串，正则表达式) |

将字符串转换为下划线大小写。

- 使用 String.prototype.match() 使用适当的正则表达式将字符串分解为单词。
- 使用 Array.prototype.map()、Array.prototype.slice()、Array.prototype.join() 和 String.prototype.toLowerCase() 组合它们，添加 \_ 作为分隔符。

```js
const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
```

> 调用方式:

```js
toSnakeCase('camelCase'); // 'camel_case'
toSnakeCase('some text'); // 'some_text'
toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens');
// 'some_mixed_string_with_spaces_underscores_and_hyphens'
toSnakeCase('AllThe-small Things'); // 'all_the_small_things'
toSnakeCase('IAmEditingSomeXMLAndHTML');
// 'i_am_editing_some_xml_and_html'
```

> 应用场景
