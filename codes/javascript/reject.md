| 标题                             | 标签 |
| -------------------------------- | ---- |
| reject(匹配不符合条件的数组元素) | ()   |

根据谓词函数过滤数组的值，仅返回谓词函数返回 false 的值。

- 将 Array.prototype.filter() 与谓词函数 pred 结合使用，以仅返回它返回 false 的值。

```js
const reject = (pred, arr) => arr.filter((...args) => !pred(...args));
```

> 调用方式:

```js
reject(x => x % 2 === 0, [1, 2, 3, 4, 5]); // [1, 3, 5]
reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']);
// ['Pear', 'Kiwi']
```

> 应用场景
