| 标题                                     | 标签                                              |
| ---------------------------------------- | ------------------------------------------------- |
| CSVToArray(将逗号分割的值字符串转成数组) | string,array,intermediate(字符串，数组，两者之间) |

将一个逗号分割的值字符串转成一个 2D 数组。

- 如果将`omitFirstRow`设置为`true`的话，则使用的是`Array.prototype.slice()`和`Array.prototype.indexOf('\n')`方法来移除掉字符串的第一行
- 使用`String.prototype.split('\n')`方法来为每一子数组创建一个字符串，然后使用`String.prototype.split(delimiter)`方法来将这些字符串值又分成子数组项
- 如果不传入第二个参数`delimiter`，则使用默认的分割符号","
- 如果不传入第三个参数`omitFirstRow`,则会保留字符串的第一行

> 代码如下:

```js
const CSVToArray = (str, delimiter = ',', omitFirstRow = false) => {
  return str
    .slice(omitFirstRow ? str.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));
};
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/csv-to-array.ts" data-language="typescript"></div>

> 调用方式:

```js
CSVToArray('a,b\nc,d'); // [['a', 'b'], ['c', 'd']];
CSVToArray('a;b\nc;d', ';'); // [['a', 'b'], ['c', 'd']];
CSVToArray('col1,col2\na,b\nc,d', ',', true); // [['a', 'b'], ['c', 'd']];
```

> 应用场景

以下是基于上述代码实现的一个CSV 文件解析器的<a href="codes/javascript/html/csv-to-array.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/csv-to-array.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/csv-to-array.html"></iframe>
