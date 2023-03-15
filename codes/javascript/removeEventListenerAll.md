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

> 调用方式:

```js
const linkListener = () => console.log('Clicked a link');
document.querySelector('a').addEventListener('click', linkListener);
removeEventListenerAll(document.querySelectorAll('a'), 'click', linkListener);
```

> 应用场景
