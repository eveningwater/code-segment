| 标题                             | 标签           |
| -------------------------------- | -------------- |
| fullscreen(全屏) | visual(视觉的) |

在全屏模式下将样式应用于元素。

* 使用 :fullscreen CSS 伪元素选择器来选择以全屏模式显示的元素并为其设置样式。
* 使用 `<button>` 和 Element.requestFullscreen() 创建一个按钮，使元素全屏以预览样式。

```html
<div class="container">
    <p><em>Click the button below to enter the element into fullscreen mode. </em></p>
    <div class="element" id="element">
        <p>I change color in fullscreen mode!</p>
    </div>
    <br>
    <button onclick="var el = document.getElementById('element'); el.requestFullscreen();">
        Go Full Screen!
    </button>
</div>
```

```css
.container {
    margin: 40px auto;
    max-width: 700px;
}
.element {
    padding: 20px;
    height: 300px;
    width: 100%;
    background-color: skyblue;
}
.element p {
    text-align: center;
    color: white;
    font-size: 3em;
}
.element:-ms-fullscreen p {
    visibility: visible;
}
.element:fullscreen {
    background-color: #e4708a;
    width: 100vw;
    height: 100vh;
}
```

> 应用场景

<iframe src="codes/css/html/fullscreen.html"></iframe>




