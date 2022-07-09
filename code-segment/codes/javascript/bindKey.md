|  标题   | 标签  |
|  ----  | ----  |
| bindKey(函数的绑定) | function,object,advanced(函数，对象，高级的) |

创建一个函数，该函数在对象的给定键处调用该方法，可选择将任何其他提供的参数添加到参数中。

* 返回一个使用 `Function.prototype.apply()` 将 `context[fn]` 绑定到 `context` 的函数。
* 使用展开运算符 `(...)` 将任何其他提供的参数添加到参数中。

> 代码如下:

```js
    const bindKey = (context,handler,...bindArgs) => (...args) => context[handler].apply(context,[...bindArgs,...args]);
```

> 调用方式:

```js
    const freddy = {
        user: 'fred',
        greet: function(greeting, punctuation) {
          return greeting + ' ' + this.user + punctuation;
        }
    };
    const freddyBound = bindKey(freddy, 'greet');
    console.log(freddyBound('hi', '!')); // 'hi fred!'
```

> 应用场景