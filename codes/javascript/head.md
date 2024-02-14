| 标题                             | 标签        |
| -------------------------------- | ----------- |
| head(查找数组当中的第一个数组项) | array(数组) |

返回数组的头部。

- 检查 arr 是否真实并具有长度属性。
- 如果可能，使用 arr[0] 返回第一个元素，否则返回 undefined。

```js
const head = arr => (Array.isArray(arr) && arr.length ? arr[0] : void 0);
```

> 调用方式:

```js
head([1, 2, 3]); // 1
head([]); // undefined
head(null); // undefined
head(undefined); // undefined
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/head.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/head.html"></iframe>
