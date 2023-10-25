| 标题                    | 标签                             |
| ----------------------- | -------------------------------- |
| createElement(创建元素) | browser,beginner(浏览器，初学者) |

从字符串创建一个元素（不将其附加到文档中）。 如果给定的字符串包含多个元素，则只返回第一个。

- 使用 `Document.createElement()` 创建一个新元素。
- 使用 `Element.innerHTML` 将其内部 `HTML` 设置为作为参数提供的字符串。
- 使用 `Element.firstElementChild` 返回字符串的元素版本。

> 代码如下:

```js
const createElement = str => {
  const element = document.createElement('div');
  element.innerHTML = str;
  return element.firstElementChild;
};
```

> 调用方式:

```js
const el = createElement(
  `<div class="container">
      <p>Hello!</p>
    </div>`
);
console.log(el.className); // 'container'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/createElement.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/createElement.html"></iframe>
