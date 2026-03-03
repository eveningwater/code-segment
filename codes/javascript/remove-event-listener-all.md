| 标题                                       | 标签                            |
| ------------------------------------------ | ------------------------------- |
| removeEventListenerAll(移除元素的所有事件) | browser,event(浏览器，事件对象) |

从所有提供的目标中分离事件侦听器。

- 使用 Array.prototype.forEach() 和 EventTarget.removeEventListener() 从所有目标中分离为给定事件类型提供的侦听器。

```js
const removeEventListenerAll = (
  targets,
  type,
  listener,
  options,
  useCapture
) => {
  targets.forEach(target => {
    target.removeEventListener(type, listener, options, useCapture);
  });
};
```

<div class="code-editor" data-url="codes/javascript/ts/remove-event-listener-all.ts" data-language="typescript"></div>

> 调用方式:

```js
const linkListener = () => console.log('Clicked a link');
document.querySelector('a').addEventListener('click', linkListener);
removeEventListenerAll(document.querySelectorAll('a'), 'click', linkListener);
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/remove-event-listener-all.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/remove-event-listener-all.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/remove-event-listener-all.html"></iframe>