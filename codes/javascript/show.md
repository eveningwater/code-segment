| 标题               | 标签                            |
| ------------------ | ------------------------------- |
| show(显示所有元素) | browser,css(浏览器，层叠样式表) |

显示指定的所有元素。

- 使用扩展运算符 (...) 和 Array.prototype.forEach() 清除每个指定元素的显示属性。

```js
const show = (...el) => [...el].forEach(item => (item.style.display = ''));
```

<div class="code-editor" data-url="codes/javascript/ts/show.ts" data-language="typescript"></div>

> 调用方式:

```js
show(...document.querySelectorAll('img'));
// Shows all <img> elements on the page
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/show.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/show.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/show.html"></iframe>

> ps: 以上是一个不错的实用函数
