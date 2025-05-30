| 标题                                | 标签         |
| ----------------------------------- | ------------ |
| forOwnRight(倒转遍历对象每一个属性) | object(对象) |

反向迭代对象的所有自身属性，为每个属性运行回调。

- 使用 `Object.keys()` 获取对象的所有属性，使用 `Array.prototype.reverse()` 反转它们的顺序。
- 使用 `Array.prototype.forEach()` 为每个键值对运行提供的函数。
- 回调接收三个参数——值、键和对象。

```js
const forOwnRight = (obj, handler) =>
  Object.keys(obj)
    .reverse()
    .forEach(k => handler(obj[k], k, obj));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/for-own-right.ts" data-language="typescript"></div>

> 调用方式:

```js
forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)); // 1, 'bar'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/for-own-right.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/for-own-right.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/for-own-right.html"></iframe>
