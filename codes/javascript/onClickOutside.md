|  标题   | 标签  |
|  ----  | ----  |
| onClickOutside(点击区域外的事件) | browser,event(浏览器，事件) |



```js
const onClickOutside = (element,callback) => {
    document.addEventListener('click',e => {
        if(!element.contains(e.target)){
            callback();
        }
    })
}
```

> 调用方式:

```js
onClickOutside(document.querySelector('#my-element'), () => console.log('Hello'));
// Will log 'Hello' whenever the user clicks outside of #my-element
```

> 应用场景

<iframe src="codes/javascript/html/onClickOutside.html"></iframe>



