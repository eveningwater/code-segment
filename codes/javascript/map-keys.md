|  标题   | 标签  |
|  ----  | ----  |
| mapKeys(映射属性) | object(对象) |

使用提供的函数映射对象的键，生成一个新对象。

* 使用 Object.keys() 迭代对象的键。
* 使用 Array.prototype.reduce() 使用 fn 创建具有相同值和映射键的新对象。

```js
const mapKeys = (obj,fn) => Object.keys(obj).reduce((acc,k) => {
    acc[fn(obj[k],k,obj)] = obj[k];
    return acc;
},{});
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/map-keys.ts" data-language="typescript"></div>


> 调用方式:

```js
mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/map-keys.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/map-keys.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/map-keys.html"></iframe>