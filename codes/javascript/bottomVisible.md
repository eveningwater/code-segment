| 标题                              | 标签                             |
| --------------------------------- | -------------------------------- |
| bottomVisible(判断是否滚动到底部) | browser,beginner(浏览器，初学者) |

检查页面底部是否可见。

- 使用 `scrollY`、`scrollHeight` 和 `clientHeight` 确定页面底部是否可见。

> 代码如下:

```js
const bottomVisible = () => {
  const { clientHeight, scrollHeight } = document.documentElement;
  const { scrollY } = window;
  return clientHeight + scrollY >= (scrollHeight || clientHeight);
};
```

> 调用方式:

```js
bottomVisible(); // true or false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/bottomVisible.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/bottomVisible.html"></iframe>
