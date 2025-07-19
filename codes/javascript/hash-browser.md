| 标题                                | 标签                          |
| ----------------------------------- | ----------------------------- |
| hashBrowser(基于浏览器的 hash 算法) | browser,promise(浏览器，期约) |

使用 [SHA-256](https://en.wikipedia.org/wiki/SHA-2) 算法为值创建哈希， 返回一个期约。

- 使用 [SubtleCrypto API](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) 为给定值创建哈希。
- 创建一个新的 TextEncoder 并使用它来编码 val。 将其值传递给 SubtleCrypto.digest() 以生成给定数据的摘要。
- 使用 DataView.prototype.getUint32() 从解析的 ArrayBuffer 中读取数据。
- 使用 Number.prototype.toString() 将数据转换为其十六进制表示。 使用 Array.prototype.push() 将数据添加到数组中。
- 最后，使用 Array.prototype.join() 将十六进制数组中的值组合成一个字符串。

```js
const hashBrowser = val =>
  crypto.subtle
    .digest('SHA-256', new TextEncoder('utf-8').encode(val))
    .then(h => {
      const hexes = [];
      const view = new DataView(h);

      for (let i = 0; i < view.byteLength; i += 4) {
        hexes.push('00000000' + view.getUint32(i).toString(16).slice(-8));
      }

      return hexes.join('');
    });
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/hash-browser.ts" data-language="typescript"></div>

> 调用方式:

```js
hashBrowser(
  JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })
).then(console.log);
// '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/hash-browser.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/hash-browser.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/hash-browser.html"></iframe>
