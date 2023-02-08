| 标题             | 标签            |
| ---------------- | --------------- |
| prefix(添加前缀) | browser(浏览器) |

根据当前浏览器为 CSS 属性添加前缀。

- 在前缀字符串数组上使用 Array.prototype.findIndex() 来测试 Document.body 是否在其 CSSStyleDeclaration 对象中定义了其中之一，否则返回 null。
- 使用 String.prototype.charAt() 和 String.prototype.toUpperCase() 将属性大写，这将附加到供应商前缀字符串。

```js
const prefix = prop => {
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  const prefixes = ['', 'webkit', 'moz', 'ms', 'o'];
  const i = prefixes.findIndex(
    prefix =>
      typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !==
      'undefined'
  );
  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;
};
```

> 调用方式:

```js
prefix('appearance');
// 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'
```

> 应用场景

<iframe src="codes/javascript/html/prefix.html"></iframe>
