| 标题                                                                  | 标签           |
| --------------------------------------------------------------------- | -------------- |
| navigation-list-item-hover-and-focus-effect(导航列表悬浮关注焦点效果) | visual(视觉的) |

使用 CSS 转换为导航项创建自定义悬停和焦点效果。

- 在列表项锚点处使用 :before 伪元素来创建悬停效果。 使用变换隐藏它：比例（0）。
- 使用 :hover 和 :focus 伪类选择器将伪元素转换为 transform: scale(1) 并显示其彩色背景。
- 使用 z-index 防止伪元素覆盖锚元素。

```html
<nav class="hover-nav">
  <ul class="nav-list">
    <li class="nav-list-item">
      <a href="#" class="nav-list-item-link">Home</a>
    </li>
    <li class="nav-list-item">
      <a href="#" class="nav-list-item-link">About</a>
    </li>
    <li class="nav-list-item">
      <a href="#" class="nav-list-item-link">Contact</a>
    </li>
  </ul>
</nav>
```

```css
.hover-nav > .nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.hover-nav .nav-list-item {
  float: left;
}
.hover-nav .nav-list-item .nav-list-item-link {
  position: relative;
  display: block;
  color: #fff;
  text-align: center;
  padding: 8px 12px;
  text-decoration: none;
  z-index: 0;
}
.nav-list-item .nav-list-item-link::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: #2683f6;
  z-index: -1;
  transform: scale(0);
  transition: transform 0.5s ease-in-out;
}
.nav-list-item-link:hover::before,
.nav-list-item-link:focus::before {
  transform: scale(1);
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/navigation-list-item-hover-and-focus-effect.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/navigation-list-item-hover-and-focus-effect.html"></iframe>
