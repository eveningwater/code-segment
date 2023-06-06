| 标题                            | 标签            |
| ------------------------------- | --------------- |
| toggleClass(移除或添加元素类名) | browser(浏览器) |

切换 HTML 元素的类。

- 使用 Element.classList 和 DOMTokenList.toggle() 来切换元素的指定类。

```js
const toggleClass = (el, className) => el.classList.toggle(className);
```

> 调用方式:

```js
toggleClass(document.querySelector('p.special'), 'special');
// The paragraph will not have the 'special' class anymore
```

> 应用场景
