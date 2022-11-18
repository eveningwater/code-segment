|  标题   | 标签  |
|  ----  | ----  |
| listenOnce(监听一次事件) | browser,event(浏览器，事件) |

将事件侦听器添加到仅在第一次触发事件时运行回调的元素。

* 使用 EventTarget.addEventListener() 将事件侦听器添加到元素。
* 使用 { once: true } 作为选项，只运行一次给定的回调。

```js
const listenOnce = (el,type,handler) => el.addEventListener(type,handler,{ once:true });
```

> 调用方式:

```js
listenOnce(
  document.getElementById('my-id'),
  'click',
  () => console.log('Hello world')
); // 'Hello world' will only be logged on the first click
```

> 应用场景

<iframe src="codes/javascript/html/listenOnce.html"></iframe>

