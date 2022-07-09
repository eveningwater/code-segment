|  标题   | 标签  |
|  ----  | ----  |
| fromCamelCase(计算元素出现的次数) | string(字符串) |

从驼峰式转换字符串。

* 使用 `String.prototype.replace()` 将字符串分解为单词并在它们之间添加分隔符。
* 省略第二个参数以使用默认分隔符 _。

```js
const fromCamelCase = (str, separator = '_') =>
  str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase();
```

### 命名捕获组

* ?<修改的捕获组名>

```js
const fromCamelCase = (str, separator = '_') =>
  str.replace(/(?<a>[a-z\d])(?<b>[A-Z])/g, '$<a>' + separator + '$<b>').replace(/(?<a>[A-Z]+)(?<b>[A-Z][a-z\d]+)/g, '$<a>' + separator + '$<b>').toLowerCase();
```

> 调用方式:

```js
fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'
fromCamelCase('someLabelThatNeedsToBeDecamelized', '-');
// 'some-label-that-needs-to-be-decamelized'
fromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'
fromCamelCase('JSONToCSV', '.'); // 'json.to.csv'
```

> 应用场景

