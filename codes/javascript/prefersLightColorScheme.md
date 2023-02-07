| 标题                                              | 标签            |
| ------------------------------------------------- | --------------- |
| prefersLightColorScheme(检查用户是否使用暗黑主题) | browser(浏览器) |

检查用户配色方案偏好是否为浅色。

- 使用带有适当媒体查询的 Window.matchMedia() 来检查用户配色方案偏好。

```js
const prefersLightColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches;
```

> 调用方式:

```js
prefersLightColorScheme(); // true or false
```

> 应用场景

<iframe src="codes/javascript/html/prefersLightColorScheme.html"></iframe>
