| 标题                       | 标签         |
| -------------------------- | ------------ |
| renameKeys(重命名对象属性) | object(对象) |

用提供的值替换多个对象键的名称。

- 将 Object.keys() 与 Array.prototype.reduce() 和扩展运算符 (...) 结合使用，以获取对象的键并根据 keysMap 重命名它们。

```js
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
```

> 调用方式:

```js
const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
renameKeys({ name: 'firstName', job: 'passion' }, obj);
// { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```

> 应用场景
