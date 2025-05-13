| 标题                                    | 标签                        |
| --------------------------------------- | --------------------------- |
| addEventListenerAll(给所有元素添加事件) | browser,event(浏览器，事件) |

将事件侦听器附加到所有提供的目标。

- 使用 `Array.prototype.forEach()` 和 `EventTarget.addEventListener()` 将给定事件类型的提供侦听器附加到所有目标。

> 代码如下:

```js
const addEventListenerAll = (targets, type, listener, options) =>
  Array.from(targets).forEach((target, index) =>
    target.addEventListener(type, (e) => listener(e, index), options)
  );
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/add-event-listener-all.ts" data-language="typescript"></div>

> 调用方式:

```js
addEventListenerAll(document.querySelectorAll("a"), "click", () =>
  console.log("Clicked a link")
);
// Logs 'Clicked a link' whenever any anchor element is clicked
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/add-event-listener-all.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/addEventListenerAll.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/addEventListenerAll.html"></iframe>
