| 标题                             | 标签           |
| -------------------------------- | -------------- |
| Counter(计数器) | visual(视觉的) |

创建一个包含嵌套列表元素的自定义列表计数器。

* 使用 counter-reset 初始化一个变量 counter（默认为 0），其名称是属性的值（即 counter）。
* 对每个可计数元素（即每个 `<li>`）的变量计数器使用计数器增量。
* 使用 counters() 将每个变量 counter 的值显示为每个可计数元素（即每个 `<li>`）的 :before 伪元素内容的一部分。 传递给它的第二个值 ('.') 充当嵌套计数器的分隔符。

```html
<ul class="counter">
    <li class="counter-item">List item</li>
    <li class="counter-item">List item</li>
    <li class="counter-item">
        List item
        <ul class="counter">
            <li class="counter-item">List item</li>
            <li class="counter-item">List item</li>
            <li class="counter-item">List item</li>
        </ul>
    </li>
</ul>
```

```css
.counter {
    counter-reset: counter;
    list-style: none;
    padding: 6px 12px;
}
.counter-item::before {
    counter-increment: counter;
    content: counters(counter,'.') ' ';
    color:rgba(0,0,0.85);
}
```

> 应用场景

<iframe src="codes/css/html/Counter.html"></iframe>




