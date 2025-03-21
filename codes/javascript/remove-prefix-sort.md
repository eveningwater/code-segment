| 标题                             | 标签                   |
| -------------------------------- | ---------------------- |
| removePrefixSort(数组去前缀排序) | array,sort(数组，排序) |

数组去前缀排序。

- 使用`Array.prototype.sort()`方法实现数组排序，在内部排序规则中使用`String.prototype.replace()`方法去除排序字符串前缀

> 代码如下：

```js
function removePrefixSort(sortArr) {
  return sortArr.sort((a, b) => (delPrefix(a) > delPrefix(b) ? 1 : -1));
}
function delPrefix(item) {
  return item.replace(/^(xtt|code|js)-/, '');
}
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/remove-prefix-sort.ts" data-language="typescript"></div>

> 调用方式：

```js
removePrefixSort([
  'xtt-sort',
  'code-clear',
  'js-array',
  'node',
  'code-echo',
  'js-symbol',
  'css',
  'xtt-romove'
]);
// ['js-array', 'code-clear', 'css', 'code-echo', 'node', 'xtt-romove', 'xtt-sort', 'js-symbol']
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/remove-prefix-sort.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/remove-prefix-sort.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/remove-prefix-sort.html"></iframe>
