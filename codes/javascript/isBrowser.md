| 标题                            | 标签                       |
| ------------------------------- | -------------------------- |
| isBrowser(判断是否是浏览器环境) | browser,node(浏览器，节点) |

确定当前运行环境是否是浏览器，以便前端模块可以在服务器（节点）上运行而不会引发错误。

- 对 Window 和 Document 的 typeof 值使用 Array.prototype.includes() （全局变量通常仅在浏览器环境中可用，除非它们被明确定义），如果其中一个未定义，它将返回 true。
- typeof 允许在不抛出 ReferenceError 的情况下检查全局变量是否存在。
- 如果它们都不是未定义的，则假定当前环境是浏览器。

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
```

> 调用方式:

```js
isBrowser(); // true (browser)
isBrowser(); // false (Node)
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isBrowser.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isBrowser.html"></iframe>
