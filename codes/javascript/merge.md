|  标题   | 标签  |
|  ----  | ----  |
| merge(合并对象) | object,array(对象，数组) |

从两个或多个对象的组合中创建一个新对象。

* 使用 Array.prototype.reduce() 结合 Object.keys() 迭代所有对象和键。
* 使用 Object.prototype.hasOwnProperty() 和 Array.prototype.concat() 为存在于多个对象中的键附加值。

```js
const merge = (...args) => [...args].reduce((acc,item) => Object.keys(item).reduce((a,k) => {
    acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(item[k]) : item[k];
    return acc;
},{}),{});
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/merge.ts" data-language="typescript"></div>

> 调用方式:

```js
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};
merge(object, other);
// { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/merge.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/merge.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/merge.html"></iframe>