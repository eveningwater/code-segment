|  标题   | 标签  |
|  ----  | ----  |
| findPath(根据指定值查找对象路径) | array,object(数组,对象) |

根据指定值查找对象路径。

* 使用 `Object.keys()`获取对象的属性。
* 使用 `Array.prototype.some()`匹配符合条件的属性名。
* 使用 `Array.prototype.concat()`合并属性,如果是数组的索引属性，则通过`+`操作符转换成数字，否则就是属性本身。
* 如果对象的值是对象，使用递归继续遍历。
* 使用 `Array.prototype.slice()`去掉最后一个获取到的属性。

> 代码如下:

```js
const findPath = (obj,val) => {
    let res = [];
    const handler = (o,p) => Object.keys(o).some(k => {
        res = p.concat(isNaN(Number(k)) ? k : +k);
        return val === o[k] || o[k] && typeof o[k] === "object" && handler(o[k],res);
    });
    handler(obj,[]);
    return res.slice(0,-1);
}
```

> 调用方式:

```js
const data = {
  id: "id0",
  name: "root",
  fields: [
    {
      id: "id1",
      name: "name 1-1",
      fields: [
        {
          id: "id1-1",
          name: "name 1-1",
        },
        {
          id: "id1-2",
          name: "name 1-2",
          fields: [
            {
              id: "targetId",
            },
          ],
        },
      ],
    },
    {
      id: "id2",
      name: "name 2-1",
      fields: [
        {
          id: "id2-1",
          name: "name 2-1",
        },
      ],
    },
  ],
};
console.log(findPath(data,'targetId'));//[ 'fields', 0, 'fields', 1, 'fields', 0 ]
```

> 应用场景