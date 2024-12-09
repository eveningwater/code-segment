| 标题                        | 标签        |
| --------------------------- | ----------- |
| toArray(将任意值转换成数组) | array(数组) |

将任意值转换成数组。

- 使用`es6`的[Array.from](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)方法来将类数组转换成数组
- 如果不支持`es6`就使用`Array.prototype.slice.call`方法来进行转换

> 代码如下:

```js
const toArray = (value = '') =>
  Array.from ? Array.from(value) : Array.prototype.slice.call(value);
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/to-array.ts" data-language="typescript"></div>

> 调用方式:

```js
toArray('foo'); //["f", "o", "o"]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/to-array.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/to-array.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/to-array.html"></iframe>
