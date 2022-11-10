| 标题                             | 标签           |
| -------------------------------- | -------------- |
| sibling-fade(形状分隔符) | interactivity(交互性)) |

淡出悬浮元素的兄弟姐妹。

* 使用过渡动画更改不透明度。
* 使用 :hover 和 :not 伪类选择器将所有元素的不透明度更改为 0.5，鼠标悬停的元素除外。

```html
<div class="sibling-fade">
    <span>Item 1</span>
    <span>Item 2</span>
    <span>Item 3</span>
    <span>Item 4</span>
    <span>Item 5</span>
    <span>Item 6</span>
</div>
```

```css
.sibling-fade {
    border: 1px solid #dedfdd;
    padding: 8px 14px;
    border-radius: 6px;
    max-width: 600px;
    margin: 10px auto;
    background: linear-gradient(135deg,#5fa5eb 10%,#0d70d3 90%);
    color: #fff;
}
.sibling-fade > span {
    padding: 0 16px;
    transition: opacity .3s;
    cursor: pointer;
    font-size: 18px;
}
.sibling-fade:hover span:not(:hover){
    opacity: .5;
}
```



> 应用场景

<iframe src="codes/css/html/sibling-fade.html"></iframe>




