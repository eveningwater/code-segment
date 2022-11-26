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

> 调用方式:

```js
mapObject([1, 2, 3], a => a * a); // { 1: 1, 2: 4, 3: 9 }
```

> 应用场景