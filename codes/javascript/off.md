|  标题   | 标签  |
|  ----  | ----  |
| off(移除事件监听器) | browser,event(浏览器，事件) |

从元素中移除事件侦听器。

* 使用 EventTarget.removeEventListener() 从元素中移除事件侦听器。
* 省略第四个参数选择使用 false 或根据添加事件侦听器时使用的选项指定它。

```js
const off = (el,type,callback,useCapture = false) => {
    if(el && typeof type === 'string' && typeof callback === 'function'){
        el.removeEventListener(type,callback,useCapture);
    }
}
```

> 调用方式:

```js
const callback = () => console.log('!');
document.body.addEventListener('click', fn);
off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page
```

> 应用场景

<iframe src="codes/javascript/html/off.html"></iframe>



