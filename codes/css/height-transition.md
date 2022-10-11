| 标题                             | 标签           |
| -------------------------------- | -------------- |
| height-transition(高度过渡效果) | animation(动画) |

当元素的高度未知时，将元素的高度从 0 转换为 auto。

* 使用 transition 来指定对 max-height 的更改应该被过渡。
* 使用 overflow:hidden 来防止隐藏元素的内容溢出其容器。
* 使用 max-height 指定初始高度为 0。
* 使用 :hover 伪类将 max-height 更改为 JavaScript 设置的 --max-height 变量的值。
* 使用 Element.scrollHeight 和 CSSStyleDeclaration.setProperty() 将 --max-height 的值设置为元素的当前高度。
* 注意：在每个动画帧上导致重排，如果在高度过渡的元素下方有大量元素，则会出现延迟。

```html
<div class="trigger">
    Hover me to see a height transition.
    <div class="el">Additional content</div>
</div>
```

```css
 .trigger {
    cursor: pointer;
    border-bottom: 1px solid #2396ef;
}
.el {
    transition: max-height .4s;
    overflow: hidden;
    max-height: 0;
}
.trigger:hover > .el {
    max-height: var(--max-height--);
}
```

```js
const el = document.querySelector('.el'),
      height = el.scrollHeight;
el.style.setProperty('--max-height--',height + 'px');
```

> 应用场景

<iframe src="codes/css/html/height-transition.html"></iframe>




