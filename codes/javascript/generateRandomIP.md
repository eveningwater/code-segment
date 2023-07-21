| 标题                          | 标签                                  |
| ----------------------------- | ------------------------------------- |
| generateRandomIP(生成随机 IP) | math,random,array(数学，随机数，数组) |

生成随机 IP。

- 使用 Math.random 结合 Math.floor 方法乘以 256 可以得到一个在符合条件的 ip 地址数。
- 使用 Array.from 生成 4 个 ip 地址数。
- 使用 join 方法将每一个 ip 地址数以“.”隔开。

> 代码如下:

```js
const generateRandomIP = () =>
  Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
```

> 调用方式:

```js
generateRandomIP(); // 220.187.184.113
generateRandomIP(); // 254.24.179.151
```

> 应用场景

generateRandomIP.html 如下:

<div class="code-editor" data-url="codes/javascript/html/generateRandomIP.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/generateRandomIP.html"></iframe>
