| 标题                                                                       | 标签                            |
| -------------------------------------------------------------------------- | ------------------------------- |
| firstStringBetween(匹配字符串之间的子字符串（提供开始匹配符和结束匹配符）) | string,beginner(字符串，初学者) |

返回参数 $start 和 $end 之间的第一个字符串。

- 使用 indexOf 方法分别匹配开始和结束字符的索引值，如果都没有找到索引值，则直接返回空字符串。
- 根据开始和结束索引值来调用 String.slice 方法截取字符串，并调用 trim 方法去除两端空白。

> 代码如下:

```js
const firstStringBetween = (str, start, end) => {
  const startIdx = str.indexOf(start);
  const endIdx = str.indexOf(end, startIdx + 1);

  if (startIdx === -1 || endIdx === -1 || startIdx >= endIdx) {
    return "";
  }

  return str.slice(startIdx + 1, endIdx).trim();
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/firstStringBetween.ts" data-language="typescript"></div>

> 调用方式:

```js
firstStringBetween("This is a [custom] string", "[", "]"); // custom
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/firstStringBetween.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/firstStringBetween.html"></iframe>
