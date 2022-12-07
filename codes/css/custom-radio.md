| 标题                             | 标签           |
| -------------------------------- | -------------- |
| custom-radio(自定义单选框) | visual,animation(视觉的，动画) |

创建一个带有状态更改动画的样式单选按钮。

* 创建一个 .radio-container 并使用 flexbox 为单选按钮创建适当的布局。
* 重置 `<input>` 上的样式并使用它来创建单选按钮的轮廓和背景。
* 使用 ::before 元素创建单选按钮的内圈。
* 使用 transform: scale(1) 和 CSS transition 在状态变化时创建动画效果。

```html
<div class="radio-container">
    <input type="radio" class="radio-input" id="male" name="sex"/>
    <label for="male" class="radio">男</label>
    <input type="radio" class="radio-input" id="female" name="sex"/>
    <label for="female" class="radio">女</label>
</div>
```

```css
.radio-container {
    box-sizing: border-box;
    background-color: #fff;
    color: #545355;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
}
.radio-container * {
    box-sizing: border-box;
}
.radio-input {
    appearance: none;
    background-color: #fff;
    width: 16px;
    height: 16px;
    border: 1px solid #cccfdb;
    margin: 0;
    border-radius: 50%;
    display: grid;
    align-items: center;
    justify-content: center;
    transition: all .3s ease-in;
}
.radio-input::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transform: scale(0);
    transition: .3s transform ease-in-out;
    box-shadow: inset 6px 6px #fff;
}
.radio-input:checked {
    background-color: #2396ef;
    border-color: #2396ef;
}
.radio-input:checked::before {
    transform: scale(1);
}
.radio {
    cursor: pointer;
    padding: 6px 8px;
}
.radio:not(:last-child){
    margin-right: 6px;
}
```

> 应用场景

<iframe src="codes/css/html/custom-radio.html"></iframe>


