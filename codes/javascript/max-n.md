|  标题   | 标签  |
|  ----  | ----  |
| maxN(返回数组中n个最大元素) | array,math(数组，数学) |

从提供的数组中返回 n 个最大元素。

* 使用 Array.prototype.sort() 结合扩展运算符 (...) 创建数组的浅表克隆并按降序对其进行排序。
* 使用 Array.prototype.slice() 获取指定数量的元素。
* 省略第二个参数 n 以获得单元素数组。
* 如果 n 大于或等于提供的数组长度，则返回原始数组（按降序排序）。

```js
const maxN = (arr,n = 1) => arr.sort((a,b) => b - a).slice(0,n);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/max-n.ts" data-language="typescript"></div>

> 调用方式:

```js
maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3, 2]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/max-n.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/max-n.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/max-n.html"></iframe>