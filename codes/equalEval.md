|  标题   | 标签  |
|  ----  | ----  |
| equalEval(实现类似js中eval方法) | eval,Function(输出，函数) |

将给定字符串转化为可运行的`javascript`代码。

* 使用`new Function()`构造函数以及返回该字符串即可实现

> 代码如下:

```js
    const equalEval = (value) => new Function('return ' + str)();
```

> 调用方式:

```js
    equalEval('let a = 1;')
    // let a = 1;
```

> 应用场景