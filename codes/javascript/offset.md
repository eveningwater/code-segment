|  标题   | 标签  |
|  ----  | ----  |
| offset(偏移数组元素) | array(数组) |

将指定数量的元素移动到数组的末尾。

* 使用 Array.prototype.slice() 两次获取指定索引之后的元素和之前的元素。
* 使用扩展运算符 (...) 将两者组合成一个数组。
* 如果 offset 为负，则元素将从末尾移动到开始。

```js
const offset = (arr,offset) => [...arr.slice(offset),...arr.slice(0,offset)];
```

<div class="code-editor" data-url="codes/javascript/ts/offset.ts" data-language="typescript"></div>

> 调用方式:

```js
offset([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
offset([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/offset.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/offset.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/offset.html"></iframe>