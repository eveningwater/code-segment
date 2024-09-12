| 标题                                          | 标签                                         |
| --------------------------------------------- | -------------------------------------------- |
| CSVToJSON(将逗号分割的值字符串转成 JSON 对象) | string,object,advanced(字符串，对象，高级的) |

将一个逗号分割的值字符串转成一个 2D 对象数组。字符串的第一行用作对象属性名。

- 使用`Array.prototype.slice()`和`Array.prototype.indexOf('\ n')`和`String.prototype.split(delimiter)`方法来将第一行（用作属性名的第一行）分隔为多个值

- 使用`String.prototype.split('\ n')`为每一行创建一个字符串，然后使用`Array.prototype.map()`和`String.prototype.split(delimiter)`分隔每行中的值

- 使用`Array.prototype.reduce()`为每一行的值创建一个对象，并从第一行中解析属性名（键名）

- 如果不传入第二个参数`delimiter`,也就是分隔符，则使用默认的分隔符，即","

> 代码如下:

```js
const CSVToJSON = (str, delimiter = ",") => {
  const titles = str.slice(0, str.indexOf("\n")).split(delimiter);
  return str
    .slice(str.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
};
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/CSVToJSON.ts" data-language="typescript"></div>

> 调用方式:

```js
CSVToJSON("col1,col2\na,b\nc,d");
// [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
CSVToJSON("col1;col2\na;b\nc;d", ";");
// [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/CSVToJSON.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/CSVToJSON.html"></iframe>
