| 标题                 | 标签        |
| -------------------- | ----------- |
| remove(移除数组元素) | array(数组) |

通过删除给定函数返回 false 的元素来改变数组。

- 使用 Array.prototype.filter() 查找返回真值的数组元素。
- 使用 Array.prototype.reduce() 来移除使用 Array.prototype.splice() 的元素。
- 使用三个参数（值、索引、数组）调用回调函数。

```js
const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, item) => {
        arr.splice(arr.indexOf(item), 1);
        return acc.concat(item);
      }, [])
    : [];
```

<div class="code-editor" data-url="codes/javascript/ts/remove.ts" data-language="typescript"></div>

> 调用方式:

```js
remove([1, 2, 3, 4], n => n % 2 === 0); // [2, 4]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/remove.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/remove.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/remove.html"></iframe>