| 标题                             | 标签           |
| -------------------------------- | -------------- |
| typewriter-effect(打字效果) | animation(动画)) |

创建打字机效果动画。

* 定义两个动画，键入动画字符和闪烁动画插入符号。
* 使用 ::after 伪元素将插入符号添加到容器元素。
* 使用 JavaScript 设置内部元素的文本并设置包含字符数的 --characters 变量。 此变量用于为文本设置动画。
* 使用 white-space: nowrap 和 overflow: hidden 使内容在必要时不可见。

```html
<div class="typewriter-effect">
    <div class="text" id="typewriter-text"></div>
</div>
```

```css
 .typewriter-effect {
    display: flex;
    justify-content: center;
    font-family: monospace;
    font-size: 25px;
    color: #535455;
    font-weight: 500;
}
.text {
    max-width: 0;
    animation: typing 3s steps(var(--characters--)) infinite;
    white-space: nowrap;
    overflow: hidden;
}
.typewriter-effect::after {
    content: " |";
    animation: blink 1s infinite;
    animation-timing-function: step-end;
}
@keyframes typing {
    75%,100% {
        max-width: calc(var(--characters--) * 1ch);
    }
}
@keyframes blink {
    0%,75%,100% {
        opacity: 1;
    }
    25% {
        opacity: 0;
    }
}
```

```js
const typeWriter = document.getElementById("typewriter-text");
const createWriter = (text = 'Lorem ipsum dolor sit amet.') => {
    typeWriter.innerHTML = text;
    typeWriter.style.setProperty('--characters--',text.length);
}
createWriter()
```

> 应用场景


<iframe src="codes/css/html/typewriter-effect.html"></iframe>



