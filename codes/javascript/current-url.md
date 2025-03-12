| 标题                 | 标签                             |
| -------------------- | -------------------------------- |
| currentURL(当前路径) | browser,beginner(浏览器，初学者) |

返回当前路径。

- 使用`Window.location.href`得到当前路径。

> 代码如下:

```js
const currentURL = () => window.location.href;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/current-url.ts" data-language="typescript"></div>

> 调用方式:

```js
currentURL(); // 'https://www.google.com/'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/current-url.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/current-url.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/current-url.html"></iframe>
