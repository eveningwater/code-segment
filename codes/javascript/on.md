|  标题   | 标签  |
|  ----  | ----  |
| on(添加事件监听器) | browser,event(浏览器，事件) |

将事件侦听器添加到能够使用事件委托的元素。

* 使用 EventTarget.addEventListener() 向元素添加事件侦听器。
* 如果向选项对象提供了目标属性，请确保事件目标与指定的目标相匹配，然后通过提供正确的 this 上下文来调用回调。
* 如果不传入opts参数则默认为非委托行为和事件冒泡。
* 返回对自定义委托函数的引用，以便可以与 [off](https://eveningwater.github.io/code-segment/#/codes/javascript/off) 一起使用。

```js
const on = (el,type,handler,opts = {}) => {
    const delegatorFn = e => e.target.matches(opts.target) && handler.call(e.target,e);
    if(el && type && typeof handler === 'function'){
        el.addEventListener(type,opts.target ? delegatorFn : handler,opts.options || false);
        if(opts.target){
            return delegatorFn;
        }
    }
}
```

<div class="code-editor" data-url="codes/javascript/ts/on.ts" data-language="typescript"></div>

> 调用方式:

```js
const fn = () => console.log('!');
on(document.body, 'click', fn); // logs '!' upon clicking the body
on(document.body, 'click', fn, { target: 'p' });
// logs '!' upon clicking a `p` element child of the body
on(document.body, 'click', fn, { options: true });
// use capturing instead of bubbling
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/on.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/on.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/on.html"></iframe>



