| 标题                   | 标签                    |
| ---------------------- | ----------------------- |
| rippleButton(波纹按钮) | click,button(点击,按钮) |

实现一个 波纹按钮。

- 给按钮增加一个点击事件，获取当前事件对象的 x 坐标和 y 坐标，以及按钮的左间距和上间距，计算波纹散开的坐标值。
- 创建一个 span 元素，添加一个类名用来设置波纹按钮的样式。
- 将 span 元素的左偏移量和上偏移量设置成计算的坐标值，并添加到按钮元素中，延迟 1s 执行删除。

> 代码如下:

css 代码如下:

```css
.circle {
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: absolute;
  background-image: linear-gradient(to left, #f0d3c0, #f0a574), radial-gradient(circle, #f3ebbf, #ece57e);
  border-radius: 50%;
  animation: scale 0.3s ease-in-out;
}
@keyframes scale {
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
```

```js
const rippleButton = btn => {
  btn.addEventListener('click', e => {
    const x = e.clientX,
      y = e.clientY,
      left = btn.offsetLeft,
      top = btn.offsetTop,
      cX = x - left,
      cY = y - top;
    const span = document.createElement('span');
    span.classList.add('circle');
    btn.appendChild(span);
    setTimeout(() => span.remove(), 1000);
  });
};
```

> 调用方式:

```js
rippleButton(document.querySelector('.btn'));
```

> 应用场景

rippleButton.html 如下:

<div class="code-editor" data-url="codes/javascript/html/rippleButton.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/rippleButton.html"></iframe>
