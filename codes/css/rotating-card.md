| 标题                    | 标签             |
| ----------------------- | ---------------- |
| rotating-card(旋转卡片) | animation(动画)) |

创建一个在悬停时旋转的双面卡片。

- 将卡片的背面可见性设置为无。
- 最初，将卡片背面的 rotateY() 设置为 -180 度，将正面设置为 0 度。
- 悬停时，将前侧的 rotateY() 设置为 180 度，将后侧设置为 0 度。
- 设置适当的透视值以创建旋转效果。

```html
<div class="card">
  <div class="card-side front">
    <div class="card-item">Front Side</div>
  </div>
  <div class="card-side back">
    <div class="card-item">Back Side</div>
  </div>
</div>
```

```css
.card {
  perspective: 150rem;
  position: relative;
  height: 40rem;
  max-width: 400px;
  margin: 2rem;
  box-shadow: none;
  background: none;
}
.card-side {
  height: 35rem;
  border-radius: 15px;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  padding: 2rem;
  color: #fff;
}
.card-side.back {
  transform: rotateY(-180deg);
  background-color: #4158bd;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
}
.card-side.front {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}
.card:hover .card-side.front {
  transform: rotateY(180deg);
}
.card:hover .card-side.back {
  transform: rotateY(0deg);
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/rotating-card.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/rotating-card.html"></iframe>
