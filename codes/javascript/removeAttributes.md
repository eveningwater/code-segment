| 标题                                 | 标签            |
| ------------------------------------ | --------------- |
| removeAttributes(移除元素的所有属性) | browser(浏览器) |

从 HTML 元素中删除所有属性。

- 使用 Element.attributes 和 Object.values() 获取元素的所有属性。
- 使用 Array.prototype.forEach() 和对象解构来获取每个属性的名称，并使用 Element.removeAttribute() 将其从元素中移除。

```js
const removeAttributes = element => {
  Object.values(element.attributes).forEach(({ name }) => {
    element.removeAttribute(name);
  });
};
```

> 调用方式:

```js
removeAttributes(document.querySelector('p.special'));
// The paragraph will not have the 'special' class anymore
```

> 应用场景
