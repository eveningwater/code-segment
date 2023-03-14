| 标题                    | 标签            |
| ----------------------- | --------------- |
| removeElement(移除元素) | browser(浏览器) |

从 DOM 中移除一个元素。

- 使用 Node.parentNode 获取给定元素的父节点。
- 使用 Node.removeChild() 从其父节点中删除给定元素。

```js
const removeElement = el => el.parentNode.removeChild(el);
```

> 调用方式:

```js
removeElement(document.querySelector('#my-element'));
// Removes #my-element from the DOM
```

> 应用场景

<iframe src="codes/javascript/html/removeElement.html"></iframe>
