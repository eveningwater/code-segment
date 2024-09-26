| 标题                                      | 标签                                                |
| ----------------------------------------- | --------------------------------------------------- |
| UUIDGeneratorBrowser(在浏览器中生成 UUID) | browser,random,intermediate(浏览器，随机，两者之间) |

在浏览器中生成 UUID。

- 使用`Crypto.getRandomValues()`生成符合[RFC4122](https://www.ietf.org/rfc/rfc4122.txt)版本 4 的 UUID。
- 使用`Number.prototype.toString(16)`将其转换为合适的 UUID。

> 代码如下:

```js
const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/UUIDGeneratorBrowser.ts" data-language="typescript"></div>

或者可以使用如下的方法:

```js
const UUIDGeneratorBrowser = () =>
  (Math.random() * 10000000).toString(16).substring(0, 4) +
  '-' +
  new Date().getTime() +
  '-' +
  Math.random().toString().substring(2, 5);
//这个返回的结果与前面的有区别
```

> 注: substring方法已经废弃，需要使用其它方法来代替。

> 调用方式:

```js
UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/UUIDGeneratorBrowser.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/UUIDGeneratorBrowser.html"></iframe>
