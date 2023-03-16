| 标题                            | 标签                              |
| ------------------------------- | --------------------------------- |
| removeNonASCII(移除 ASCII 字符) | string,regexp(字符串，正则表达式) |

删除不可打印的 ASCII 字符。

- 使用带有正则表达式的 String.prototype.replace() 来删除不可打印的 ASCII 字符。

```js
const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
```

> 调用方式:

```js
removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'
```

> 应用场景
