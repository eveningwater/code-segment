| 标题                  | 标签                    |
| --------------------- | ----------------------- |
| concatImage(合并图像) | image,concat(图像,合并) |

实现一个合并图像。

- 该函数第一个参数传入一个图像路径数组，第二个参数为一个回调函数，第三个参数为一个配置对象，创建一个结果数组。
- 获取图像路径数组的长度，使用[Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)方法创建一个 canvas 元素。
- 调用 rect 方法绘制一个矩形，并使用 fillStyle 方法填充颜色，调用 fill 方法，然后调用创建图片函数。
- 创建图片函数中传入一个数值常量，从 0 开始，判断如果图像路径数组的长度大于数值常量，则调用 Image 构造函数创建一个图片，并赋值图像路径，监听图像的 onload 事件。
- 在 onload 事件中调用 drawImage 方法，然后递归调用创建图片函数。
- 调用 toDataURL 方法，将结果添加到结果数组中，并调用回调函数。

> 特别说明: 传入的图像路径数组只能是本地图片路径。

> 代码如下:

```js
const concatImage = (
  data,
  callback,
  options = {
    width: 300,
    height: 300,
    fillStyle: '#fff',
    type: 'image/jpg',
    encoderOptions: 0.9
  }
) => {
  const { width, height, fillStyle, type, encoderOptions } = options;
  const can = document.createElement('canvas'),
    ctx = can.getContext('2d'),
    len = data.length,
    res = [],
    createImg = count => {
      if (len > count) {
        const img = new Image();
        img.src = data[count];
        img.onload = () => {
          ctx.drawImage(img, 0, 0, width, height);
          createImg(count + 1);
        };
      } else {
        res.push(can.toDataURL(type, encoderOptions));
        callback?.(res);
      }
    };
  can.width = width;
  can.height = height;
  ctx.rect(0, 0, can.width, can.height);
  ctx.fillStyle = fillStyle;
  ctx.fill();
  createImg(0);
};
```

> 调用方式:

```js
concatImage(['./img/1.png'], function (res) {
  console.log(res);
});
```

> 应用场景

concatImage.html 如下:

<div class="code-editor" data-url="codes/javascript/html/concatImage.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/concatImage.html"></iframe>
