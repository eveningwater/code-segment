|  标题   | 标签  |
|  ----  | ----  |
| getBaseURL(获取不带任何参数或片段标识符的当前路径) | string,browser,regexp(字符串，浏览器，正则表达式) |

获取不带任何参数或片段标识符的当前 URL。

* 将 String.prototype.replace() 与适当的正则表达式一起使用以删除“？”之后的所有内容 或“#”（如果找到）。

```js
const getBaseURL = url => url.replace(/[?#].*$/,'');
```

> 调用方式:

```js
getBaseURL('http://url.com/page?name=Adam&surname=Smith');
// 'http://url.com/page'
```


> 应用场景

<iframe src="codes/javascript/html/getBaseURL.html"></iframe>








