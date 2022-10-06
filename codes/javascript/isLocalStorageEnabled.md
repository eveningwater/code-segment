|  标题   | 标签  |
|  ----  | ----  |
| isLocalStorageEnabled(是否启用了本地存储) | browser(浏览器) |

检查是否启用了 localStorage。

* 如果所有操作都成功完成，则使用 try...catch 块返回 true，否则返回 false。
* 使用 Storage.setItem() 和 Storage.removeItem() 测试在 Window.localStorage 中存储和删除值。

```js
const isLocalStorageEnabled = () => {
    try {
        const key = `__storage__test`;
        window.localStorage.setItem(key,null);
        window.localStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
}
```

> 调用方式:

```js
isLocalStorageEnabled(); // true, if localStorage is accessible
```

> 应用场景

<iframe src="codes/javascript/html/isLocalStorageEnabled.html"></iframe>

