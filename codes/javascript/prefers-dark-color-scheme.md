| 标题                                             | 标签            |
| ------------------------------------------------ | --------------- |
| prefersDarkColorScheme(检查用户是否使用暗黑主题) | browser(浏览器) |

检查用户配色方案偏好是否为深色。

- 使用带有适当媒体查询的 Window.matchMedia() 来检查用户配色方案偏好。

```js
const prefersDarkColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;
```

<div class="code-editor" data-url="codes/javascript/ts/prefers-dark-color-scheme.ts" data-language="typescript"></div>

> 调用方式:

```js
prefersDarkColorScheme(); // true or false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/prefers-dark-color-scheme.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/prefers-dark-color-scheme.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/prefers-dark-color-scheme.html"></iframe>
