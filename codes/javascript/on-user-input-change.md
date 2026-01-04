|  标题   | 标签  |
|  ----  | ----  |
| onUserInputChange(用户输入更改) | browser,event(浏览器，事件对象) |

每当用户输入类型发生变化（鼠标或触摸）时运行回调。

* 使用两个事件侦听器。
* 假设最初是鼠标输入，并将“touchstart”事件侦听器绑定到文档。
* 在“touchstart”上，使用 performance.now() 添加一个“mousemove”事件侦听器以侦听在 20 毫秒内触发的两个连续“mousemove”事件。
* 在任何一种情况下，以输入类型作为参数运行回调。

```js
const onUserInputChange = callback => {
    let type = 'mouse',lastTime = 0;
    const mouseMoveHandler = () => {
        const now = performance.now();
        if(now - lastTime < 20){
            type = 'mouse';
            callback(type);
            document.removeEventListener('mousemove',mouseMoveHandler);
        }
        lastTime = now;
    }
    document.addEventListener('touchstart',() => {
        if(type === 'touch'){
            return;
        }
        type = 'touch';
        callback(type);
        document.addEventListener('mousemove',mouseMoveHandler);
    })
}
```

<div class="code-editor" data-url="codes/javascript/ts/on-user-input-change.ts" data-language="typescript"></div>


> 调用方式:

```js
onUserInputChange(type => {
  console.log('The user is now using', type, 'as an input method.');
});
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/on-user-input-change.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/on-user-input-change.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/on-user-input-change.html"></iframe>

