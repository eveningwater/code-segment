|  标题   | 标签  |
|  ----  | ----  |
| objectFromPairs(从给定键值对创建对象) | object,array(对象，数组) |

从给定的键值对创建一个对象。

* 使用 Array.prototype.reduce() 创建和组合键值对。
* [Object.fromEntries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) 提供了类似的功能。

```js
const objectFromPairs = arr => [...arr].reduce((res,[key,val]) => ((res[key] = val),res),{});
```

<div class="code-editor" data-url="codes/javascript/ts/object-from-pairs.ts" data-language="typescript"></div>

> 调用方式:

```js
objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
objectFromPairs(new Map([['a', 1], ['b', 2]])); // {a: 1, b: 2}
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/object-from-pairs.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/object-from-pairs.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/object-from-pairs.html"></iframe>