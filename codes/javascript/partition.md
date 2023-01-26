|  标题   | 标签  |
|  ----  | ----  |
| partition(分区数组) | array,object(数组，对象) |

根据提供的函数对每个元素的真实性，将元素分组到两个数组中。

* 使用 Array.prototype.reduce() 创建一个包含两个数组的数组。
* 使用 Array.prototype.push() 将 fn 返回 true 的元素添加到第一个数组，将 fn 返回 false 的元素添加到第二个数组。

```js
const partition = (arr,fn) => arr.reduce((acc,val,i,arr) => {
    acc[fn(val,i,arr) ? 0 : 1].push(val);
    return acc;
},[[],[]])
```

> 调用方式:

```js
const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
];
partition(users, o => o.active);
// [
//   [{ user: 'fred', age: 40, active: true }],
//   [{ user: 'barney', age: 36, active: false }]
// ]
```

> 应用场景