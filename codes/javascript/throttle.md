| 标题                   | 标签           |
| ---------------------- | -------------- |
| throttle(截取元素数组) | function(函数) |

创建一个节流函数，每等待毫秒最多只调用一次提供的函数

- 使用 setTimeout() 和 clearTimeout() 来限制给定的方法 fn。
- 使用 Function.prototype.apply() 将 this 上下文应用于函数并提供必要的参数。
- 使用 Date.now() 来跟踪上次调用节流函数的时间。
- 使用变量 inThrottle 来防止 fn 的第一次执行和下一个循环之间的竞争条件。
- 省略第二个参数 wait，将超时设置为默认值 0 毫秒。

```js
const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function () {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
```

> 调用方式:

```js
window.addEventListener(
  'resize',
  throttle(function (evt) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
```

> 应用场景
