| 标题                                        | 标签            |
| ------------------------------------------- | --------------- |
| getVerticalOffset(获取元素到文档顶部的距离) | browser(浏览器) |

查找从给定元素到文档顶部的距离。

- 使用 while 循环和 HTMLElement.offsetParent 向上移动给定元素的偏移父级。
- 为每个元素添加 HTMLElement.offsetTop 并返回结果。

```js
const getVerticalOffset = el => {
  let offsetTop = el.offsetTop,
    _el = el;
  while (_el.offsetParent) {
    _el = _el.offsetParent;
    offsetTop += _el.offsetTop;
  }
  return offsetTop;
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-vertical-offset.ts" data-language="typescript"></div>

> 调用方式:

```js
getVerticalOffset('.my-element'); // 120
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-vertical-offset.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/get-vertical-offset.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-vertical-offset.html"></iframe>
