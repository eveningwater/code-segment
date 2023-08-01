| 标题                        | 标签            |
| --------------------------- | --------------- |
| bouncing-loader(弹跳加载器) | animation(动画) |

创建一个弹跳加载器动画。

- 使用 `@keyframes` 定义弹跳动画，使用 opacity 和 transform 属性。 在 transform: translate3d() 上使用单轴平移来获得更好的动画性能。
- 为弹跳圆创建一个父容器 .bouncing-loader。 使用 display: flex 和 justify-content: center 将它们定位在中心。
- 给三个弹跳的圆形 `<div>` 元素设置相同的宽度和高度以及 border-radius: 50% 以使它们成为圆形。
- 将 bouncing-loader 动画应用于三个弹跳圆圈中的每一个。
- 为每个圆圈和动画方向使用不同的动画延迟：交替以创建适当的效果。

```html
<div class="bouncing-loader">
  <div class="bouncing-loader-item"></div>
  <div class="bouncing-loader-item"></div>
  <div class="bouncing-loader-item"></div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.bouncing-loader {
  display: flex;
  justify-content: center;
  width: 150px;
}
.bouncing-loader-item {
  width: 16px;
  height: 16px;
  margin: 3rem 0.2rem;
  background-color: #0b16f1;
  border-radius: 50%;
  animation: bouncingLoader 0.6s infinite alternate;
}
.bouncing-loader-item:nth-child(2) {
  animation-delay: 0.2s;
}
.bouncing-loader-item:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes bouncingLoader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -16px, 0);
  }
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/bouncing-loader.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/bouncing-loader.html"></iframe>
