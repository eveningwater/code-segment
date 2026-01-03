|  标题   | 标签  |
|  ----  | ----  |
| onClickOutside(点击区域外的事件) | browser,event(浏览器，事件) |

添加点击元素区域之外的事件。

* 使用Document.addEventListener添加事件。
* 使用element.contains方法判断是否是该元素。

```js
const onClickOutside = (element,callback) => {
    document.addEventListener('click',e => {
        if(!element.contains(e.target)){
            callback();
        }
    })
}
```

<div class="code-editor" data-url="codes/javascript/ts/on-click-outside.ts" data-language="typescript"></div>

> 调用方式:

```js
onClickOutside(document.querySelector('#my-element'), () => console.log('Hello'));
// Will log 'Hello' whenever the user clicks outside of #my-element
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/on-click-outside.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/on-click-outside.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/on-click-outside.html"></iframe>



