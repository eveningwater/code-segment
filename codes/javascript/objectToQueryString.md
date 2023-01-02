|  标题   | 标签  |
|  ----  | ----  |
| objectToQueryString(序列化对象) | object(对象) |

从给定对象的键值对生成查询字符串。

* 在 Object.entries() 上使用 Array.prototype.reduce() 从 queryParameters 创建查询字符串。
* 确定符号是 ? 或 & 基于 queryString 的长度。
* 仅当它是字符串时才将 val 连接到 queryString。
* 当 queryParameters 为假时，返回 queryString 或空字符串。

```js
const objectToQueryString = queryParameters => queryParameters && typeof queryParameters === 'object' ? Object.entries(queryParameters).reduce((queryString,[key,val]) => {
    const symbol = queryString.length ? '&' : '?';
    queryString += val ? `${symbol}${key}=${val}` : '';
    return queryString;
},'') : '';
```

> 调用方式:

```js
objectToQueryString({ page: '1', size: '2kg', key: undefined });
```

> 应用场景