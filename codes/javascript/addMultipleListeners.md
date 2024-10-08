| 标题                                       | 标签                                               |
| ------------------------------------------ | -------------------------------------------------- |
| addMultipleListeners(多个事件监听器的添加) | browser,event,intermediate(浏览器，事件，两者之间) |

将具有相同处理程序的多个事件侦听器添加到元素中。

- 使用`Array.prototype.forEach()`和`EventTarget.addEventListener()`将具有指定回调函数的多个事件侦听器添加到元素。

> 代码如下:

```js
const addMultipleListeners = (el, eventType, listener, options) =>
  eventType.forEach(type =>
    el?.addEventListener(type, listener, options)
  );
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/addMultipleListeners.ts" data-language="typescript"></div>

> 调用方式:

```js
addMultipleListeners(
  document.querySelector('.my-element'),
  ['click', 'mousedown'],
  () => {
    console.log('hello!');
  }
);
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/addMultipleListeners.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/addMultipleListeners.html"></iframe>
