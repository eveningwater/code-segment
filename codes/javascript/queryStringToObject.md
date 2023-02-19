| 标题                              | 标签         |
| --------------------------------- | ------------ |
| queryStringToObject(序列化字符串) | object(对象) |

从给定的查询字符串或 URL 生成一个对象。

- 使用 String.prototype.split() 从给定的 url 获取参数。
- 使用 URLSearchParams 构造函数创建适当的对象并使用扩展运算符 (...) 将其转换为键值对数组。
- 使用 Array.prototype.reduce() 将键值对数组转换为对象。

```js
const queryStringToObject = url =>
  [...new URLSearchParams(url.split('?')[1])].reduce(
    (a, [k, v]) => ((a[k] = v), a),
    {}
  );
```

> 调用方式:

```js
queryStringToObject('https://google.com?page=1&count=10');
// {page: '1', count: '10'}
```

> 应用场景
