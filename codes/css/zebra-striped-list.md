| 标题                             | 标签           |
| -------------------------------- | -------------- |
| zebra-striped-list(斑马条纹列表) | visual(视觉的)) |

创建具有交替背景颜色的条纹列表。

* 使用 :nth-child(odd) 或 :nth-child(even) 伪类选择器将不同的背景颜色应用到根据它们在一组兄弟元素中的位置匹配的元素。
* 注意：您可以使用它为其他 HTML 元素应用不同的样式，例如 `<div>`、`<tr>`、`<p>`、`<ol>`等。

```html
<ul class="zebra-striped-list">
    <li class="zebra-striped-list-item">Item 01</li>
    <li class="zebra-striped-list-item">Item 02</li>
    <li class="zebra-striped-list-item">Item 03</li>
    <li class="zebra-striped-list-item">Item 04</li>
    <li class="zebra-striped-list-item">Item 05</li>
</ul>
```

```css
.zebra-striped-list {
    list-style: none;
}
.zebra-striped-list-item {
    color: rgba(255,255,255,.85);
    padding: .5rem 1rem;
    font-size: 18px;
}
.zebra-striped-list-item:nth-child(odd){
    background-color: #2396ef;
}
.zebra-striped-list-item:nth-child(even){
    background-color: #e05210;
}
```

> 应用场景

<iframe src="codes/css/html/zebra-striped-list.html"></iframe>

