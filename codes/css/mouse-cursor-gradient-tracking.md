| 标题                             | 标签           |
| -------------------------------- | -------------- |
| mouse-cursor-gradient-tracking(鼠标悬浮渐变) | visual,interactivity(视觉的，交互性) |

渐变跟随鼠标光标的悬停效果。

* 声明两个 CSS 变量 --x 和 --y，用于跟踪鼠标在按钮上的位置。
* 声明一个 CSS 变量 --size，用于修改渐变的尺寸。
* 使用 background:radial-gradient(circle nearest-side, pink, transparent) 在正确的位置创建渐变。
* 使用 Document.querySelector() 和 EventTarget.addEventListener() 为 “mousemove” 事件注册一个处理程序。
* 使用 Element.getBoundingClientRect() 和 CSSStyleDeclaration.setProperty() 来更新 --x 和 --y CSS 变量的值。

```html
<button class="mouse-cursor-gradient-tracking">
    <span class="mouse-cursor-gradient-tracking-text">hover me</span>
</button>
```

```css
.mouse-cursor-gradient-tracking {
    position: relative;
    background-color: #7983ff;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border: none;
    color: #fff;
    cursor: pointer;
    outline: none;
    overflow: hidden;
}
.mouse-cursor-gradient-tracking-text {
    position: relative;
}
.mouse-cursor-gradient-tracking::before {
    --size--: 0;
    content:"";
    position: absolute;
    left: var(--x--);
    top: var(--y--);
    width: var(--size--);
    height: var(--size--);
    background: radial-gradient(circle closest-side,pink,transparent);
    transform: translate(-50%,-50%);
    transition: width .2s ease,height .2s ease;
}
.mouse-cursor-gradient-tracking:hover::before {
    --size--: 200px;
}
```

```js
const btn = document.querySelector('.mouse-cursor-gradient-tracking');
btn.addEventListener('mousemove',e => {
    const rect = e.target.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
    btn.style.setProperty('--x--',x + 'px');
    btn.style.setProperty('--y--',y + 'px');
})
```

> 应用场景

<iframe src="codes/css/html/mouse-cursor-gradient-tracking.html"></iframe>




