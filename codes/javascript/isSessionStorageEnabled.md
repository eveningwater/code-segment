| 标题                                      | 标签            |
| ----------------------------------------- | --------------- |
| isSessionStorageEnabled(是否支持会话存储) | browser(浏览器) |

检查是否启用了 sessionStorage。

- 如果所有操作都成功完成，则使用 try...catch 块返回 true，否则返回 false。
- 使用 Storage.setItem() 和 Storage.removeItem() 测试在 Window.sessionStorage 中存储和删除值。

```js
const isSessionStorageEnabled = () => {
  try {
    const key = `__storage__test`;
    window.sessionStorage.setItem(key, null);
    window.sessionStorage.removeItem(key, null);
    return true;
  } catch (e) {
    return false;
  }
};
```

> 调用方式:

```js
isSessionStorageEnabled(); // true, if sessionStorage is accessible
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isSessionStorageEnabled.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isSessionStorageEnabled.html"></iframe>
