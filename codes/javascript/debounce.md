|  标题   | 标签  |
|  ----  | ----  |
| debounce(防抖函数) | function(函数) |

创建一个防抖动函数，该函数延迟调用提供的函数，直到自上次调用以来至少经过 ms 毫秒

* 每次调用防抖动函数时，使用 `clearTimeout()` 清除当前挂起的延迟。使用 `setTimeout()` 创建一个新的延迟，延迟调用函数直到至少 ms 毫秒过去。
* 使用 `Function.prototype.apply()` 将 `this` 上下文应用于函数并提供必要的参数。
* 省略第二个参数`ms`，将超时设置为默认值 `0ms`。

> 代码如下:

```js
const debounce = (handler,ms) => {
    let time = null;
    return function(...args){
        clearTimeout(time);
        time = setTimeout(() => handler.apply(this,args),ms);
    }
}
```

> 调用方式:

```js
window.addEventListener('resize',debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
}, 250)); // Will log the window dimensions at most every 250ms
```

> 应用场景