|  标题   | 标签  |
|  ----  | ----  |
| objectToPairs(从对象创建键值对) | object,array(对象，数组) |

从一个对象创建一个键值对数组。

* 使用 Object.entries() 从给定对象中获取键值对数组。

```js
const objectToPairs = obj => Object.entries(obj);
```

<div class="code-editor" data-url="codes/javascript/ts/object-to-pairs.ts" data-language="typescript"></div>

> 调用方式:

```js
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/object-to-pairs.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/object-to-pairs.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/object-to-pairs.html"></iframe>