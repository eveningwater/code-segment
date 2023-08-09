| 标题                                          | 标签            |
| --------------------------------------------- | --------------- |
| getHorizontalOffset(获取元素到文档左边的距离) | browser(浏览器) |

查找从给定元素到文档最左边的距离。

- 使用 while 循环和 HTMLElement.offsetParent 向上移动给定元素的偏移父级。
- 为每个元素添加 HTMLElement.offsetLeft 并返回结果。

```js
const getHorizontalOffset = el => {
  let offsetLeft = el.offsetLeft,
    _el = el;
  while (_el.offsetParent) {
    _el = _el.offsetParent;
    offsetLeft += _el.offsetLeft;
  }
  return offsetLeft;
};
```

> 调用方式:

```js
getHorizontalOffset('.my-element'); // 120
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getHorizontalOffset.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getHorizontalOffset.html"></iframe>
