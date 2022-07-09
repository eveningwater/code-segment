|  标题   | 标签  |
|  ----  | ----  |
| chainAsync (异步链) | function,intermediate(函数，两者之间的) |

异步链函数。

* 循环遍历包含异步事件的函数数组，在每个异步事件完成时调用 next。


> 代码如下:

```js
    const chainAsync = handlers => {
        let cur = 0;
        const last = handlers[handlers.length - 1];
        const next = () => {
            const fn = handlers[cur++];
            return fn === last ? fn() : fn(next);
        }
        next();
    }
```

> 调用方式:

```js
    chainAsync([
        next => { console.log('0 seconds');setTimeout(next, 1000);},
        next => { console.log('1 second');setTimeout(next, 1000);},
        () => { console.log('2 second'); }
    ]);
```

> 应用场景