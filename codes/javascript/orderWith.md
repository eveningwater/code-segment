|  标题   | 标签  |
|  ----  | ----  |
| orderWith(根据属性列表的顺序对数组排序) | array,object(数组，对象) |

根据提供的顺序数组，按属性对对象数组进行排序。

* 使用 Array.prototype.reduce() 从顺序数组创建一个对象，其中值作为键，它们的原始索引作为值。
* 使用 Array.prototype.sort() 对给定数组进行排序，跳过 order 数组中 prop 为空或不为空的元素。

```js
const orderWith = (arr,prop,orders) => {
    const orderValues = orders.reduce((acc,item,i) => {
        acc[item] = i;
        return acc;
    },{});
    return [...arr].sort((a,b) => {
        if(orderValues[a[prop]] === undefined){
            return 1;
        }
        if(orderValues[b[prop]] === undefined){
            return -1;
        }
        return orderValues[a[prop]] - orderValues[b[prop]];   
    })
}
```

> 调用方式:

```js
const users = [
  { name: 'fred', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' },
];
orderWith(users, 'language', ['Javascript', 'TypeScript', 'Java']);
/*
[
  { name: 'fred', language: 'Javascript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' }
]
*/
```

> 应用场景