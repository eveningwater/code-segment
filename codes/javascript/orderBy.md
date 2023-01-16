|  标题   | 标签  |
|  ----  | ----  |
| orderBy(根据给定属性列表和排序列表对数组排序) | object,array(对象，数组) |

对对象数组进行排序，按属性和顺序排序。

* 在 props 数组上使用 Array.prototype.sort()、Array.prototype.reduce()，默认值为 0。
* 根据提供的顺序使用数组解构来交换属性位置。
* 如果未提供排序数组，则默认按“asc”排序。

```js
const orderBy = (arr,props,orders) => [...arr].sort((a,b) => props.reduce((acc,prop,i) => {
    if(acc === 0){
        const [p1,p2] = orders && orders[i] === 'desc' ? [b[prop],a[prop]] : [a[prop],b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
    }
    return acc;
},0))
```

> 调用方式:

```js
const users = [
  { name: 'fred', age: 48 },
  { name: 'barney', age: 36 },
  { name: 'fred', age: 40 },
];
orderBy(users, ['name', 'age'], ['asc', 'desc']);
// [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
orderBy(users, ['name', 'age']);
// [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]
```

> 应用场景