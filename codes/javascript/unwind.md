| 标题                         | 标签         |
| ---------------------------- | ------------ |
| unwind(展开对象生成对象数组) | object(对象) |

从对象及其数组值属性之一生成对象数组。

- 使用对象解构从对象中排除指定键的键值对。
- 使用 Array.prototype.map() 作为给定键的值来创建一个对象数组。
- 每个对象都包含原始对象的值，但映射到其各个值的键除外。

```js
const unwind = (key, obj) => {
  const { [key]: _, ...rest } = obj;
  return obj[key].map(val => ({ ...rest, [key]: val }));
};
```

> 调用方式:

```js
unwind('b', { a: true, b: [1, 2] }); // [{ a: true, b: 1 }, { a: true, b: 2 }]
```

> 应用场景
