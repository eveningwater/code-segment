|  标题   | 标签  |
|  ----  | ----  |
| nodeListToArray(节点列表转成节点数组) | browser,array(浏览器，数组) |

将 NodeList 转换为数组。

* 在新数组中使用扩展运算符 (...) 将 NodeList 转换为数组。

```js
const nodeListToArray = nodeList => [...nodeList];
```

<div class="code-editor" data-url="codes/javascript/ts/node-list-to-array.ts" data-language="typescript"></div>

> 调用方式:

```js
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/node-list-to-array.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/node-list-to-array.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/node-list-to-array.html"></iframe>
