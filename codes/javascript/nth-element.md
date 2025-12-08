|  标题   | 标签  |
|  ----  | ----  |
| nthElement(第n个数组元素) | array(数组) |

返回数组的第 n 个元素。

* 使用 Array.prototype.slice() 获取第一个包含第 n 个元素的数组。
* 如果索引越界，则返回 undefined。
* 省略第二个参数 n 以获取数组的第一个元素。

```js
const nthElement = (arr,n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n,n + 1))[0];
```

<div class="code-editor" data-url="codes/javascript/ts/nth-element.ts" data-language="typescript"></div>

> 调用方式:

```js
nthElement(['a', 'b', 'c'], 1); // 'b'
nthElement(['a', 'b', 'b'], -3); // 'a'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/nth-element.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/nth-element.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/nth-element.html"></iframe>