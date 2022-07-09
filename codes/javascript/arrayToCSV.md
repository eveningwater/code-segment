|  标题   | 标签  |
|  ----  | ----  |
| arrayToCSV(二维数组转成逗号分割字符串) | array,string,intermediate(数组，字符串，两者之间的) |

将一个二维数组转换为逗号分隔值（`CSV`）字符串。

* 使用`Array.prototype.map()`和`Array.prototype.join(delimiter)`将一个一维数组（行）组合为字符串。
* 使用`Array.prototype.join('\n')`将所有行合并为`CSV`字符串，并用换行符分隔每一行。
* 如果不传入第三个参数`delimiter`,则使用默认的`delimiter`即','。

> 代码如下:

```js
    const arrayToCSV = (arr, delimiter = ',') => arr.map(i => i.map(v => (isNaN(v) ? `"${ v.replace(/"/g,'""') }"` : v)).join(delimiter)).join('\n');
```

> 调用方式:

```js
    arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
    arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
    arrayToCSV([['a', '"b" great'], ['c', 3.1415]]);// '"a","""b"" great"\n"c",3.1415'
```

> 应用场景