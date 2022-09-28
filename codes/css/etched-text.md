| 标题                             | 标签           |
| -------------------------------- | -------------- |
| etched-text(蚀刻文字) | visual(视觉的) |

创建一种效果，其中文本似乎被“蚀刻”或雕刻到背景中。

* 使用 text-shadow 创建一个白色阴影，从原点位置水平偏移 0px，垂直偏移 2px。
* 背景必须比阴影更暗才能使效果生效。
* 文本颜色应略微褪色，使其看起来像是从背景中雕刻/雕刻出来的。

```html
<p class="etched-text">I appear etched into the background.</p>
```

```css
.etched-text {
    text-shadow: 0 2px #fff;
    font-size: 1.5rem;
    font-weight: bold;
    color:#b8bec5;
}
```

> 应用场景

<iframe src="codes/css/html/etched-text.html"></iframe>




