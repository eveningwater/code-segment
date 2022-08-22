|  标题   | 标签  |
|  ----  | ----  |
| indentString(缩进字符串) | string(字符串) |

缩进提供的字符串中的每一行。

* 使用 String.prototype.replace() 和正则表达式在每行的开头添加缩进计数指定的字符。
* 省略第三个参数 indent 以使用默认缩进字符 ' '。

```js
const indentString = (str,count,indent = ' ') => str.replace(/^/gm,indent.repeat(count));
```

> 调用方式:

```js
indentString('Lorem\nIpsum', 2); // '  Lorem\n  Ipsum'
indentString('Lorem\nIpsum', 2, '_'); // '__Lorem\n__Ipsum'
```

> 应用场景

<iframe src="codes/javascript/html/indentString.html"></iframe>


