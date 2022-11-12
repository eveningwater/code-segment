| 标题                             | 标签           |
| -------------------------------- | -------------- |
| sticky-list-titles(固定标题列表) | visual(视觉的)) |

为每个部分创建一个带有粘性标题的列表。

* 使用 overflow-y: auto 允许列表容器 (`<dl>`) 垂直溢出。
* 将标题 (`<dt>`) 位置设置为粘性并应用 top: 0 以粘贴到容器的顶部。

```html
<div class="container">
  <dl class="sticky-stack">
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
```

```css
.container {
    display: grid;
    place-items: center;
    min-height: 400px;
}
.sticky-stack {
    background-color: #2396ef;
    color: #fff;
    margin: 0;
    height: 320px;
    border-radius: 1rem;
    overflow-y: auto;
}
.sticky-stack dt {
    position: sticky;
    top: 0;
    font-weight: bold;
    color: #cfd8dc;
    background-color: #263238;
    padding: .25rem 1rem;
}
.sticky-stack dd {
    margin: 0;
    padding: 0.75rem 1rem;
}
.sticky-stack dd + dt {
    margin-top: 1rem;
}
```



> 应用场景

<iframe src="codes/css/html/sticky-list-titles.html"></iframe>




