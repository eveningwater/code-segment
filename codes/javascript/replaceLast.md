| 标题                              | 标签                              |
| --------------------------------- | --------------------------------- |
| replaceLast(替换最后一个匹配字符) | string,regexp(字符串，正则表达式) |

替换字符串中最后一次出现的模式。

- 使用 typeof 确定 pattern 是字符串还是正则表达式。
- 如果模式是字符串，则将其用作匹配项。
- 否则，使用 RegExp 构造函数创建一个新的正则表达式，使用模式的 RegExp.prototype.source 并向其添加 'g' 标志。 使用 String.prototype.match() 和 Array.prototype.slice() 获取最后一个匹配项（如果有）。
- 使用 String.prototype.lastIndexOf() 查找字符串中匹配项的最后一次出现。
- 如果找到匹配项，则使用 String.prototype.slice() 和模板文字将匹配的子字符串替换为给定的替换项。
- 如果未找到匹配项，则返回原始字符串。

```js
const replaceLast = (str, pattern, replacement) => {
  const match =
    typeof pattern === 'string'
      ? pattern
      : (str.match(new RegExp(pattern.source, 'g')) || []).slice(-1)[0];
  if (!match) {
    return str;
  }
  const last = str.lastIndexOf(match);
  return last !== -1
    ? `${str.slice(0, last)}${replacement}${str.slice(last + match.length)}`
    : str;
};
```

> 调用方式:

```js
replaceLast('abcabdef', 'ab', 'gg'); // 'abcggdef'
replaceLast('abcabdef', /ab/, 'gg'); // 'abcggdef'
replaceLast('abcabdef', 'ad', 'gg'); // 'abcabdef'
replaceLast('abcabdef', /ad/, 'gg'); // 'abcabdef'
```

> 应用场景
