| 标题                    | 标签                            |
| ----------------------- | ------------------------------- |
| renderElement(渲染元素) | browser,recursion(浏览器，递归) |

在指定的 DOM 元素中呈现给定的 DOM 树。

- 将第一个参数解构为类型和道具。 使用 type 确定给定元素是否为文本元素。
- 根据元素的类型，使用 Document.createTextNode() 或 Document.createElement() 创建 DOM 元素。
- 使用 Object.keys() 向 DOM 元素添加属性并根据需要设置事件侦听器。
- 使用递归渲染 props.children，如果有的话。
- 最后，使用 Node.appendChild() 将 DOM 元素追加到指定的容器中。

```js
const renderElement = (vNodeObj, container = document.body) => {
  let _container =
    typeof container === 'string'
      ? document.querySelector(container)
      : container;
  if (!_container) {
    _container = document.body;
  }
  const { type, children, props = {} } = vNodeObj;
  const isTextElement = !type || type === 'text';
  const element = isTextElement
    ? document.createTextNode('')
    : document.createElement(type);
  const isListener = p => p.startsWith('on');
  const isAttribute = p => p !== 'children' && !isListener(p);
  Object.keys(props).forEach(p => {
    if (isAttribute(p)) {
      element[p] = props[p];
    }
    if (!isTextElement && isListener(p)) {
      element.addEventListener(p.toLowerCase().slice(2), props[p]);
    }
  });
  if (!isTextElement && Array.isArray(children) && children.length) {
    children.forEach(child => renderElement(child, element));
  }
  _container.appendChild(element);
};
```

> 调用方式:

```js
const myElement = {
  type: 'div',
  props: {
    className: 'container'
  },
  children: [
    {
      type: 'button',
      props: {
        className: 'btn',
        type: 'button',
        onClick: () => alert('Clicked!')
      },
      children: [
        {
          props: { nodeValue: 'click me!' }
        }
      ]
    }
  ]
};
renderElement(myElement);
```

> 应用场景

<iframe src="codes/javascript/html/renderElement.html"></iframe>
