| 标题                                       | 标签        |
| ------------------------------------------ | ----------- |
| uniqueRegExp(通过正则表达式来达到数组去重) | array(数组) |

通过正则表达式来达到数组去重。

- 使用`sort`方法将数组排序，然后使用`join`方法将数组转换成字符串，再使用一系列`replace`方法将字符串去重，接着使用`split`方法将去重后的字符串转换为数组

> 代码如下:

```js
const uniqueRegExp = arr =>
  arr
    .sort()
    .join(',,')
    .replace(/(,|^)([^,]+)(,,\2)+(,|$)/g, '$1$2$4')
    .replace(/,,+/g, ',')
    .replace(/,$/, '')
    .split(',');
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/uniqueRegExp.ts" data-language="typescript"></div>

> 调用方式:

```js
uniqueRegExp([1, 2, 3, 1]);
// [1,2,3]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/uniqueRegExp.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/uniqueRegExp.html"></iframe>
