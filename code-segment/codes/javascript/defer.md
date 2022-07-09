|  标题   | 标签  |
|  ----  | ----  |
| defer(延迟调用函数) | function(函数) |

延迟调用函数，直到当前调用堆栈被清除。

* 使用 `setTimeout()` 和 `1` 毫秒的超时将新事件添加到事件队列并允许渲染引擎完成其工作。
* 使用扩展 (`...`) 运算符为函数提供任意数量的参数。

> 代码如下:

```js
const defer = (handler,...args) => setTimeout(handler,1,...args);
```

> 调用方式:

```js
// Example A:
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

// Example B:
document.querySelector('#someElement').innerHTML = 'Hello';
longRunningFunction();
// Browser will not update the HTML until this has finished
defer(longRunningFunction);
// Browser will update the HTML then run the function
```

> 应用场景