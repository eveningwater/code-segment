|  标题   | 标签  |
|  ----  | ----  |
| detectLanguage(检测语言类型) | browser(浏览器) |

检测当前用户的首选语言。

* 使用 `Navigator.language` 或 `Navigator.languages` 的第一个值（如果可用），否则返回 `defaultLang`。
* 省略第二个参数 `defaultLang`，以使用“`en-US`”作为默认语言代码。

> 代码如下:

```js
const detectLanguage = (defaultLang = 'en-US') => navigator.language || (Array.isArray(navigator.languages) && navigator.languages[0]) || defaultLang;
```

> 调用方式:

```js
detectLanguage(); // 'nl-NL'
```

> 应用场景