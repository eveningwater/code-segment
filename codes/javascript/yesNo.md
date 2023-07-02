| 标题                      | 标签                              |
| ------------------------- | --------------------------------- |
| yesNo(检查 yes/no 字符串) | string,regexp(字符串，正则表达式) |

如果字符串为“y”/“yes”，则返回 true；如果字符串为“n”/“no”，则返回 false。

- 使用 RegExp.prototype.test() 检查字符串的计算结果是否为 'y'/'yes' 或 'n'/'no'。
- 省略第二个参数 def 将默认答案设置为“否”。

```js
const yesNo = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
```

> 调用方式:

```js
yesNo('Y'); // true
yesNo('yes'); // true
yesNo('No'); // false
yesNo('Foo', true); // true
```

> 应用场景
