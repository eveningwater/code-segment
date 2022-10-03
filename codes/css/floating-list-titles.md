| 标题                             | 标签           |
| -------------------------------- | -------------- |
| floating-list-titles(浮动列表标题) | visual(视觉的) |

为每个部分创建一个带有浮动标题的列表。

* 使用 overflow-y: auto 允许列表容器垂直溢出。
* 使用内部容器 (`<dl>`) 上的 display: grid 创建包含两列的布局。
* 将标题 (`<dt>`) 设置为 grid-column: 1，将内容 (`<dd>`) 设置为 grid-column: 2。
* 最后，将 position:sticky 和 top:0.5rem 应用到标题以创建浮动效果。

```html
<div class="container">
    <div class="floating-stack">
        <dl>
            <dt>A</dt>
            <dd>Algeria</dd>
            <dd>Angola</dd>
            <dt>B</dt>
            <dd>Benin</dd>
            <dd>Botswana</dd>
            <dd>Burkina Faso</dd>
            <dd>Burundi</dd>
            <dt>C</dt>
            <dd>Cabo Verde</dd>
            <dd>Cameroon</dd>
            <dd>Central African Republic</dd>
            <dd>Chad</dd>
            <dd>Comoros</dd>
            <dd>Congo, Democratic Republic of the</dd>
            <dd>Congo, Republic of the</dd>
            <dd>Cote d'Ivoire</dd>
            <dt>D</dt>
            <dd>Djibouti</dd>
            <dt>E</dt>
            <dd>Egypt</dd>
            <dd>Equatorial Guinea</dd>
            <dd>Eritrea</dd>
            <dd>Eswatini (formerly Swaziland)</dd>
            <dd>Ethiopia</dd>
        </dl>
    </div>
</div>
```

```css
.container {
    display: grid;
    place-items: center;
    min-height: 400px;
}
.floating-stack {
    background: #455a64;
    color: #fff;
    height: 80vh;
    width: 320px;
    border-radius: 1rem;
    overflow-y: auto;
}
.floating-stack > dl {
    margin: 0 0 1rem;
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    align-items: center;
}
.floating-stack dt {
    position: sticky;
    top: 0.5rem;
    left: 0.5rem;
    font-weight: bold;
    background: #263238;
    color:#cfd8dc;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    padding: .25rem 1rem;
    grid-column: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.floating-stack dd {
    grid-column: 2;
    margin: 0;
    padding: 0.75rem;
}
.floating-stack > dl:first-of-type > dd:first-of-type {
    margin-top: 0.25rem;
}
```

> 应用场景

<iframe src="codes/css/html/floating-list-titles.html"></iframe>




