| 标题                 | 标签                               |
| -------------------- | ---------------------------------- |
| wordWrap(字符串换行) | string，regexp(字符串，正则表达式) |

使用字符串分隔符将字符串换行为给定数量的字符。

- 使用 String.prototype.replace() 和正则表达式在最大字符数的最近空白处插入给定的换行符。
- 省略第三个参数 br，以使用默认值 '\n'。

```js
const wordWrap = (str, max, br = '\n') =>
  str.replace(
    new RegExp(`(?![^\\n]{1,${max}}$)([^\\n]{1,${max}})\\s`, 'g'),
    '$1' + br
  );
```

> 调用方式:

```js
wordWrap(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus.',
  32
);
// 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nFusce tempus.'
wordWrap(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus.',
  32,
  '\r\n'
);
// 'Lorem ipsum dolor sit amet,\r\nconsectetur adipiscing elit.\r\nFusce tempus.'
```

> 应用场景
