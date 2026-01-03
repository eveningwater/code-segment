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

<div class="code-editor" data-url="codes/javascript/ts/off.ts" data-language="typescript"></div>

> 调用方式:

```js
const callback = () => console.log('!');
document.body.addEventListener('click', callback);
off(document.body, 'click', callback); // no longer logs '!' upon clicking on the page
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/off.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/off.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/off.html"></iframe>



