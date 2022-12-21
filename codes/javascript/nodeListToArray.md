|  标题   | 标签  |
|  ----  | ----  |
| nodeListToArray(节点列表转成节点数组) | browser,array(浏览器，数组) |

将 NodeList 转换为数组。

* 在新数组中使用扩展运算符 (...) 将 NodeList 转换为数组。

```js
const nodeListToArray = nodeList => [...nodeList];
```

> 调用方式:

```js
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```

> 应用场景

<iframe src="codes/javascript/html/nodeListToArray.html"></iframe>

