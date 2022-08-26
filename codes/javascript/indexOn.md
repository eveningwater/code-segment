|  标题   | 标签  |
|  ----  | ----  |
| indexOn(根据提供的属性名将数组转成对象) | array,object(数组，对象) |

从数组中创建一个对象，使用指定的键并将其从每个值中排除。

* 使用 Array.prototype.reduce() 从 arr 创建一个对象。
* 使用对象解构来获取给定键的值和关联的数据，并将键值对添加到对象中。

```js
const indexOn = (arr,key) => arr.reduce((acc,val) => {
    const { [key]:id,...data } = v;
    acc[id] = data;
    return acc;
},{});
```

> 调用方式:

```js
indexOn([
  { id: 10, name: 'apple' },
  { id: 20, name: 'orange' }
], 'id');
// { '10': { name: 'apple' }, '20': { name: 'orange' } }
```

> 应用场景

<iframe src="codes/javascript/html/indexOn.html"></iframe>




