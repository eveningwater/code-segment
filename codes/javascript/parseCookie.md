|  标题   | 标签  |
|  ----  | ----  |
| parseCookie(解析cookie) | browser,string(浏览器，字符串) |

解析 HTTP Cookie 标头字符串，返回所有 cookie 名称-值对的对象。

* 使用 String.prototype.split() 将键值对彼此分开。
* 使用 Array.prototype.map() 和 String.prototype.split() 将每对中的键与值分开。
* 使用 Array.prototype.reduce() 和 decodeURIComponent() 创建一个包含所有键值对的对象。

```js
const parseCookie = str => str.split(";").map(v => v.split("=")).reduce((acc,[key,value]) => {
    acc[decodeURIComponent(key).trim()] = decodeURIComponent(value).trim();
    return acc;
},{});
```

> 调用方式:

```js
parseCookie('foo=bar; equation=E%3Dmc%5E2');
// { foo: 'bar', equation: 'E=mc^2' }
```

> 应用场景