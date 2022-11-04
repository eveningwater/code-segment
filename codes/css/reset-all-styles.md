| 标题                             | 标签           |
| -------------------------------- | -------------- |
| reset-all-styles(重置所有样式) | visual(视觉的) |

仅使用一个属性将所有样式重置为默认值。

* 使用 all 属性将所有样式（继承或不继承）重置为其默认值。
* 注意：这不会影响方向和 unicode-bidi 属性。

```html
<div class="reset-all-styles">
    <h5>title</h5>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id
        exercitationem nulla qui repellat laborum vitae, molestias tempora velit
        natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?
    </p>
</div>
```

```css
.reset-all-styles {
    all: initial;
}
```

> 应用场景

<iframe src="codes/css/html/reset-all-styles.html"></iframe>




