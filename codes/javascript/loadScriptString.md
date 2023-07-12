| 标题                           | 标签                                                       |
| ------------------------------ | ---------------------------------------------------------- |
| loadScriptString(动态插入脚本) | document,navigator,plugins(浏览器窗口对象，导航代理，插件) |

动态插入脚本。

- 使用[Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)创建一个 script 元素,并设置 type 属性。
- 使用[Document.createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)创建脚本文本内容。
- 使用 try...catch 包裹设置 script 的内容，如果通过 appendChild 方法添加脚本代码出错，则直接设置 script 元素的 text 属性为脚本内容。
- 将 script 元素添加到 document.body 元素中。

> 代码如下:

```js
const loadScriptString = node => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  try {
    script.appendChild(document.createTextNode(code));
  } catch (ex) {
    script.text = code;
  }
  document.body.appendChild(script);
};
```

> 调用方式:

```js
loadScriptString("function sayHi(){alert('hi');}");
sayHi(); // 弹出弹出框提示hi
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/loadScriptString.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/loadScriptString.html"></iframe>
