|  标题   | 标签  |
|  ----  | ----  |
| delay(延迟函数) | function(函数) |

在 ms 毫秒后调用提供的函数。

* 使用 `setTimeout()` 来延迟 `fn` 的执行。
* 使用扩展 (`...`) 运算符为函数提供任意数量的参数。

> 代码如下:

```js
const delay = (handler,ms,...args) => setTimeout(handler,ms,...args);
```

> 调用方式:

```js
delay(
  function(text) {
    console.log(text);
  },
  1000,
  'later'
); // Logs 'later' after one second.
```

> 应用场景