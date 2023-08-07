| 标题                | 标签                  |
| ------------------- | --------------------- |
| loadImage(加载图像) | image,load(图像,加载) |

实现一个加载图像。

- 使用 Image 构造函数创建一个图片对象实例，然后赋值 src 属性，src 由函数的参数传入。
- 返回一个 promise，监听图像的 load 和 error 事件，分别 resolve 和 reject 出去。

> 代码如下:

```js
const loadImage = src =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img.src);
    img.onerror = () => reject();
  });
```

> 调用方式:

```js
loadImage('https://cdn2.thecatapi.com/images/cov.jpg'); //
```

> 应用场景

loadImage.html 如下:

<div class="code-editor" data-url="codes/javascript/html/loadImage.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/loadImage.html"></iframe>
