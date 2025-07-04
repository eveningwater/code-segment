| 标题                | 标签            |
| ------------------- | --------------- |
| getImages(获取图片) | browser(浏览器) |

从一个元素中获取所有图像并将它们放入一个数组中。

- 使用 Element.getElementsByTagName() 获取提供的元素内的所有 `<img>` 元素。
- 使用 Array.prototype.map() 映射每个 `<img>` 元素的每个 src 属性。
- 如果 includeDuplicates 为 false，则创建一个新的 Set 以消除重复，并在扩散到数组后返回。
- 省略第二个参数 includeDuplicates，默认丢弃重复项。

```js
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img =>
    img.getAttribute('src')
  );
  return includeDuplicates ? images : [...new Set(images)];
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-images.ts" data-language="typescript"></div>

> 调用方式:

```js
getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false); // ['image1.jpg', 'image2.png', '...']
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-images.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/get-images.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-images.html"></iframe>
