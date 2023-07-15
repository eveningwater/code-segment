| 标题                           | 标签                         |
| ------------------------------ | ---------------------------- |
| outputAttributes(输出所有属性) | attribute,object(属性，对象) |

输出所有属性。

- 新建一个对象，用来存储结果。
- 遍历 dom 元素的 attributes 属性，获取 nodeName 和 nodeValue 分别作为对象的属性名和属性值，并返回这个对象。

> 代码如下:

```js
const outputAttributes = element => {
  const res = {};
  for (let i = 0, len = element.attributes.length; i < len; i++) {
    const attribute = element.attributes[i];
    res[attribute.nodeName] = attribute.nodeValue;
  }

  return res;
};
```

> 调用方式:

```js
// 假设有<div class="test"></div>元素
outputAttributes(document.querySelector('.test')); // { class:'test' }
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/outputAttributes.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/outputAttributes.html"></iframe>
