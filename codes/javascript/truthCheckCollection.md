| 标题                                         | 标签                                 |
| -------------------------------------------- | ------------------------------------ |
| truthCheckCollection(检查数组中是否存在元素) | object,logic,array(对象，逻辑，数组) |

检查谓词函数对于集合的所有元素是否为真。

- 使用 Array.prototype.every() 检查每个传递的对象是否具有指定的属性以及它是否返回真值。

```js
const truthCheckCollection = (collection, pre) =>
  collection.every(obj => obj[pre]);
```

> 调用方式:

```js
truthCheckCollection(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' }
  ],
  'sex'
); // true
```

> 应用场景
