| 标题                      | 标签            |
| ------------------------- | --------------- |
| removeClass(移除元素类名) | browser(浏览器) |

从 HTML 元素中删除一个类。

- 使用 Element.classList 和 DOMTokenList.remove() 从元素中删除指定的类。

```js
const removeClass = (el, className) => el.classList.remove(className);
```

> 调用方式:

```js
removeClass(document.querySelector('p.special'), 'special');
// The paragraph will not have the 'special' class anymore
```

> 应用场景
