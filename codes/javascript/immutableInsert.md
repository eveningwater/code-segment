| 标题                              | 标签                    |
| --------------------------------- | ----------------------- |
| immutableInsert(不可变的数据插入) | array,object(数组,对象) |

不可变的数据插入。

- 实现深度克隆用以不改变源数据。
- 使用 `Array.prototype.shift()`截取传入的属性数组中的属性。
- 当属性数组 keyPath 的长度大于 0，则递归。
- 使用 `Array.prototype.splice()`将新的值插入到数据中。

> 代码如下:

```js
const immutableInsert = (data, keyPath, insertVal) => {
  const deepClone = obj => {
    if (obj === null) {
      return null;
    }
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
      key =>
        (clone[key] =
          typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
    if (Array.isArray(obj)) {
      clone.length = obj.length;
      return Array.from(clone);
    }
    return clone;
  };
  const insert = (newData, newKeyPath) => {
    const key = newKeyPath.shift(),
      index = newKeyPath.shift(),
      len = newKeyPath.length;
    if (len > 0) {
      insert(newData[key][index], newKeyPath);
    } else {
      newData[key].splice(index, 0, insertVal);
    }
  };
  return insert(deepClone(data), keyPath);
};
```

> 调用方式:

```js
const data = {
  id: 'id0',
  name: 'root',
  fields: [
    {
      id: 'id1',
      name: 'name 1-1',
      fields: [
        {
          id: 'id1-1',
          name: 'name 1-1'
        },
        {
          id: 'id1-2',
          name: 'name 1-2',
          fields: [
            {
              id: 'targetId'
            }
          ]
        }
      ]
    },
    {
      id: 'id2',
      name: 'name 2-1',
      fields: [
        {
          id: 'id2-1',
          name: 'name 2-1'
        }
      ]
    }
  ]
};
console.log(
  immutableInsert(data, ['fields', 0, 'fields', 1, 'fields', 0], {
    id: 'newId'
  })
);
// const newData = {
//   id: "id0",
//   name: "root",
//   fields: [
//     {
//       id: "id1",
//       name: "name 1-1",
//       fields: [
//         {
//           id: "id1-1",
//           name: "name 1-1",
//         },
//         {
//           id: "id1-2",
//           name: "name 1-2",
//           fields: [
//             {
//               id: "newId",
//             },
//             {
//               id: "targetId",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "id2",
//       name: "name 2-1",
//       fields: [
//         {
//           id: "id2-1",
//           name: "name 2-1",
//         },
//       ],
//     },
//   ],
// };
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/immutableInsert.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/immutableInsert.html"></iframe>
