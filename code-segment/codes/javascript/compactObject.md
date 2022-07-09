|  标题   | 标签  |
|  ----  | ----  |
| compactObject(过滤对象) | object,array,recursion,advanced(对象，数组，递归，高级的) |

从对象或数组中深度删除所有转换为false的值。

* 使用递归。
* 初始化可迭代数据，对数组使用 `Array.isArray()`、`Array.prototype.filter()` 和 `Boolean` 以避免忽略掉数组。
* 使用 `Object.keys()` 和 `Array.prototype.reduce()` 使用适当的初始值迭代每个键。
* 使用`Boolean`函数来确定每个键值的true或false，如果它是true，则将其添加到累加器中。
* 使用 `typeof` 确定给定值是否为对象并再次调用该函数以对其进行深度过滤。

> 代码如下:

```js
const compactObject = val => {
    const data = Array.isArray(val) ? val.filter(Boolean) : val;
    return Object.keys(data).reduce((acc,key) => {
        const value = data[key];
        if(Boolean(value)){
            acc[key] = typeof value === "object" ? compactObject(value) : value;
        }
        return acc;
    },Array.isArray(val) ? [] : {});
};
```

> 调用方式:

```js
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: '',
  g: 'a',
  h: [null, false, '', true, 1, 'a'],
  i: { j: 0, k: false, l: 'a' }
};
compactObject(obj);
// { c: true, e: 1, g: 'a', h: [ true, 1, 'a' ], i: { l: 'a' } }
```

> 应用场景