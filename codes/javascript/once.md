|  标题   | 标签  |
|  ----  | ----  |
| once(调用一次的函数) | function(函数) |

确保一个函数只被调用一次。

* 利用闭包，使用标志，调用，并在第一次调用该函数后将其设置为 true，以防止再次调用它。
* 为了允许函数更改其 this 上下文（例如在事件侦听器中），必须使用 function 关键字，并且提供的函数必须应用上下文。
* 允许使用 rest/spread (...) 运算符为函数提供任意数量的参数。

```js
const once = fn => {
    let called = false;
    return function(...args){
        if(called){
            return;
        }
        called = true;
        return fn.apply(this,args);
    }
}
```

> 调用方式:

```js
const startApp = function(event) {
  console.log(this, event); // document.body, MouseEvent
};
document.body.addEventListener('click', once(startApp));
// only runs `startApp` once upon click
```

> 应用场景

<iframe src="codes/javascript/html/once.html"></iframe>

