| 标题                   | 标签         |
| ---------------------- | ------------ |
| upperize(对象属性大写) | object(对象) |

将对象的所有键转换为大写。

- 使用 Object.keys() 获取对象键的数组。
- 使用 Array.prototype.reduce() 将数组映射到对象，使用 String.prototype.toUpperCase() 将键大写。

```js
const upperize = obj =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k.toUpperCase()] = obj[k];
    return acc;
  }, {});
```

> 调用方式:

```js
upperize({ Name: 'John', Age: 22 }); // { NAME: 'John', AGE: 22 }
```

> 应用场景
