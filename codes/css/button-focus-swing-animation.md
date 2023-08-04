| 标题                                       | 标签            |
| ------------------------------------------ | --------------- |
| button-focus-swing-animation(摇摆动画按钮) | animation(动画) |

在焦点上创建摆动动画。

- 使用适当的过渡来为元素的更改设置动画。
- 使用 :focus 伪类来应用使用变换使元素摆动的动画。
- 使用 animation-iteration-count 只播放一次动画。

```html
<button class="swing-button">Submit</button>
```

```css
.swing-button {
  display: inline-block;
  padding: 6px 26px;
  outline: none;
  transition: all 0.4s ease-in-out;
  background-color: #2396ef;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #1e89ee;
}
.swing-button:focus {
  animation: swing 1s ease;
  /* 动画执行次数 */
  /* animation-iteration-count: 1; */
}
@keyframes swing {
  15% {
    transform: translateX(5px);
  }
  30% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(3px);
  }
  65% {
    transform: translateX(-3px);
  }
  80% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/button-focus-swing-animation.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/button-focus-swing-animation.html"></iframe>
