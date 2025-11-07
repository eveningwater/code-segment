|  标题   | 标签  |
|  ----  | ----  |
| mapObject(映射数组元素到对象) | array,object(数组，对象) |

使用函数将数组的值映射到对象。

* 使用 Array.prototype.reduce() 将 fn 应用于 arr 中的每个元素，并将结果组合成一个对象。
* 使用 el 作为每个属性的键，使用 fn 的结果作为值。

```js
const mapObject = (arr,fn) => arr.reduce((acc,item,index) => {
    acc[item] = fn(item,index,arr);
    return acc;
},{})
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/map-object.ts" data-language="typescript"></div>

> 调用方式:

```js
mapObject([1, 2, 3], a => a * a); // { 1: 1, 2: 4, 3: 9 }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/map-object.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/map-object.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/map-object.html"></iframe>