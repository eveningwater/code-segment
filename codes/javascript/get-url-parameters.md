| 标题                           | 标签                                              |
| ------------------------------ | ------------------------------------------------- |
| getURLParameters(获取路径参数) | browser,string,regexp(浏览器，字符串，正则表达式) |

创建一个包含当前 URL 参数的对象。

- 使用 String.prototype.match() 和适当的正则表达式来获取所有键值对。
- 使用 Array.prototype.reduce() 将它们映射并组合成一个对象。
- 将 location.search 作为参数传递给当前 url。

```js
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {}
  );
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-url-parameters.ts" data-language="typescript"></div>

> 调用方式:

```js
getURLParameters('google.com'); // {}
getURLParameters('http://url.com/page?name=Adam&surname=Smith');
// {name: 'Adam', surname: 'Smith'}
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-url-parameters.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/get-url-parameters.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-url-parameters.html"></iframe>
