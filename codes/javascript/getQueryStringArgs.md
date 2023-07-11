| 标题                                             | 标签                                                  |
| ------------------------------------------------ | ----------------------------------------------------- |
| getQueryStringArgs(获取序列化后的字符串查询参数) | location,for,decodeURIComponent(位置对象，循环，解码) |

获取序列化后的查询字符串的参数。

- 使用 `location.search` 属性获取没有问号的查询字符串参数，并定义结果对象。
- 使用`String.prototype.split`方法将查询字符串变成数组，并使用`Array.prototype.map`方法返回一个以'='分隔的属性名以及属性值组成的数组。
- 使用 for...of 循环遍历该数组，并将属性名和属性值通过[decodeURIComponent]()方法解码后添加到结果对象中。

> 代码如下:

```js
const getQueryStringArgs = () => {
  const qs = location.search.length > 0 ? location.search.substring(1) : '',
    args = {};
  const iterRes = qs.split('&').map(kv => kv.split('='));
  for (const item of iterRes) {
    const [name, value] = [
      decodeURIComponent(item[0]),
      decodeURIComponent(item[1])
    ];
    if (name && name.length) {
      args[name] = value;
    }
  }
  return args;
};
```

> 调用方式:

```js
// 假设查询字符串为?q=javascript&num=10
let args = getQueryStringArgs();
console.log(args['q']); // "javascript"
console.log(args['num']); // "10"
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getQueryStringArgs.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getQueryStringArgs.html"></iframe>
