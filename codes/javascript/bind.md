|  标题   | 标签  |
|  ----  | ----  |
| bind(函数的绑定) | function,object,advanced(函数，对象，高级的) |

创建一个函数，该函数使用给定的上下文调用`fn`，可选地将任何其他提供的参数添加到参数中。

* 返回一个使用 `Function.prototype.apply()` 将给定上下文应用于 `fn` 的函数。
* 使用展开运算符 `(...)` 将任何其他提供的参数添加到参数中。

> 代码如下:

```js
    const bind = (handler,context,...bindArgs) => (...args) => handler.apply(context,[...bindArgs,...args]);
```

> 调用方式:

```js
    function greet(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    }
    const freddy = { user: 'fred' };
    const freddyBound = bind(greet, freddy);
    console.log(freddyBound('hi', '!')); // 'hi fred!'
```

> 应用场景