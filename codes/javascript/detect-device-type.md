| 标题                           | 标签                               |
| ------------------------------ | ---------------------------------- |
| detectDeviceType(检测设备类型) | browser,regexp(浏览器，正则表达式) |

检测页面是在移动设备还是桌面上查看。

- 使用正则表达式测试 `Navigator.userAgent` 属性以确定设备是移动设备还是桌面设备。

> 代码如下:

```js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'Mobile'
    : 'Desktop';
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/detect-device-type.ts" data-language="typescript"></div>

> 调用方式:

```js
detectDeviceType(); // 'Mobile' or 'Desktop'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/detect-device-type.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/detect-device-type.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/detect-device-type.html"></iframe>
