| 标题                           | 标签                           |
| ------------------------------ | ------------------------------ |
| isDom(判断是否是一个 dom 元素) | document,object(文档元素,对象) |

判断是否是一个 dom 元素。

- 如果 HTMLElement 是一个对象，则判断传入的参数 el 是否是 HTMLElement 的属性(使用 instanceof 检测)。
- 否则判断是否存在 el.nodeType === 1 并且 el.nodeName 是一个字符串值。
- 同样 el 也可以是 HTMLCollection 或者 NodeList 的属性。

> 代码如下:

```js
const isDom = el => {
  if (typeof HTMLElement === 'object' && !!HTMLElement) {
    return (
      el instanceof HTMLElement ||
      el instanceof HTMLCollection ||
      el instanceof NodeList
    );
  } else {
    return (
      typeof el === 'object' &&
      !!el &&
      el.nodeType === 1 &&
      typeof el.nodeName === 'string'
    );
  }
};
```

> 调用方式:

```js
isDom(document.querySelector('.test')); // true
```

> 应用场景

isDom.html 如下:

<div class="code-editor" data-url="codes/javascript/html/isDom.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isDom.html"></iframe>
