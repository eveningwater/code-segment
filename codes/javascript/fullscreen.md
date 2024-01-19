|  标题   | 标签  |
|  ----  | ----  |
| fullscreen(全屏) | browser(浏览器) |

在全屏模式下打开或关闭元素。

* 使用 Document.querySelector() 和 Element.requestFullscreen() 全屏打开给定元素。
* 使用 Document.exitFullscreen() 退出全屏模式。
* 省略第二个参数 el，以使用 body 作为默认元素。
* 省略第一个元素 mode，默认情况下以全屏模式打开元素。

```js
const fullscreen = (mode = true,el = 'body') => mode ? document.querySelector(el).requestFullscreen() : document.exitFullscreen();
```

> 调用方式:

```js
fullscreen(); // Opens `body` in fullscreen mode
fullscreen(false); // Exits fullscreen mode
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/fullscreen.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/fullscreen.html"></iframe>


