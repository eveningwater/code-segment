| 标题                                                      | 标签            |
| --------------------------------------------------------- | --------------- |
| findClosestAnchor(找到元素最近的锚点元素（即超链接元素）) | browser(浏览器) |

查找最接近给定节点的锚节点（如果有）。

- 使用 `for` 循环和 `Node.parentNode` 从给定节点向上遍历节点树。
- 使用 `Node.nodeName` 和 `String.prototype.toLowerCase()` 检查任何给定节点是否是锚点 ('a')。
- 如果没有找到匹配的节点，则返回 `null`。

> 代码如下:

```js
const findClosestAnchor = node => {
  for (let n = node; n.parentNode; n = n.parentNode) {
    if (n.nodeName.toLowerCase() === 'a') {
      return n;
    }
  }
  return null;
};
```

> 调用方式:

```js
findClosestAnchor(document.querySelector('a > span')); // a
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/findClosestAnchor.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/findClosestAnchor.html"></iframe>
