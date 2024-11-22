| 标题                                           | 标签                      |
| ---------------------------------------------- | ------------------------- |
| ingenious-outline(巧用 outline 实现九宫格分隔) | outline,border(轮廓,边框) |

巧用 outline 实现九宫格之间的分隔线段

- 设置元素的`outline`,和`border`同宽 `background-color`同色
- 使用`outline-offset`负值使`outline`遮盖`border`

> 代码如下：

```css
.flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  outline: 1px solid #fff;
  outline-offset: -1px;
}
.child {
  flex: 33%;
  box-sizing: border-box;
  border: 1px solid;
}
```

```html
<div class="flexbox">
  <div class="child"></div>
  ...
</div>
```

> 应用场景

以下是一个实现的网站<a href="codes/css/html/ingenious-outline.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/css/html/ingenious-outline.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/ingenious-outline.html"></iframe>
