| 标题                             | 标签           |
| -------------------------------- | -------------- |
| custom-scrollbar(自定义滚动条) | visual(视觉的) |

为具有可滚动溢出的元素自定义滚动条样式。

* 使用 ::-webkit-scrollbar 设置滚动条元素的样式。
* 使用 ::-webkit-scrollbar-track 设置滚动条轨道的样式（滚动条的背景）。
* 使用 ::-webkit-scrollbar-thumb 设置滚动条拇指（可拖动元素）的样式。
* 注意：滚动条样式似乎不在任何标准轨道上。 此技术仅适用于基于 WebKit 的浏览器。

```html
<div class="custom-scrollbar">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
        Iure id exercitationem nulla qui repellat laborum vitae, <br />
        molestias tempora velit natus. Quas, assumenda nisi. <br />
        Quisquam enim qui iure, consequatur velit sit?
    </p>
</div>
```

```css
.custom-scrollbar {
    width: 200px;
    height: 70px;
    border: 1px solid #d0d0de;
    padding: 15px;
    overflow-y: scroll;
}
.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background-color: #1e3f20;
    border-radius: 12px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #4a7856;
    border-radius: 12px;
}
```

> 应用场景

<iframe src="codes/css/html/custom-scrollbar.html"></iframe>




