| 标题                                           | 标签           |
| ---------------------------------------------- | -------------- |
| truncateStringAtWhitespace(截断字符串保留空格) | string(字符串) |

将字符串截断至指定长度，尽可能保留空格。

- 确定 String.prototype.length 是否大于或等于 lim。 如果没有，请按原样返回。
- 使用 String.prototype.slice() 和 String.prototype.lastIndexOf() 找到所需限制下最后一个空间的索引。
- 使用 String.prototype.slice() 根据 lastSpace 适当地截断 str，如果可能的话尊重空格并在末尾附加结尾。
- 省略第三个参数 ending，以使用默认结尾 '...'。

```js
const truncateStringAtWhitespace = (str, lim, ending = '...') => {
  if (str.length <= lim) return str;
  const lastSpace = str.slice(0, lim - ending.length + 1).lastIndexOf(' ');
  return str.slice(0, lastSpace > 0 ? lastSpace : lim - ending.length) + ending;
};
```

> 调用方式:

```js
truncateStringAtWhitespace('short', 10); // 'short'
truncateStringAtWhitespace('not so short', 10); // 'not so...'
truncateStringAtWhitespace('trying a thing', 10); // 'trying...'
truncateStringAtWhitespace('javascripting', 10); // 'javascr...'
```

> 应用场景
