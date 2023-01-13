|  标题   | 标签  |
|  ----  | ----  |
| onScrollStop(滚动停止) | browser,event(浏览器，事件) |

每当用户停止滚动时运行回调。

* 使用 EventTarget.addEventListener() 来监听 'scroll' 事件。
* 使用 setTimeout() 等待 n 毫秒直到调用给定的回调。
* 如果在 n 毫秒内触发了新的“滚动”事件，请使用 clearTimeout() 清除超时。
* 如果不传 n 参数，则n默认是 150 毫秒。

```js
const onScrollStop = (callback,n = 150) => {
    let timer,isScrolling = false;
    window.addEventListener('scroll',e => {
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            isScrolling = true;
            callback?.(e,isScrolling);
        },n);
    },false)
}
```

> 调用方式:

```js
onScrollStop(() => {
  console.log('The user has stopped scrolling');
});
```

> 应用场景

<iframe src="codes/javascript/html/onScrollStop.html"></iframe>

