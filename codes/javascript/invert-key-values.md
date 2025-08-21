| 标题                                          | 标签         |
| --------------------------------------------- | ------------ |
| invertKeyValues(反转对象的键值(基于回调函数)) | object(对象) |

反转对象的键值对，而不改变它。

- 使用 Object.keys() 和 Array.prototype.reduce() 反转对象的键值对并应用提供的函数（如果有）。
- 省略第二个参数 handler 以获取反转键而不对其应用函数。
- 每个反转键对应的反转值是一个键数组，负责生成反转值。 如果提供了一个函数，它将应用于每个反转键。

```js
const invertKeyValues = (obj, handler) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = handler ? handler(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/invert-key-values.ts" data-language="typescript"></div>

> 调用方式:

```js
invertKeyValues({ a: 1, b: 2, c: 1 }); // { 1: [ 'a', 'c' ], 2: [ 'b' ] }
invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value);
// { group1: [ 'a', 'c' ], group2: [ 'b' ] }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/invert-key-values.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/invert-key-values.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/invert-key-values.html"></iframe>
