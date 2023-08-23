| 标题                                      | 标签                           |
| ----------------------------------------- | ------------------------------ |
| isSSRSafeAttrName(是否是安全合法的属性名) | regexp,key(正则表达式，属性名) |

是否是安全合法的属性名。

- 使用正则表达式检查属性名是否安全且合法。

```js
const isSSRSafeAttrName = key => !/[>/="'\u0009\u000a\u000c\u0020]/.test(key);
```

> 调用方式:

```js
isSSRSafeAttrName('>'); // false
isSSRSafeAttrName('key'); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isSSRSafeAttrName.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isSSRSafeAttrName.html"></iframe>
