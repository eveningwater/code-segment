| 标题 | 标签 |
| ---- | ---- |
| JSONtoCSV(将 JSON 对象数组转换成逗号分割的字符串) | array,string,object,advanced(数组，字符串，对象，高级的) |

将对象数组转换为仅包含指定列的逗号分隔值（CSV）字符串。

- 使用`Array.prototype.join(delimiter)`方法根据传入的`columns`数组参数来组合所有名称以创建第一行
- 使用`Array.prototype.map()`和`Array.prototype.reduce()`为每个对象创建一行，用空字符串替换不存在的值，仅映射`columns`参数中对应的值
- 使用`Array.prototype.join('\n')`方法将所有行合并为一个字符串
- 如果不传入第三个参数`delimiter`,则使用默认的`delimiter(分隔符)`,即','

> 代码如下:

```js
const JSONToCSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map((obj) =>
      columns.reduce(
        (res, key) =>
          `${res}${!res.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`,
        ""
      )
    )
  ].join("\n");
```

> 调用方式:

```js
    JSONToCSV(
      [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
      ['a', 'b']
    ); // 'a,b\n"1","2"\n"3","4"\n"6",""\n"","7"'
    JSONToCSV(
      [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
      ['a', 'b'],
      ';'
    ); // 'a;b\n"1";"2"\n"3";"4"\n"6";""\n"";"7"'
```

> 应用场景
