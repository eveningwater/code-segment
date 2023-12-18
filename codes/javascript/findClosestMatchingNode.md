| 标题                                      | 标签            |
| ----------------------------------------- | --------------- |
| findClosestAnchor(找到元素最近的匹配元素) | browser(浏览器) |

从给定节点开始查找最近的匹配节点。

- 使用 `for` 循环和 `Node.parentNode` 从给定节点向上遍历节点树。
- 使用 `Element.matches()` 检查任何给定的元素节点是否与提供的选择器匹配。
- 如果没有找到匹配的节点，则返回 `null`。

> 代码如下:

```js
const findClosestMatchingNode = (node, selector) => {
  for (let n = node; n.parentNode; n = n.parentNode) {
    if (n.matches && n.matches(selector)) {
      return n;
    }
  }
  return null;
};
```

> 调用方式:

```js
findClosestMatchingNode(document.querySelector('span'), 'body'); // body
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/findClosestMatchingNode.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/findClosestMatchingNode.html"></iframe>
