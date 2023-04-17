| 标题                                 | 标签           |
| ------------------------------------ | -------------- |
| sortCharactersInString(对字符串排序) | string(字符串) |

按字母顺序对字符串中的字符进行排序。

- 使用扩展运算符 (...)、Array.prototype.sort() 和 String.prototype.localeCompare() 对 str 中的字符进行排序。
- 使用 Array.prototype.join() 重新组合。

```js
const sortCharactersInString = str =>
  [...str].sort((a, b) => a.localeCompare(b)).join('');
```

> 调用方式:

```js
sortCharactersInString('cabbage'); // 'aabbceg'
```

> 应用场景
