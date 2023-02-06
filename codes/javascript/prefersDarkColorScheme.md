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

> 调用方式:

```js
prefersDarkColorScheme(); // true or false
```

> 应用场景

<iframe src="codes/javascript/html/prefersDarkColorScheme.html"></iframe>
