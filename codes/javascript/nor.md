| 标题        | 标签                   |
| ----------- | ---------------------- |
| nor(逻辑或) | math,logic(数学，逻辑) |

检查是否所有参数都不为真。

* 使用逻辑非 (!) 运算符返回两个给定值的逻辑或 (||) 的倒数。

```js
const nor = (a,b) => !(a || b);
```

<div class="code-editor" data-url="codes/javascript/ts/nor.ts" data-language="typescript"></div>

> 调用方式:

```js
nor(true, true); // false
nor(true, false); // false
nor(false, false); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/nor.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/nor.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/nor.html"></iframe>