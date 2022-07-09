|  标题   | 标签  |
|  ----  | ----  |
| btoa(创建base-64字符) | browser,beginner(浏览器，初学者) |

从 `String` 对象创建一个 `base-64` 编码的 `ASCII` 字符串，其中字符串中的每个字符都被视为一个二进制数据字节。

* 使用二进制编码为给定的字符串创建一个缓冲区，并使用 `Buffer.toString('base64')` 返回编码的字符串。

> 代码如下:

```js
    const btoa = str => Buffer.from(str,'binary').toString("base64");
```

> 调用方式:

```js
    btoa('foobar'); // 'Zm9vYmFy'
```

> 应用场景