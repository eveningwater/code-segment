| 标题                                     | 标签                                               |
| ---------------------------------------- | -------------------------------------------------- |
| colorize(控制台中以彩色字体打印特殊字符) | node,string,intermediate(节点，字符串，两者之间的) |

将特殊字符添加到文本以在控制台中以彩色打印（与 `console.log()` 结合使用）。

- 使用模板文字和特殊字符将适当的颜色代码添加到字符串输出。
- 对于背景颜色，在字符串末尾添加一个重置背景颜色的特殊字符。

> 代码如下:

```js
const colorize = (...args) => ({
  black: `\x1b[30m${args.join(' ')}`,
  red: `\x1b[31m${args.join(' ')}`,
  green: `\x1b[32m${args.join(' ')}`,
  yellow: `\x1b[33m${args.join(' ')}`,
  blue: `\x1b[34m${args.join(' ')}`,
  magenta: `\x1b[35m${args.join(' ')}`,
  cyan: `\x1b[36m${args.join(' ')}`,
  white: `\x1b[37m${args.join(' ')}`,
  bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
  bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
  bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
  bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
  bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
  bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
  bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
  bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
});
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/colorize.ts" data-language="typescript"></div>

> 调用方式:

```js
console.log(colorize('foo').red); // 'foo' (red letters)
console.log(colorize('foo', 'bar').bgBlue); // 'foo bar' (blue background)
console.log(colorize(colorize('foo').yellow, colorize('foo').green).bgWhite);
// 'foo bar' (first word in yellow letters, second word in green letters, white background for both)
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/colorize.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/colorize.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/colorize.html"></iframe>
