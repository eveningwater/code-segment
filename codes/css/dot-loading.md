| 标题                      | 标签                                                    |
| ------------------------- | ------------------------------------------------------- |
| dot-loading(...加载中效果) | loading,:before,:after(加载中，before 伪元素，after 伪元素) |

CSS点点点加载中效果。

* 使用自定义的标签元素dot。
* 将dot元素设置为内联元素(display:inline-block),并设置溢出隐藏(overflow:hidden)，高度设置为1em。
* 使用:before伪元素结合`\A`Unicode字符插入内容，并且使用`white-space:pre-wrap`保留换行效果，使用css动画。
* 使用transform和translate为...添加动画效果。

```css
.loading {
    /**这里写自己自定义的样式 */
}
.loading > dot {
    height:1em;
    overflow:hidden;
    display:inline-block;
    text-align:left;
    vertical-align:-.25em;
    line-height:1;
}
/* 核心代码 */
.loading > dot:before {
    display:block;
    /* 这行代码最重要 */
    content:'...\A..\A.';
    /* 值是Pre也是一样的效果 */
    white-space:pre-wrap;
    animation:dot 3s infinite step-start both;
}
@keyframes dot {
    33% {
        transform:translateY(-2em);
    }
    66% {
        transform:translateY(-1em);
    }
}
```

```html
<div class="loading">正在加载中<dot>...</dot></div>
```

> 应用场景

<iframe src="codes/css/html/dot-loading.html"></iframe>