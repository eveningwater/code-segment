|  标题   | 标签  |
|  ----  | ----  |
| combine(合并数组) | array,object,intermediate(数组，对象，两者之间的) |

组合两个对象数组，使用指定的键来匹配对象。

* 将 `Array.prototype.reduce()` 与对象累加器一起使用，以根据给定的 `prop` 组合两个数组中的所有对象。
* 使用 `Object.values()` 将结果对象转换为数组并返回。

> 代码如下:

```js
const combine = (a,b,prop) => Object.values(
    [...a,...b].reduce((acc,v) => {
        const item = v[prop];
        if(item){
            acc[item] = acc[item] ? { ...acc[item],...v} : { ...v }
        }
        return acc;
    },{})
);
```

> 调用方式:

```js
const x = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Maria' }
];
const y = [
  { id: 1, age: 28 },
  { id: 3, age: 26 },
  { age: 3}
];
combine(x, y, 'id');
// [
//  { id: 1, name: 'John', age: 28 },
//  { id: 2, name: 'Maria' },
//  { id: 3, age: 26 }
// ]     
```

> 应用场景