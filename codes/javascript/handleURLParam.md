| 标题                          | 标签                  |
| ----------------------------- | --------------------- |
| handleURLParam(解析 URL 参数) | url,param(链接，参数) |

解析 URL 参数。

- 通过截取到字符串后面的参数，然后通过正则去进行匹配，分别匹配参数名和参数值
- 遍历属性数组，进行赋值即可

> 代码如下：

```js
var getURLParam = function (url) {
  let res = {};
  if (url.lastIndexOf('?') === -1) return res;
  let param = decodeURIComponent(url.slice(url.lastIndexOf('?') + 1));
  let keys = param.match(/(\w+\=)|\=/g);
  keys && (keys = keys.map(k => k.replace(/\=/g, '')));
  let values = param.match(/(\=(\w+|\s*)\&)|(\=(\w+|\s*))/g);
  values && (values = values.map(v => v.replace(/\&|\=/g, '')));
  keys && keys.forEach((k, i) => (res[k] = values[i]));
  return res;
};
```

> 调用方式：

```js
let param = getURLParam('https://www.test.com/?_aaa=111&_bbb=222');
console.log(param); //{ _aaa:111,_bbb:222 }
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getURLParam.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getURLParam.html"></iframe>
